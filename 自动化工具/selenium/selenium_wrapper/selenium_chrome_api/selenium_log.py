import logging
import sys
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - [%(levelname)s] - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('selenium_chrome_api.log')
    ]
)

def get_logging():
    return logging