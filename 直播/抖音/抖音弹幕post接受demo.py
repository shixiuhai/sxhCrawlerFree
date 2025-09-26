from flask import Flask, request, jsonify
from datetime import datetime
import json
import logging
import threading
from typing import Dict, Any

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('danmu_receiver.log', encoding='utf-8'),
        logging.StreamHandler()
    ]
)

app = Flask(__name__)

class DanmuReceiver:
    def __init__(self):
        self.received_count = 0
        self.last_danmu_time = None
        
    def process_danmu(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """处理弹幕数据"""
        try:
            # 基础验证
            if not data.get('content') or not data.get('username'):
                return {'success': False, 'error': '缺少必要字段'}
            
            # 如果是测试消息
            if data.get('test'):
                logging.info("✅ 收到测试连接请求")
                return {'success': True, 'message': '连接测试成功'}
            
            # 处理真实弹幕
            self.received_count += 1
            self.last_danmu_time = datetime.now()
            # 构造响应数据
            result = {
                'success': True,
                'data': {
                    'id': data.get('id', 'unknown'),
                    'username': data['username'],
                    'content': data['content'],
                    'level': data.get('level', 'unknown'),
                    'timestamp': data.get('timestamp', datetime.now().isoformat()),
                    'platform': data.get('platform', 'douyin'),
                    'sequence': self.received_count,
                    "streamerId": data.get("streamerId", "unknown"),
                }
            }
            
            # 打印弹幕信息
            log_msg = f"🎯 弹幕 #{self.received_count} | 👤 {data['username']} | 💬 {data['content']} | {data['streamerId']}"
            if data.get('level'):
                log_msg += f" | ⭐ {data['level']}"
            
            logging.info(log_msg)
            
            return result
            
        except Exception as e:
            logging.error(f"处理弹幕时出错: {str(e)}")
            return {'success': False, 'error': str(e)}

# 创建接收器实例
receiver = DanmuReceiver()

@app.route('/danmu', methods=['POST', 'GET'])
def receive_danmu():
    """接收弹幕的接口"""
    try:
        # 记录请求信息
        client_ip = request.remote_addr
        logging.info(f"📡 收到请求来自 {client_ip}, 方法: {request.method}")
        
        if request.method == 'GET':
            return jsonify({
                'status': '服务运行中',
                'received_count': receiver.received_count,
                'last_danmu_time': receiver.last_danmu_time,
                'endpoints': {
                    'POST /danmu': '接收弹幕数据',
                    'GET /danmu': '获取服务状态',
                    'GET /stats': '获取统计信息'
                }
            })
        
        # 处理POST请求
        if not request.is_json:
            return jsonify({'success': False, 'error': '请求必须是JSON格式'}), 400
        
        data = request.get_json()
        
        if not data:
            return jsonify({'success': False, 'error': '无效的JSON数据'}), 400
        
        # 处理弹幕数据
        result = receiver.process_danmu(data)
        
        if result['success']:
            return jsonify(result), 200
        else:
            return jsonify(result), 400
            
    except Exception as e:
        logging.error(f"接口处理异常: {str(e)}")
        return jsonify({'success': False, 'error': '服务器内部错误'}), 500

@app.route('/stats', methods=['GET'])
def get_stats():
    """获取统计信息"""
    stats = {
        'total_received': receiver.received_count,
        'last_danmu_time': receiver.last_danmu_time,
        'service_uptime': str(datetime.now() - start_time),
        'current_time': datetime.now().isoformat()
    }
    return jsonify(stats)

@app.route('/health', methods=['GET'])
def health_check():
    """健康检查接口"""
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

# 启动信息
start_time = datetime.now()

def print_startup_info():
    """打印启动信息"""
    print("=" * 60)
    print("🎯 抖音弹幕接收服务器")
    print("=" * 60)
    print(f"🚀 服务启动时间: {start_time}")
    print(f"📍 本地访问: http://localhost:3000")
    print(f"📍 弹幕接口: http://localhost:3000/danmu")
    print(f"📍 统计信息: http://localhost:3000/stats")
    print(f"📍 健康检查: http://localhost:3000/health")
    print("=" * 60)
    print("📝 等待接收弹幕数据...")
    print("=" * 60)

if __name__ == '__main__':
    print_startup_info()
    app.run(
        host='0.0.0.0', 
        port=3000, 
        debug=True, 
        threaded=True
    )
