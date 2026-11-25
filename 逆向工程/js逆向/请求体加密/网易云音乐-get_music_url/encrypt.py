"""
网易云音乐 API 加密模块
实现了两层 AES-CBC + RSA 加密算法

加密流程:
  明文 JSON
    ↓ AES-128-CBC (key: "0CoJUm6Qyw8W8jud", iv: "0102030405060708")
  第一层密文
    ↓ AES-128-CBC (key: 随机16位字符串 i, iv: "0102030405060708")
  第二层密文 → params
    ↓ RSA (公钥加密随机字符串 i)
  encSecKey
"""

import random
import string
import base64
import json
from Crypto.Cipher import AES

# ==================== 加密常量 ====================
PUB_KEY = "010001"
SECOND_KEY = "0CoJUm6Qyw8W8jud"
MODULUS = (
    "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b7251"
    "52b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ec"
    "bda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d8"
    "13cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
)
IV = b"0102030405060708"


def random_string(length=16):
    """生成指定长度的随机字母数字字符串"""
    return ''.join(random.choices(
        string.ascii_letters + string.digits, k=length
    ))


def aes_encrypt(text, key):
    """
    AES-128-CBC 加密

    参数:
        text: 待加密的文本 (UTF-8)
        key:  16字节密钥

    返回:
        Base64 编码的密文

    注意:
        使用 PKCS7 填充
        IV 固定为 "0102030405060708"
    """
    pad_len = 16 - len(text) % 16
    text += chr(pad_len) * pad_len

    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, IV)
    encrypted = cipher.encrypt(text.encode('utf-8'))
    return base64.b64encode(encrypted).decode('utf-8')


def rsa_encrypt(text):
    """
    网易云自定义 RSA 公钥加密

    注意: 这不是标准的 RSA-PKCS1 加密
    网易云对标准 RSA 做了简化:
      1. 将字符串反转
      2. 转为十六进制整数
      3. 计算 (整数^pub_key) mod modulus
      4. 补齐到256位

    参数:
        text: 待加密的16位随机字符串

    返回:
        256字符的十六进制字符串
    """
    text = text[::-1]
    hex_text = text.encode('utf-8').hex()
    result = pow(int(hex_text, 16), int(PUB_KEY, 16), int(MODULUS, 16))
    return format(result, 'x').zfill(256)


def encrypt(data):
    """
    加密请求数据

    参数:
        data: dict 类型的请求参数（明文）

    返回:
        dict: {"params": "第二层AES密文", "encSecKey": "RSA加密后的随机密钥"}
    """
    # 将 dict 转成紧凑 JSON 字符串
    text = json.dumps(data, separators=(',', ':'))

    # 生成随机16位字符串 i
    i = random_string(16)

    # 第一层: 用固定密钥加密
    enc1 = aes_encrypt(text, SECOND_KEY)

    # 第二层: 用随机密钥加密第一层结果
    params = aes_encrypt(enc1, i)

    # RSA 加密随机字符串 i
    enc_sec_key = rsa_encrypt(i)

    return {
        "params": params,
        "encSecKey": enc_sec_key,
    }


# 模块内直接可测
if __name__ == "__main__":
    import json

    # 测试加密
    test_data = {"ids": "[3385918396]", "br": 320000}
    result = encrypt(test_data)
    print("加密测试:")
    print(f"  params:     {result['params'][:50]}...")
    print(f"  encSecKey:  {result['encSecKey'][:50]}...")
    print(f"  params len: {len(result['params'])}")
    print(f"  encSecKey len: {len(result['encSecKey'])}")
