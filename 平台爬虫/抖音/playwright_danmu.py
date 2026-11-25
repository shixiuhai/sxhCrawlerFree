#!/usr/bin/env python3
"""
抖音弹幕去中心化提取服务 - 简化版
支持多直播间同时监控，任务管理，资源优化
"""

import asyncio
import json
import logging
from datetime import datetime
from typing import Dict, Optional, Set
from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, HttpUrl
from playwright.async_api import async_playwright, Page, Browser
import uvicorn
import os

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("douyin_danmu")

class LiveTaskConfig(BaseModel):
    """直播任务配置"""
    live_id: str  # 直播间ID
    live_url: str  # 直播间URL
    api_callback: Optional[str] = None  # 回调API
    enable_push: bool = True  # 是否启用推送

class DanmuMessage(BaseModel):
    """弹幕消息结构"""
    id: str
    username: str
    content: str
    level: Optional[str] = None
    timestamp: str
    platform: str = "douyin"
    live_id: str

class DouyinDanmuService:
    """抖音弹幕服务核心类"""
    
    def __init__(self):
        self.app = FastAPI(title="抖音弹幕提取服务", version="1.0")
        self.browser: Optional[Browser] = None
        self.active_tasks: Dict[str, Dict] = {}  # 活跃任务
        self.processed_ids: Dict[str, Set[str]] = {}  # 本地去重集合
        
        self._setup_routes()
    
    def _setup_routes(self):
        """设置API路由"""
        @self.app.post("/api/task/start")
        async def start_task(config: LiveTaskConfig):
            """启动弹幕监控任务"""
            return await self._start_danmu_task(config)
        
        @self.app.post("/api/task/stop/{live_id}")
        async def stop_task(live_id: str):
            """停止弹幕监控任务"""
            return await self._stop_danmu_task(live_id)
        
        @self.app.get("/api/task/list")
        async def list_tasks():
            """获取所有任务状态"""
            return {
                "active_tasks": list(self.active_tasks.keys()),
                "total_tasks": len(self.active_tasks),
                "details": {
                    live_id: {
                        "start_time": task_info["start_time"],
                        "config": task_info["config"],
                        "processed_count": len(self.processed_ids.get(live_id, set()))
                    }
                    for live_id, task_info in self.active_tasks.items()
                }
            }
        
        @self.app.get("/api/task/status/{live_id}")
        async def task_status(live_id: str):
            """获取特定任务状态"""
            return await self._get_task_status(live_id)
        
        @self.app.get("/health")
        async def health_check():
            """健康检查"""
            return {"status": "healthy", "timestamp": datetime.now().isoformat()}
    
    async def init_browser(self):
        """初始化浏览器实例"""
        playwright = await async_playwright().start()
        self.browser = await playwright.chromium.launch(
            headless=True,
            args=[
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu',
                '--window-size=1200,800',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        )
        logger.info("浏览器初始化完成")
    
    async def _optimize_page(self, page: Page):
        """优化页面性能，屏蔽不必要资源"""
        # 路由处理：屏蔽图片、视频、字体等不必要资源
        async def route_handler(route):
            resource_type = route.request.resource_type
            if resource_type in ['image', 'media', 'font', 'stylesheet']:
                await route.abort()
            else:
                await route.continue_()
        
        # 设置路由
        await page.route("**/*", route_handler)
        
        # 设置视口大小
        await page.set_viewport_size({"width": 1200, "height": 800})
        
        # 注入优化脚本 - 屏蔽视频和直播流
        await page.add_init_script("""
            // 屏蔽视频和直播流
            const originalCreateElement = document.createElement.bind(document);
            document.createElement = function(tagName) {
                if (tagName.toLowerCase() === 'video' || tagName.toLowerCase() === 'canvas') {
                    const element = originalCreateElement(tagName);
                    // 阻止视频加载
                    Object.defineProperty(element, 'src', {
                        set: function() {},
                        get: function() { return ''; }
                    });
                    return element;
                }
                return originalCreateElement(tagName);
            };
            
            // 隐藏视频元素
            const style = document.createElement('style');
            style.textContent = `
                video, .webcast-player, .live-player, [class*="player"], 
                [class*="video"], [class*="live-stream"] {
                    display: none !important;
                    visibility: hidden !important;
                    width: 0 !important;
                    height: 0 !important;
                }
                .webcast-chatroom___messages-wrap {
                    position: relative !important;
                    z-index: 9999 !important;
                }
            `;
            document.head.appendChild(style);
        """)
    
    async def _extract_danmaku_info(self, element_handle, live_id: str):
        """提取弹幕信息"""
        try:
            # 执行JavaScript提取弹幕数据
            danmaku_data = await element_handle.evaluate("""
                (element) => {
                    try {
                        // 获取data-id或生成唯一ID
                        let dataId = element.getAttribute('data-id') || 
                                    element.getAttribute('id') || 
                                    Math.random().toString(36).substring(2) + Date.now();
                        
                        // 提取用户名
                        const usernameElement = element.querySelector('.v8LY0gZF') || 
                                              element.querySelector('[class*="username"]') ||
                                              element.querySelector('[class*="user"]');
                        let username = '未知用户';
                        if (usernameElement) {
                            username = usernameElement.textContent.trim().replace('：', '').replace(':', '').trim();
                        }
                        
                        // 提取弹幕内容
                        const contentElement = element.querySelector('.cL385mHb') || 
                                             element.querySelector('[class*="content"]') ||
                                             element.querySelector('[class*="message"]');
                        let content = '';
                        if (contentElement) {
                            const emojiText = contentElement.querySelector('.webcast-chatroom___content-with-emoji-text');
                            content = emojiText ? emojiText.textContent.trim() : contentElement.textContent.trim();
                        }
                        
                        // 过滤空内容和系统消息
                        if (!content || content.length === 0) {
                            return null;
                        }
                        
                        // 过滤系统消息
                        const systemMessages = ['欢迎来到直播间', '关注了主播', '分享了直播间', '进入直播间'];
                        if (systemMessages.some(msg => content.includes(msg))) {
                            return null;
                        }
                        
                        return {
                            id: dataId,
                            username: username,
                            content: content,
                            timestamp: new Date().toISOString()
                        };
                    } catch (error) {
                        console.error('提取弹幕错误:', error);
                        return null;
                    }
                }
            """)
            
            if danmaku_data and danmaku_data.get('content'):
                danmaku_data['live_id'] = live_id
                return DanmuMessage(**danmaku_data)
            return None
            
        except Exception as e:
            logger.error(f"提取弹幕信息错误: {e}")
            return None
    
    async def _process_danmaku_element(self, element_handle, live_id: str):
        """处理单个弹幕元素"""
        # 检查是否已处理
        danmaku_info = await self._extract_danmaku_info(element_handle, live_id)
        if not danmaku_info:
            return False
        
        # 本地去重检查
        if live_id not in self.processed_ids:
            self.processed_ids[live_id] = set()
        
        if danmaku_info.id in self.processed_ids[live_id]:
            return False
        
        # 标记为已处理
        self.processed_ids[live_id].add(danmaku_info.id)
        
        # 记录弹幕
        logger.info(f"🎯 弹幕 [{live_id}] {danmaku_info.username}: {danmaku_info.content}")
        
        # 推送到回调API（如果配置了）
        task_config = self.active_tasks.get(live_id, {})
        if task_config.get('config', {}).get('enable_push', True) and task_config.get('config', {}).get('api_callback'):
            await self._push_to_callback(danmaku_info, task_config['config']['api_callback'])
        
        return True
    
    async def _push_to_callback(self, danmaku: DanmuMessage, callback_url: str):
        """推送弹幕到回调API"""
        try:
            import httpx
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    callback_url,
                    json=danmaku.dict(),
                    timeout=5.0
                )
                if response.status_code == 200:
                    logger.debug(f"✅ 弹幕推送成功: {danmaku.username}")
                else:
                    logger.warning(f"⚠️ 弹幕推送失败: {response.status_code}")
        except Exception as e:
            logger.error(f"推送弹幕到回调API错误: {e}")
    
    async def _monitor_danmaku(self, page: Page, live_id: str):
        """监控弹幕"""
        logger.info(f"开始监控直播间: {live_id}")
        
        try:
            # 等待页面加载
            await page.wait_for_load_state('networkidle')
            
            # 尝试多种选择器查找弹幕容器
            selectors = [
                '.webcast-chatroom___items-container',
                '[class*="chatroom"]',
                '[class*="message-container"]',
                '.webcast-chatroom___list'
            ]
            
            chat_container = None
            for selector in selectors:
                chat_container = await page.query_selector(selector)
                if chat_container:
                    logger.info(f"找到弹幕容器: {selector}")
                    break
            
            if not chat_container:
                logger.warning(f"未找到弹幕容器，使用body作为容器")
                chat_container = page
            
            # 处理现有弹幕
            danmaku_selectors = [
                '.webcast-chatroom___item',
                '[class*="message-item"]',
                '[class*="chat-item"]'
            ]
            
            for selector in danmaku_selectors:
                existing_danmakus = await page.query_selector_all(selector)
                if existing_danmakus:
                    logger.info(f"找到 {len(existing_danmakus)} 条现有弹幕")
                    for danmaku_element in existing_danmakus:
                        await self._process_danmaku_element(danmaku_element, live_id)
                    break
            
            # 设置MutationObserver监听新弹幕
            await page.evaluate("""
                (liveId) => {
                    // 创建观察器
                    const observer = new MutationObserver((mutations) => {
                        mutations.forEach((mutation) => {
                            if (mutation.addedNodes.length > 0) {
                                mutation.addedNodes.forEach((node) => {
                                    if (node.nodeType === 1) {
                                        // 检查是否是弹幕元素
                                        if (node.classList && (
                                            node.classList.contains('webcast-chatroom___item') ||
                                            node.getAttribute('class')?.includes('message-item') ||
                                            node.getAttribute('class')?.includes('chat-item')
                                        )) {
                                            // 存储到全局变量供Python读取
                                            if (!window.newDanmakus) {
                                                window.newDanmakus = [];
                                            }
                                            window.newDanmakus.push({
                                                element: node,
                                                liveId: liveId,
                                                timestamp: Date.now()
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    });
                    
                    // 观察弹幕容器
                    const chatContainer = document.querySelector('.webcast-chatroom___items-container') || 
                                         document.querySelector('[class*="chatroom"]') ||
                                         document.body;
                    observer.observe(chatContainer, {
                        childList: true,
                        subtree: true
                    });
                    
                    window.danmuObserver = observer;
                    console.log('弹幕监听器已启动');
                }
            """, live_id)
            
            # 持续监控直到任务停止
            last_check_time = 0
            while live_id in self.active_tasks:
                # 定期检查新弹幕
                new_danmakus = await page.evaluate("""
                    () => {
                        if (!window.newDanmakus || window.newDanmakus.length === 0) {
                            return [];
                        }
                        const danmakus = window.newDanmakus;
                        window.newDanmakus = [];
                        return danmakus;
                    }
                """)
                
                for danmaku_data in new_danmakus:
                    # 获取元素句柄
                    element_handle = await page.evaluate_handle("(element) => element", danmaku_data['element'])
                    await self._process_danmaku_element(element_handle, live_id)
                    await element_handle.dispose()
                
                await asyncio.sleep(0.5)  # 降低CPU使用率
                
        except Exception as e:
            logger.error(f"监控弹幕错误 [{live_id}]: {e}")
            if live_id in self.active_tasks:
                await self._stop_danmu_task(live_id)
    
    async def _start_danmu_task(self, config: LiveTaskConfig):
        """启动弹幕监控任务"""
        if not self.browser:
            await self.init_browser()
        
        if config.live_id in self.active_tasks:
            raise HTTPException(status_code=400, detail=f"任务已存在: {config.live_id}")
        
        try:
            # 创建新页面
            context = await self.browser.new_context()
            page = await context.new_page()
            
            # 优化页面性能
            await self._optimize_page(page)
            
            # 导航到直播间
            logger.info(f"正在打开直播间: {config.live_url}")
            await page.goto(config.live_url, wait_until='domcontentloaded', timeout=60000)
            
            # 存储任务信息
            self.active_tasks[config.live_id] = {
                'page': page,
                'context': context,
                'config': config.dict(),
                'start_time': datetime.now().isoformat()
            }
            
            # 初始化去重集合
            self.processed_ids[config.live_id] = set()
            
            # 启动监控任务
            asyncio.create_task(self._monitor_danmaku(page, config.live_id))
            
            logger.info(f"✅ 任务启动成功: {config.live_id}")
            return {
                "status": "success",
                "live_id": config.live_id,
                "message": "弹幕监控任务已启动",
                "start_time": datetime.now().isoformat()
            }
            
        except Exception as e:
            logger.error(f"启动任务错误: {e}")
            if config.live_id in self.active_tasks:
                del self.active_tasks[config.live_id]
            raise HTTPException(status_code=500, detail=f"启动任务失败: {str(e)}")
    
    async def _stop_danmu_task(self, live_id: str):
        """停止弹幕监控任务"""
        if live_id not in self.active_tasks:
            raise HTTPException(status_code=404, detail=f"任务不存在: {live_id}")
        
        try:
            task_info = self.active_tasks[live_id]
            page = task_info['page']
            context = task_info['context']
            
            # 关闭页面和上下文
            await page.close()
            await context.close()
            
            # 清理资源
            if live_id in self.processed_ids:
                del self.processed_ids[live_id]
            del self.active_tasks[live_id]
            
            logger.info(f"🛑 任务已停止: {live_id}")
            return {
                "status": "success",
                "live_id": live_id,
                "message": "弹幕监控任务已停止",
                "stop_time": datetime.now().isoformat()
            }
            
        except Exception as e:
            logger.error(f"停止任务错误: {e}")
            raise HTTPException(status_code=500, detail=f"停止任务失败: {str(e)}")
    
    async def _get_task_status(self, live_id: str):
        """获取任务状态"""
        if live_id not in self.active_tasks:
            raise HTTPException(status_code=404, detail=f"任务不存在: {live_id}")
        
        task_info = self.active_tasks[live_id]
        return {
            "live_id": live_id,
            "status": "running",
            "start_time": task_info['start_time'],
            "config": task_info['config'],
            "processed_count": len(self.processed_ids.get(live_id, set()))
        }
    
    async def shutdown(self):
        """关闭服务"""
        # 停止所有任务
        for live_id in list(self.active_tasks.keys()):
            try:
                await self._stop_danmu_task(live_id)
            except Exception as e:
                logger.error(f"停止任务 {live_id} 时出错: {e}")
        
        # 关闭浏览器
        if self.browser:
            await self.browser.close()
        
        logger.info("服务已关闭")

# 创建服务实例
service = DouyinDanmuService()

@app.on_event("shutdown")
async def shutdown_event():
    await service.shutdown()

# 启动服务
if __name__ == "__main__":
    uvicorn.run(
        service.app,
        host="0.0.0.0",
        port=8000,
        log_level="info"
    )
