// 主入口
//     ↓
// init() [函数8]  // 主初始化函数
//     ↓
// processExistingDanmakus() [函数5]  // 扫描现有弹幕
//     ↓
// processDanmakuElement() [函数4]  // 处理单个弹幕元素
//     ↓
// extractDanmakuInfo() [函数1]  // 提取弹幕信息
//     ↓
// isValidDanmaku() [函数2]  // 验证弹幕有效性
//     ↓
// printDanmaku() [函数3]  // 打印弹幕信息

// setupMutationObserver() [函数6]  // 设置监听器(由init调用)
//     ↓
// checkNodeForDanmaku() [函数7]  // 检查新节点(由观察者回调调用)
//     ↓
// processDanmakuElement() [函数4]  // 回到处理单个弹幕


// ==UserScript==
// @name         抖音弹幕精确提取器
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  精确提取抖音直播弹幕并在控制台打印
// @match        https://live.douyin.com/*  // 只在这个网址生效
// @grant        none  // 不需要特殊权限
// @run-at       document-end  // 页面加载完成后执行
// ==/UserScript==

(function() {
    'use strict';

    // 全局变量定义
    const processedIds = new Set();  // 用于记录已处理的弹幕ID，避免重复处理
    let observer = null;  // MutationObserver实例，用于监听DOM变化
    let isProcessing = false;  // 防止重复处理的标志

    console.log('🎯 抖音弹幕精确提取器已启动');

    /**
     * 函数1: 从弹幕DOM元素中提取信息
     * @param {Element} danmakuElement - 弹幕DOM元素
     * @returns {Object|null} 弹幕信息对象或null(提取失败时)
     */
    function extractDanmakuInfo(danmakuElement) {
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
                    dataId = username + content + Date.now();  // 组合生成唯一ID
                } else {
                    dataId = 'unknown_' + Date.now() + Math.random();
                }
            }

            // 提取用户名
            const usernameElement = danmakuElement.querySelector('.v8LY0gZF');
            let username = '未知用户';
            if (usernameElement) {
                username = usernameElement.textContent.trim();
                username = username.replace('：', '').trim();  // 清理用户名中的冒号
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
                timestamp: new Date().toLocaleTimeString(),
                element: danmakuElement
            };
        } catch (error) {
            console.error('提取弹幕信息时出错:', error);
            return null;
        }
    }

    /**
     * 函数2: 验证弹幕是否有效
     * @param {Object} danmakuInfo - 弹幕信息对象
     * @returns {boolean} 是否有效
     */
    function isValidDanmaku(danmakuInfo) {
        if (!danmakuInfo) return false;

        // 检查是否已处理过(去重)
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

    /**
     * 函数3: 在控制台美化打印弹幕信息
     * @param {Object} danmakuInfo - 弹幕信息对象
     */
    function printDanmaku(danmakuInfo) {
        const time = new Date().toLocaleTimeString();

        // 使用CSS样式美化控制台输出
        console.log(
            `%c🎯 抖音弹幕 [${time}]`,
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

    /**
     * 函数4: 处理单个弹幕元素
     * @param {Element} element - DOM元素
     * @returns {boolean} 是否成功处理
     */
    function processDanmakuElement(element) {
        if (isProcessing) return false;  // 防止重复处理

        const danmakuInfo = extractDanmakuInfo(element);  // 调用函数1
        if (danmakuInfo && isValidDanmaku(danmakuInfo)) {  // 调用函数2
            isProcessing = true;
            printDanmaku(danmakuInfo);  // 调用函数3
            processedIds.add(danmakuInfo.id);  // 记录已处理ID
            isProcessing = false;
            return true;
        }
        return false;
    }

    /**
     * 函数5: 查找并处理页面中现有的所有弹幕
     * @returns {boolean} 是否找到弹幕容器
     */
    function processExistingDanmakus() {
        console.log('🔍 开始扫描现有弹幕...');

        // 多个可能的选择器，按优先级尝试
        const selectors = [
            '.webcast-chatroom___item',
            '[class*="chatroom___item"]',
            '.NkS2Invn'
        ];

        let danmakuElements = [];
        let foundSelector = '';

        // 尝试不同的选择器找到弹幕元素
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

        // 处理找到的所有弹幕元素
        let newCount = 0;
        danmakuElements.forEach(element => {
            if (processDanmakuElement(element)) {  // 调用函数4
                newCount++;
            }
        });

        if (newCount > 0) {
            console.log(`📊 发现 ${newCount} 条新弹幕`);
        }

        return true;
    }

    /**
     * 函数6: 设置MutationObserver监听新增加的弹幕
     */
    function setupMutationObserver() {
        // 创建观察者实例，监听DOM变化
        observer = new MutationObserver((mutations) => {
            if (isProcessing) return;  // 防抖

            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) {  // 只处理元素节点
                            checkNodeForDanmaku(node);  // 调用函数7
                        }
                    });
                }
            });
        });

        // 寻找弹幕容器作为监听目标
        const chatContainer = document.querySelector('.webcast-chatroom___items-container') ||
                             document.querySelector('.webcast-chatroom___list') ||
                             document.body;  // 备选用整个body

        // 开始监听
        observer.observe(chatContainer, {
            childList: true,    // 监听子节点变化
            subtree: true,      // 监听所有后代节点
            attributes: false,  // 不监听属性变化
            characterData: false // 不监听文本内容变化
        });

        console.log('🔍 MutationObserver监听器已启动');
    }

    /**
     * 函数7: 检查新添加的节点是否包含弹幕
     * @param {Node} node - 新添加的DOM节点
     */
    function checkNodeForDanmaku(node) {
        // 如果节点本身就是弹幕项目
        if (node.classList && node.classList.contains('webcast-chatroom___item')) {
            processDanmakuElement(node);  // 调用函数4
            return;
        }

        // 如果节点包含弹幕项目
        if (node.querySelector && node.querySelector('.webcast-chatroom___item')) {
            const danmakuElements = node.querySelectorAll('.webcast-chatroom___item');
            danmakuElements.forEach(element => {
                processDanmakuElement(element);  // 调用函数4
            });
            return;
        }

        // 检查节点是否在弹幕容器内
        const closestDanmaku = node.closest('.webcast-chatroom___item');
        if (closestDanmaku) {
            processDanmakuElement(closestDanmaku);  // 调用函数4
        }
    }

    /**
     * 函数8: 主初始化函数
     */
    function init() {
        console.log('🚀 初始化抖音弹幕精确提取器...');

        // 延迟执行，确保页面加载完成
        setTimeout(() => {
            const found = processExistingDanmakus();  // 调用函数5

            if (found) {
                console.log('✅ 弹幕容器找到，开始实时监听...');
                setupMutationObserver();  // 调用函数6
            } else {
                console.log('⏳ 未找到弹幕容器，5秒后重试...');
                setTimeout(init, 5000);  // 递归调用自身重试
            }
        }, 3000);
    }

    // 页面加载完成后启动脚本
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);  // 调用函数8
    } else {
        init();  // 直接调用函数8
    }

    // 清理工作：页面卸载时停止监听
    window.addEventListener('beforeunload', () => {
        if (observer) {
            observer.disconnect();  // 停止观察者
        }
        console.log('👋 脚本已卸载');
    });

})();
