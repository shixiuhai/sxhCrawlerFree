from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
import logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s-%(levelname)s-%(message)s')
INDEX_URL=""
