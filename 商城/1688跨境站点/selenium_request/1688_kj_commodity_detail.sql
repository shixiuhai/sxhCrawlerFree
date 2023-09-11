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

 Date: 26/03/2023 19:18:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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

SET FOREIGN_KEY_CHECKS = 1;
