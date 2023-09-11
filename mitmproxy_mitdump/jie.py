import os

import sys

from ebooklib import epub

import PyPDF2

from PyPDF2 import PdfFileReader, PdfFileWriter


def decrypt_epub(input_epub, output_pdf, token):

    # 读取epub文件

    book = epub.read_epub(input_epub)

    print('---')
    # 遍历epub中的每个章节

    for item in book.get_items():

        if item.get_type() == epub.ITEM_DOCUMENT:

            # 获取加密的pdf文件路径

            encrypted_pdf = item.get_name() + ".pdf"

            if os.path.exists(encrypted_pdf):

                # 使用PyPDF2解密pdf文件

                with open(encrypted_pdf, "rb") as f:

                    pdf = PdfFileReader(f)

                    pdf_writer = PdfFileWriter()


                    # 将解密后的页面添加到pdf_writer中

                    for i in range(pdf.getNumPages()):

                        page = pdf.getPage(i)

                        page.mergePage(pdf.getPage(i))

                        pdf_writer.addPage(page)


                    # 将解密后的pdf文件写入输出目录

                    with open(output_pdf, "wb") as output_file:

                        pdf_writer.write(output_file)

            else:

                print("加密的pdf文件不存在")

        else:

            print("不是文档类型的章节")


if __name__ == "__main__":

    input_epub = "wKgHhVqZEv2EbbvlAAAAAGJL6RE48287188.epub"  # epub文件路径

    output_pdf = "decrypted.pdf"  # 输出解密后的pdf文件路径

    token = "G1bUq6KhNTgOnM5Ht4me4KsOmmwGURJqfnGr6TRAqbJXlmAh2vH2vt9cpH7ZrofHGVtmzeKan6tit6vcdxAVHeri6weU8NgenV9H2Vi5kYfiZ18fGAHaR00zHJkGGvLMJmQBLEeOKCldQxtH03utGiZzvwkmwX8ygJL05KKSbI4="  # token用于解密pdf文件


    decrypt_epub(input_epub, output_pdf, token)

