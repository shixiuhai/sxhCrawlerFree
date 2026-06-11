import requests
import hashlib
import time
from flask import Flask,jsonify
import json
from threading import Thread
from selenium_log import get_logging
log=get_logging()

app = Flask(__name__)

class Server:
    def __init__(self) -> None:
        pass
    
    @staticmethod
    @app.route('/')
    def index():
        return '<h2>亦知基于python构建的cookies池</h2>'

    @staticmethod
    @app.route("/<website>/cookies")
    def get_cookies(website):
        return ""
    
    @staticmethod
    def run():
        # Thread(target=Server.remove_cookies_from_sleep,args=()).start() 
        app.run()
        
if __name__ == '__main__':
    pass