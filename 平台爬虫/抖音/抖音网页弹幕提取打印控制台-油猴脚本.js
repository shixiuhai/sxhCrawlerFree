// ==UserScript==
// @name         抖音弹幕精确提取器
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  精确提取抖音直播弹幕并在控制台打印
// @match        https://live.douyin.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const processedIds = new Set();
    let observer = null;
    let isProcessing = false; // 防止重复处理标志

    console.log('🎯 抖音弹幕精确提取器已启动');

    // 精确提取弹幕信息
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
                timestamp: new Date().toLocaleTimeString(),
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

    // 美化打印弹幕
    function printDanmaku(danmakuInfo) {
        const time = new Date().toLocaleTimeString();

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

    // 处理单个弹幕元素
    function processDanmakuElement(element) {
        if (isProcessing) return false;

        const danmakuInfo = extractDanmakuInfo(element);
        if (danmakuInfo && isValidDanmaku(danmakuInfo)) {
            isProcessing = true;
            printDanmaku(danmakuInfo);
            processedIds.add(danmakuInfo.id);
            isProcessing = false;
            return true;
        }
        return false;
    }

    // 查找并处理所有现有弹幕
    function processExistingDanmakus() {
        console.log('🔍 开始扫描现有弹幕...');

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
            if (processDanmakuElement(element)) {
                newCount++;
            }
        });

        if (newCount > 0) {
            console.log(`📊 发现 ${newCount} 条新弹幕`);
        }

        return true;
    }

    // 设置MutationObserver监听新弹幕
    function setupMutationObserver() {
        observer = new MutationObserver((mutations) => {
            // 使用防抖避免频繁处理
            if (isProcessing) return;

            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            checkNodeForDanmaku(node);
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

        console.log('🔍 MutationObserver监听器已启动');
    }

    // 检查节点是否包含弹幕（优化版）
    function checkNodeForDanmaku(node) {
        // 如果节点本身就是弹幕项目
        if (node.classList && node.classList.contains('webcast-chatroom___item')) {
            processDanmakuElement(node);
            return;
        }

        // 如果节点包含弹幕项目
        if (node.querySelector && node.querySelector('.webcast-chatroom___item')) {
            const danmakuElements = node.querySelectorAll('.webcast-chatroom___item');
            danmakuElements.forEach(element => {
                processDanmakuElement(element);
            });
            return;
        }

        // 检查节点是否在弹幕容器内
        const closestDanmaku = node.closest('.webcast-chatroom___item');
        if (closestDanmaku) {
            processDanmakuElement(closestDanmaku);
        }
    }

    // 初始化
    function init() {
        console.log('🚀 初始化抖音弹幕精确提取器...');

        // 延迟执行，确保页面加载完成
        setTimeout(() => {
            const found = processExistingDanmakus();

            if (found) {
                console.log('✅ 弹幕容器找到，开始实时监听...');
                setupMutationObserver();
            } else {
                console.log('⏳ 未找到弹幕容器，5秒后重试...');
                setTimeout(init, 5000);
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
