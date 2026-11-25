from airtest.core.api import *
from poco.drivers.android.uiautomation import AndroidUiautomationPoco
from loguru import logger
import json
import os

poco = AndroidUiautomationPoco(
    use_airtest_input=True, screenshot_each_action=False)
window_width, window_height = poco.get_screen_size()

PACKAGE_NAME = 'com.goldze.mvvmhabit'
TOTAL_NUMBER = 100
init_device("Android")
stop_app(PACKAGE_NAME)
start_app(PACKAGE_NAME)

scraped_titles = []

OUTPUT_FOLDER = 'movie'
os.path.exists(OUTPUT_FOLDER) or os.makedirs(OUTPUT_FOLDER)


def save_data(element_data):
    with open(f'{OUTPUT_FOLDER}/{element_data.get("title")}.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(element_data, ensure_ascii=False, indent=2))
        logger.debug(f'saved as file {element_data.get("title")}.json')


def scrape_index():
    elements = poco(f'{PACKAGE_NAME}:id/item')
    elements.wait_for_appearance()
    return elements


def scrape_detail(element):
    element.click()
    panel = poco(f'{PACKAGE_NAME}:id/content')
    panel.wait_for_appearance(5)
    title = poco(f'{PACKAGE_NAME}:id/title').attr('text')
    categories = poco(f'{PACKAGE_NAME}:id/categories_value').attr('text')
    score = poco(f'{PACKAGE_NAME}:id/score_value').attr('text')
    published_at = poco(f'{PACKAGE_NAME}:id/published_at_value').attr('text')
    drama = poco(f'{PACKAGE_NAME}:id/drama_value').attr('text')
    keyevent('BACK')
    return {
        'title': title,
        'categories': categories,
        'score': score,
        'published_at': published_at,
        'drama': drama
    }


def scroll_up():
    swipe((window_width * 0.5, window_height * 0.8),
          vector=[0, -0.5], duration=1)


def main():
    while len(scraped_titles) < TOTAL_NUMBER:
        elements = scrape_index()
        for element in elements:
            element_title = element.offspring(f'{PACKAGE_NAME}:id/tv_title')
            if not element_title.exists():
                continue
            title = element_title.attr('text')
            logger.debug(f'get title {title}')
            if title in scraped_titles:
                continue
            _, element_y = element.get_position()
            if element_y > 0.7:
                scroll_up()
            element_data = scrape_detail(element)
            logger.debug(f'scraped data {element_data}')
            save_data(element_data)
            scraped_titles.append(title)


if __name__ == '__main__':
    main()