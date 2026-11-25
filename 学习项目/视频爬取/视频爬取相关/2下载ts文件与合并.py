import requests
import os
from concurrent.futures import ThreadPoolExecutor, wait

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}


def download_one_video(url, i, path):
    '''
    下载单个视频的函数
    :return:
    '''
    print(url, i,'开始下载')
    resp = requests.get(url, headers=headers)
    with open(os.path.join(path, f'{i}.ts'), 'wb') as f:
        f.write(resp.content)
    print(url, i,'完成下载')


def download_all_videos(path):
    '''
    下载所有视频的函数
    :return:
    '''
    if not os.path.exists(path):
        os.mkdir(path)
    # 读取index.m3u8的文件内容
    with open('second_m3u8_url.text') as f:
        data = f.readlines()
    # print(data)
    # 创建线程池
    pool = ThreadPoolExecutor(50)
    tasks = []
    i = 0
    for line in data:
        # 提取ts的url路径
        if line.startswith('#'):
            continue
        # 使用strip取出url结尾的换行符
        ts_url = line.strip()
        # 0.ts 1.ts 2.ts 3.ts ...
        tasks.append(pool.submit(download_one_video, ts_url, i, path))
        i += 1
    # 集体等待我们的线程对象执行完毕
    wait(tasks)


def merge(filePath, filename='output'):
    '''
    进行ts文件合并 解决视频音频不同步的问题 建议使用这种
    :param filePath:
    :return:
    '''
    # 根据当前文件名称的数字进行排序
    file_list = sorted(os.listdir(filePath), key=lambda x: int(x.split('.')[0]))
    length = len(file_list)
    # ./ts/1.ts|./ts/2.ts ...
    Str = '|'.join([f'{filePath}/{i}.ts' for i in range(length)]).strip('|')
    # print(Str)
    cmd = f'ffmpeg -i "concat:{Str}" -c copy -bsf:a aac_adtstoasc -movflags +faststart output1.mp4'
    os.system(cmd)

if __name__ == '__main__':
    path = './ts'  # 存储ts文件的目录
    # download_all_videos(path)
    merge(path)