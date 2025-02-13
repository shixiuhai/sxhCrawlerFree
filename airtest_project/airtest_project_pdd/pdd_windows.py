# -*- encoding=utf8 -*-
__author__ = "15256"

from airtest.core.api import *
from airtest.cli.parser import cli_setup

if not cli_setup():
    auto_setup(__file__, logdir=True, devices=["Windows:///132962",])


# script content
print("start...")



# generate html report
# from airtest.report.report import simple_report
# simple_report(__file__, logpath=True)