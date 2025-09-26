// ==UserScript==
// @name         抖音弹幕精确提取器
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  精确提取抖音直播弹幕并在控制台打印，支持POST推送，支持多窗口区分
// @match        https://live.douyin.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const processedIds = new Set();
    let observer = null;
    let isProcessing = false; // 防止重复处理标志

    // 配置项
    const config = {
        apiUrl: 'http://localhost:3000/danmu', // 本地API地址
        enablePush: true, // 是否启用推送
        retryCount: 3, // 失败重试次数
        timeout: 5000 // 请求超时时间(毫秒)
    };

    // 获取或设置直播用户ID
    function getStreamerId() {
        return GM_getValue('douyin_streamer_id', '');
    }

    function setStreamerId(id) {
        GM_setValue('douyin_streamer_id', id);
    }

    // 创建配置弹窗
    function createConfigDialog() {
        return new Promise((resolve) => {
            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            `;

            // 创建配置窗口
            const dialog = document.createElement('div');
            dialog.style.cssText = `
                background: white;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                width: 400px;
                max-width: 90vw;
                text-align: center;
            `;

            // 标题
            const title = document.createElement('h2');
            title.textContent = '🎯 抖音弹幕提取器配置';
            title.style.cssText = `
                margin: 0 0 20px 0;
                color: #333;
                font-size: 24px;
                font-weight: 600;
            `;

            // 说明文字
            const description = document.createElement('p');
            description.textContent = '请输入直播用户ID（用于区分多个直播窗口）';
            description.style.cssText = `
                margin: 0 0 20px 0;
                color: #666;
                font-size: 14px;
                line-height: 1.5;
            `;

            // 输入框
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = '例如：用户昵称、房间号等...';
            input.value = getStreamerId();
            input.style.cssText = `
                width: 100%;
                padding: 12px 16px;
                border: 2px solid #e1e5e9;
                border-radius: 8px;
                font-size: 16px;
                margin-bottom: 20px;
                box-sizing: border-box;
                transition: border-color 0.3s;
            `;

            input.addEventListener('focus', () => {
                input.style.borderColor = '#FF0050';
            });

            input.addEventListener('blur', () => {
                input.style.borderColor = '#e1e5e9';
            });

            // 按钮容器
            const buttonContainer = document.createElement('div');
            buttonContainer.style.cssText = `
                display: flex;
                gap: 10px;
                justify-content: center;
            `;

            // 确认按钮
            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = '✅ 确认并开始';
            confirmBtn.style.cssText = `
                background: linear-gradient(45deg, #FF0050, #FF6B6B);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                flex: 1;
                transition: transform 0.2s;
            `;

            // 取消按钮（刷新页面）
            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = '❌ 取消';
            cancelBtn.style.cssText = `
                background: #95a5a6;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                flex: 1;
                transition: transform 0.2s;
            `;

            // 按钮悬停效果
            [confirmBtn, cancelBtn].forEach(btn => {
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'translateY(-2px)';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'translateY(0)';
                });
            });

            // 事件处理
            confirmBtn.addEventListener('click', () => {
                const streamerId = input.value.trim();
                if (streamerId) {
                    setStreamerId(streamerId);
                    overlay.remove();
                    resolve(streamerId);
                } else {
                    input.style.borderColor = '#e74c3c';
                    input.placeholder = '请输入有效的用户ID！';
                }
            });

            cancelBtn.addEventListener('click', () => {
                overlay.remove();
                // 可以在这里添加取消逻辑，或者保持弹窗显示
                location.reload();
            });

            // 回车键确认
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    confirmBtn.click();
                }
            });

            // 组装元素
            buttonContainer.appendChild(confirmBtn);
            buttonContainer.appendChild(cancelBtn);

            dialog.appendChild(title);
            dialog.appendChild(description);
            dialog.appendChild(input);
            dialog.appendChild(buttonContainer);
            overlay.appendChild(dialog);

            // 添加到页面
            document.body.appendChild(overlay);

            // 自动聚焦输入框
            setTimeout(() => input.focus(), 100);
        });
    }

    // 检查是否需要显示配置弹窗
    function shouldShowConfig() {
        const currentId = getStreamerId();
        return !currentId || currentId === '' || confirm('是否重新配置直播用户ID？');
    }

    // 精确提取弹幕信息（添加streamerId）
    function extractDanmakuInfo(danmakuElement, streamerId) {
        try {
            // 方法1: 通过data-id属性获取唯一标识
            let dataId = danmakuElement.getAttribute('data-id');

            // 方法2: 如果没有data-id，使用内容生成唯一ID
            if (!dataId) {
                const contentElement = danmakuElement.querySelector('.cL385mHb');
                const usernameElement = danmakuElement.querySelector('.v8LY0gZF');
                if (contentElement && usernameElement) {
                    const content = contentElement.textContent.trim();
                    const username = usernameElement.textContent.trim();
                    dataId = username + content + Date.now();
                } else {
                    dataId = 'unknown_' + Date.now() + Math.random();
                }
            }

            // 提取用户名
            const usernameElement = danmakuElement.querySelector('.v8LY0gZF');
            let username = '未知用户';
            if (usernameElement) {
                username = usernameElement.textContent.trim();
                // 清理用户名中的冒号
                username = username.replace('：', '').trim();
            }

            // 提取弹幕内容
            const contentElement = danmakuElement.querySelector('.cL385mHb');
            let content = '';
            if (contentElement) {
                // 尝试获取带有表情的文本内容
                const emojiText = contentElement.querySelector('.webcast-chatroom___content-with-emoji-text');
                if (emojiText) {
                    content = emojiText.textContent.trim();
                } else {
                    content = contentElement.textContent.trim();
                }
            }

            // 提取用户等级
            const levelImg = danmakuElement.querySelector('.uVbVarFF img');
            const level = levelImg ? levelImg.src : '';

            return {
                id: dataId,
                username: username,
                content: content,
                level: level,
                timestamp: new Date().toISOString(),
                streamerId: streamerId, // 添加直播用户ID
                element: danmakuElement
            };
        } catch (error) {
            console.error('提取弹幕信息时出错:', error);
            return null;
        }
    }

    // 检查是否为有效弹幕
    function isValidDanmaku(danmakuInfo) {
        if (!danmakuInfo) return false;

        // 检查是否已处理过
        if (processedIds.has(danmakuInfo.id)) {
            return false;
        }

        // 检查内容是否为空
        if (!danmakuInfo.content || danmakuInfo.content.trim() === '') {
            return false;
        }

        // 过滤简单的系统消息（可选）
        const systemMessages = ['欢迎来到直播间', '关注了主播', '分享了直播间'];
        if (systemMessages.some(msg => danmakuInfo.content.includes(msg))) {
            return false;
        }

        return true;
    }

    // 美化打印弹幕（显示streamerId）
    function printDanmaku(danmakuInfo) {
        const time = new Date().toLocaleTimeString();

        console.log(
            `%c🎯 抖音弹幕 [${time}] - 主播: ${danmakuInfo.streamerId}`,
            'background: linear-gradient(45deg, #FF0050, #FF6B6B); color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
        );

        console.log(`%c👤 ${danmakuInfo.username}`, 'color: #3498db; font-weight: bold; font-size: 14px;');
        console.log(`%c💬 ${danmakuInfo.content}`, 'color: #2ecc71; font-size: 14px;');

        if (danmakuInfo.level) {
            console.log(`%c⭐ 等级: ${danmakuInfo.level.split('_').pop()}`, 'color: #f39c12; font-size: 12px;');
        }

        console.log(`%c🆔 ${danmakuInfo.id.substring(0, 10)}...`, 'color: #95a5a6; font-size: 10px;');
        console.log('%c' + '─'.repeat(60), 'color: #bdc3c7;');
    }

    // POST推送弹幕到本地API（包含streamerId）
    function pushDanmakuToAPI(danmakuInfo, retry = 0) {
        if (!config.enablePush) {
            console.log('📡 推送功能已禁用，跳过推送');
            return;
        }

        const payload = {
            id: danmakuInfo.id,
            username: danmakuInfo.username,
            content: danmakuInfo.content,
            level: danmakuInfo.level,
            timestamp: danmakuInfo.timestamp,
            streamerId: danmakuInfo.streamerId, // 添加主播ID
            platform: 'douyin'
        };

        try {
            GM_xmlhttpRequest({
                method: 'POST',
                url: config.apiUrl,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(payload),
                timeout: config.timeout,
                onload: function(response) {
                    if (response.status === 200) {
                        console.log(`✅ 弹幕推送成功: [${danmakuInfo.streamerId}] ${danmakuInfo.username} - ${danmakuInfo.content}`);
                    } else {
                        console.warn(`⚠️ 弹幕推送失败，状态码: ${response.status}`);
                        if (retry < config.retryCount) {
                            console.log(`🔄 第${retry + 1}次重试...`);
                            setTimeout(() => pushDanmakuToAPI(danmakuInfo, retry + 1), 1000);
                        }
                    }
                },
                onerror: function(error) {
                    console.error(`❌ 弹幕推送错误:`, error);
                    if (retry < config.retryCount) {
                        console.log(`🔄 第${retry + 1}次重试...`);
                        setTimeout(() => pushDanmakuToAPI(danmakuInfo, retry + 1), 1000);
                    } else {
                        console.error(`💥 弹幕推送失败，已达最大重试次数: ${danmakuInfo.content}`);
                    }
                },
                ontimeout: function() {
                    console.warn(`⏰ 弹幕推送超时`);
                    if (retry < config.retryCount) {
                        console.log(`🔄 第${retry + 1}次重试...`);
                        setTimeout(() => pushDanmakuToAPI(danmakuInfo, retry + 1), 1000);
                    }
                }
            });
        } catch (error) {
            console.error('🚨 推送请求异常:', error);
        }
    }

    // 处理单个弹幕元素
    function processDanmakuElement(element, streamerId) {
        if (isProcessing) return false;

        const danmakuInfo = extractDanmakuInfo(element, streamerId);
        if (danmakuInfo && isValidDanmaku(danmakuInfo)) {
            isProcessing = true;
            
            // 打印到控制台
            printDanmaku(danmakuInfo);
            
            // 推送到API
            pushDanmakuToAPI(danmakuInfo);
            
            processedIds.add(danmakuInfo.id);
            isProcessing = false;
            return true;
        }
        return false;
    }

    // 查找并处理所有现有弹幕
    function processExistingDanmakus(streamerId) {
        console.log(`🔍 开始扫描主播 [${streamerId}] 的现有弹幕...`);

        // 主要选择器
        const selectors = [
            '.webcast-chatroom___item',
            '[class*="chatroom___item"]',
            '.NkS2Invn'
        ];

        let danmakuElements = [];
        let foundSelector = '';

        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                console.log(`✅ 使用选择器 "${selector}" 找到 ${elements.length} 个元素`);
                danmakuElements = elements;
                foundSelector = selector;
                break;
            }
        }

        if (danmakuElements.length === 0) {
            console.log('❌ 未找到弹幕元素，5秒后重试...');
            return false;
        }

        // 处理找到的弹幕元素
        let newCount = 0;
        danmakuElements.forEach(element => {
            if (processDanmakuElement(element, streamerId)) {
                newCount++;
            }
        });

        if (newCount > 0) {
            console.log(`📊 发现 ${newCount} 条新弹幕`);
        }

        return true;
    }

    // 设置MutationObserver监听新弹幕
    function setupMutationObserver(streamerId) {
        observer = new MutationObserver((mutations) => {
            // 使用防抖避免频繁处理
            if (isProcessing) return;

            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            checkNodeForDanmaku(node, streamerId);
                        }
                    });
                }
            });
        });

        // 更精确的监听目标
        const chatContainer = document.querySelector('.webcast-chatroom___items-container') ||
                             document.querySelector('.webcast-chatroom___list') ||
                             document.body;

        observer.observe(chatContainer, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        });

        console.log(`🔍 MutationObserver监听器已启动 - 主播: ${streamerId}`);
    }

    // 检查节点是否包含弹幕（优化版）
    function checkNodeForDanmaku(node, streamerId) {
        // 如果节点本身就是弹幕项目
        if (node.classList && node.classList.contains('webcast-chatroom___item')) {
            processDanmakuElement(node, streamerId);
            return;
        }

        // 如果节点包含弹幕项目
        if (node.querySelector && node.querySelector('.webcast-chatroom___item')) {
            const danmakuElements = node.querySelectorAll('.webcast-chatroom___item');
            danmakuElements.forEach(element => {
                processDanmakuElement(element, streamerId);
            });
            return;
        }

        // 检查节点是否在弹幕容器内
        const closestDanmaku = node.closest('.webcast-chatroom___item');
        if (closestDanmaku) {
            processDanmakuElement(closestDanmaku, streamerId);
        }
    }

    // 测试API连接
    function testAPIConnection(streamerId) {
        if (!config.enablePush) return;

        console.log('🔌 测试API连接...');
        const testPayload = {
            test: true,
            message: '抖音弹幕提取器连接测试',
            streamerId: streamerId,
            timestamp: new Date().toISOString()
        };

        GM_xmlhttpRequest({
            method: 'POST',
            url: config.apiUrl,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(testPayload),
            timeout: 3000,
            onload: function(response) {
                if (response.status === 200) {
                    console.log('✅ API连接测试成功');
                } else {
                    console.warn(`⚠️ API连接测试失败，状态码: ${response.status}`);
                }
            },
            onerror: function() {
                console.error('❌ API连接测试失败，请检查服务器是否运行');
            },
            ontimeout: function() {
                console.warn('⏰ API连接测试超时');
            }
        });
    }

    // 初始化
    async function init() {
        console.log('🚀 初始化抖音弹幕精确提取器...');

        // 获取或配置直播用户ID
        let streamerId = getStreamerId();
        
        if (!streamerId || shouldShowConfig()) {
            streamerId = await createConfigDialog();
        }

        console.log(`🎯 当前监控的主播ID: ${streamerId}`);
        console.log(`📡 推送配置: ${config.enablePush ? '启用' : '禁用'} -> ${config.apiUrl}`);

        // 测试API连接
        testAPIConnection(streamerId);

        // 延迟执行，确保页面加载完成
        setTimeout(() => {
            const found = processExistingDanmakus(streamerId);

            if (found) {
                console.log('✅ 弹幕容器找到，开始实时监听...');
                setupMutationObserver(streamerId);
            } else {
                console.log('⏳ 未找到弹幕容器，5秒后重试...');
                setTimeout(() => init(), 5000);
            }
        }, 3000);
    }

    // 页面加载完成后启动
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 清理
    window.addEventListener('beforeunload', () => {
        if (observer) {
            observer.disconnect();
        }
        console.log('👋 脚本已卸载');
    });

})();
