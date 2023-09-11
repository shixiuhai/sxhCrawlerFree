/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : goods

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 26/03/2023 19:16:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for 1688_kj_commodity
-- ----------------------------
DROP TABLE IF EXISTS `1688_kj_commodity`;
CREATE TABLE `1688_kj_commodity`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `index_id` bigint(0) NULL DEFAULT NULL,
  `cate_level` int(0) NULL DEFAULT NULL COMMENT '1 一级标题，2 二级标题，3 三级标题，4 四级标题，5 五级标题',
  `cate_id` bigint(0) NULL DEFAULT NULL COMMENT '标题类id',
  `cate_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '标题名称',
  `gmt_create` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '上架时间',
  `gmt_create_detail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '上架时间的精确时间',
  `offer_picurl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品图片地址',
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品价格',
  `good_subject` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品描述',
  `offer_id` bigint(0) NULL DEFAULT NULL COMMENT '商品id',
  `offer_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商品详情页url',
  `created_time` datetime(0) NULL DEFAULT NULL COMMENT '数据创建时间',
  `total_page` bigint(0) NULL DEFAULT NULL COMMENT '每页20条，总共页数',
  `task_id` bigint(0) NULL DEFAULT NULL COMMENT '本次爬取任务id',
  `rank` int(0) NULL DEFAULT NULL COMMENT '1 热销榜，2飙升榜',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 318598 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 1688_kj_commodity_detail
-- ----------------------------
DROP TABLE IF EXISTS `1688_kj_commodity_detail`;
CREATE TABLE `1688_kj_commodity_detail`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `commodity_id` bigint(0) NULL DEFAULT NULL COMMENT '商品表id',
  `business_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商家名称',
  `business_year` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '商家经营年数',
  `user_evaluate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '买家评价数',
  `turnover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '90天成交量',
  `created_time` datetime(0) NULL DEFAULT NULL COMMENT '数据创建时间',
  `task_id` bigint(0) NULL DEFAULT NULL COMMENT '本次任务id',
  `rank` int(0) NULL DEFAULT NULL COMMENT '1 热销榜，2飙升榜',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 1688_kj_commodity_index
-- ----------------------------
DROP TABLE IF EXISTS `1688_kj_commodity_index`;
CREATE TABLE `1688_kj_commodity_index`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(0) NULL DEFAULT NULL,
  `cate_id` bigint(0) NULL DEFAULT NULL,
  `cate_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `cate_level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '当前标题级别',
  `created_time` datetime(0) NULL DEFAULT NULL,
  `task_id` bigint(0) NULL DEFAULT NULL COMMENT '当前任务id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23033 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 1688_kj_commodity_task
-- ----------------------------
DROP TABLE IF EXISTS `1688_kj_commodity_task`;
CREATE TABLE `1688_kj_commodity_task`  (
  `id` bigint(0) NOT NULL AUTO_INCREMENT,
  `created_time` datetime(0) NOT NULL COMMENT '创建任务时间',
  `type` int(0) NULL DEFAULT NULL COMMENT '任务类型，1 手动，2自动',
  `task_describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '任务描述,手动爬取需要注明该任务干啥的',
  `waste_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '该任务花费时间，以分钟为单位',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 1688_kj_commodity_trend
-- ----------------------------
DROP TABLE IF EXISTS `1688_kj_commodity_trend`;
CREATE TABLE `1688_kj_commodity_trend`  (
  `id` int(0) NOT NULL,
  `commodity_id` bigint(0) NULL DEFAULT NULL COMMENT '商品表id',
  `xxx1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `xxx2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `created_time` datetime(0) NULL DEFAULT NULL COMMENT '数据创建时间',
  `task_id` bigint(0) NULL DEFAULT NULL COMMENT '本次任务id',
  `rank` int(0) NULL DEFAULT NULL COMMENT '1 热销榜，2飙升榜',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
