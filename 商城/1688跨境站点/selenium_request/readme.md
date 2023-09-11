## 1688跨境站点数据爬取

### 功能说明

* 获取所有的标题信息
* 获取最后一级标题所有商品信息
* 管理商品信息和所有标题信息的关系
* 通过商品信息表获取详情信息

### 系统说明

* 采用了requests实现请求模拟
* 采用了mysql存储数据
* 爬取详情页暂时使用了selenium

### 补充说明

* 查询的sql如下

  ```bash
  
  insert into 1688_kj_commodity_task (created_time,type,`describe`) values ('2023-03-18 21:59:02','2','自动爬取')
  
  update 1688_kj_commodity_index set task_id=1 where task_id is NULL
  
  SELECT
    id,
  	cate_name,
  	cate_id,
  	cate_level
  FROM
  	1688_kj_commodity_index 
  WHERE
  	cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) 
  	
  	SELECT
  	
    id,
  	cate_name,
  	cate_id ,
  	count(cate_id)
  FROM
  	1688_kj_commodity_index 
  WHERE
  	cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index )  GROUP BY id
  	
  	
  	
  -- 查询源表数据
  SELECT
  	id,
  	cate_name,
  	cate_id,
  	cate_level,
  	parent_id
  FROM
  	1688_kj_commodity_index 
  
  
  
  -- 查询最后一级是二级的数据
  SELECT
  	id,
  	cate_name,
  	cate_id,
  	cate_level,
  	parent_id
  FROM
  	1688_kj_commodity_index 
  WHERE
  	cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) 
  	AND cate_level =2
  
  	
  -- 查询最后一级是三级的数据
  SELECT
  	id,
  	cate_name,
  	cate_id,
  	cate_level,
  	parent_id
  FROM
  	1688_kj_commodity_index 
  WHERE
  	cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) 
  	AND cate_level =1
  	
  	
  -- 原表和 最后一级是三级的数据连表 查询出二级标题
  SELECT
  	table1.cate_name two_cate_name,
  	table3.cate_name three_cate_name,
  	table1.parent_id  two_parent_id,
  -- 	这个cate_id 是最后一级的cate_id
  	table3.cate_id
  FROM
  	( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  	INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level =3 ) table3 ON table3.parent_id = table1.cate_id
  	
  
  
  -- 查询出最后一级是3级标题的所有内容
  -- 原表和 （原表和最后一级是三级的数据连表） 进行一级标题查询
  -- 查询出最后一级是3级标题的所有内容
  -- 原表和 （原表和最后一级是三级的数据连表） 进行一级标题查询
  SELECT
  	-- 	针对cate_id去重不知道原因为什么
  	 DISTINCT(b.cate_id),
  	b.one_cate_name,
  	b.two_cate_name,
  	b.three_cate_name 
  FROM
  	(
  	SELECT
  		table1.cate_name one_cate_name,
  		table1_3.two_cate_name,
  		table1_3.three_cate_name,-- 最后一级的cate_id
  		table1_3.cate_id 
  	FROM
  		( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  		INNER JOIN (
  		SELECT
  			table1.cate_name two_cate_name,
  			table3.cate_name three_cate_name,
  			table1.parent_id two_parent_id,-- 	这个cate_id 是最后一级的cate_id
  			table3.cate_id 
  		FROM
  			( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  			INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 3 ) table3 ON table3.parent_id = table1.cate_id 
  		) table1_3 ON table1_3.two_parent_id = table1.cate_id 
  	) b 
  
  
  
  -- 查询出最后一级id是二级的内容
  SELECT
  	table1.cate_name one_cate_name,
  	table3.cate_name two_cate_name,
  	'' three_cate_name,-- 	这个cate_id 是最后一级的cate_id
  	table3.cate_id 
  FROM
  	( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  	INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 2 ) table3 ON table3.parent_id = table1.cate_id
  	
  	
  	
  	
  
  
  
  -- 基于最后一级是二级标题和最后一级是三级标题的所有数据合并
  SELECT
  	table1_2_3.* 
  FROM
  	(
  		SELECT-- 	针对cate_id去重不知道原因为什么
  		DISTINCT ( b.cate_id ),
  		b.one_cate_name,
  		b.two_cate_name,
  		b.three_cate_name 
  	FROM
  		(
  		SELECT
  			table1.cate_name one_cate_name,
  			table1_3.two_cate_name,
  			table1_3.three_cate_name,-- 最后一级的cate_id
  			table1_3.cate_id 
  		FROM
  			( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  			INNER JOIN (
  			SELECT
  				table1.cate_name two_cate_name,
  				table3.cate_name three_cate_name,
  				table1.parent_id two_parent_id,-- 	这个cate_id 是最后一级的cate_id
  				table3.cate_id 
  			FROM
  				( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  				INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 3 ) table3 ON table3.parent_id = table1.cate_id 
  			) table1_3 ON table1_3.two_parent_id = table1.cate_id 
  		) b 
  	) table1_2_3 UNION
  SELECT
  	table1_2.* 
  FROM
  	(
  		SELECT-- 	这个cate_id 是最后一级的cate_id
  		table3.cate_id,
  		table1.cate_name one_cate_name,
  		table3.cate_name two_cate_name,
  		'' three_cate_name 
  	FROM
  		( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  		INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 2 ) table3 ON table3.parent_id = table1.cate_id 
  	) table1_2
  	
  	
  	
  -- 重要	
  -- 查询出所有商品信息表
  select table_last.* from (SELECT
    tabl1_2_3.one_cate_name,
  	tabl1_2_3.two_cate_name,
  	tabl1_2_3.three_cate_name,
  	table1.*
  FROM
  	1688_kj_commodity table1
  	LEFT JOIN (
  	SELECT
  		table1_2_3.* 
  	FROM
  		(
  			SELECT-- 	针对cate_id去重不知道原因为什么
  			DISTINCT ( b.cate_id ),
  			b.one_cate_name,
  			b.two_cate_name,
  			b.three_cate_name 
  		FROM
  			(
  			SELECT
  				table1.cate_name one_cate_name,
  				table1_3.two_cate_name,
  				table1_3.three_cate_name,-- 最后一级的cate_id
  				table1_3.cate_id 
  			FROM
  				( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  				INNER JOIN (
  				SELECT
  					table1.cate_name two_cate_name,
  					table3.cate_name three_cate_name,
  					table1.parent_id two_parent_id,-- 	这个cate_id 是最后一级的cate_id
  					table3.cate_id 
  				FROM
  					( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  					INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 3 ) table3 ON table3.parent_id = table1.cate_id 
  				) table1_3 ON table1_3.two_parent_id = table1.cate_id 
  			) b 
  		) table1_2_3 UNION
  	SELECT
  		table1_2.* 
  	FROM
  		(
  			SELECT-- 	这个cate_id 是最后一级的cate_id
  			table3.cate_id,
  			table1.cate_name one_cate_name,
  			table3.cate_name two_cate_name,
  			'' three_cate_name 
  		FROM
  			( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  			INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 2 ) table3 ON table3.parent_id = table1.cate_id 
  		) table1_2 
  	) tabl1_2_3
  
  ON table1.cate_id=tabl1_2_3.cate_id)  table_last where table_last.task_id=17
  
  
  SELECT
  	commod.id,
  	commod.offer_url 
  FROM
  	1688_kj_commodity commod 
  WHERE
  	id NOT IN ( SELECT commodity_id FROM 1688_kj_commodity_detail ) 
  	AND task_id = 17
  -- 	删除总数量小于5页的商品信息
  DELETE from 1688_kj_commodity   WHERE total_page<=5;
  
  --  删除食品酒水和餐饮生鲜这两大类
  delete from 1688_kj_commodity where cate_id in (
  
  select table_commodity.cate_id from (select table_last.* from (SELECT
    tabl1_2_3.one_cate_name,
  	tabl1_2_3.two_cate_name,
  	tabl1_2_3.three_cate_name,
  	table1.*
  FROM
  	1688_kj_commodity table1
  	LEFT JOIN (
  	SELECT
  		table1_2_3.* 
  	FROM
  		(
  			SELECT-- 	针对cate_id去重不知道原因为什么
  			DISTINCT ( b.cate_id ),
  			b.one_cate_name,
  			b.two_cate_name,
  			b.three_cate_name 
  		FROM
  			(
  			SELECT
  				table1.cate_name one_cate_name,
  				table1_3.two_cate_name,
  				table1_3.three_cate_name,-- 最后一级的cate_id
  				table1_3.cate_id 
  			FROM
  				( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  				INNER JOIN (
  				SELECT
  					table1.cate_name two_cate_name,
  					table3.cate_name three_cate_name,
  					table1.parent_id two_parent_id,-- 	这个cate_id 是最后一级的cate_id
  					table3.cate_id 
  				FROM
  					( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  					INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 3 ) table3 ON table3.parent_id = table1.cate_id 
  				) table1_3 ON table1_3.two_parent_id = table1.cate_id 
  			) b 
  		) table1_2_3 UNION
  	SELECT
  		table1_2.* 
  	FROM
  		(
  			SELECT-- 	这个cate_id 是最后一级的cate_id
  			table3.cate_id,
  			table1.cate_name one_cate_name,
  			table3.cate_name two_cate_name,
  			'' three_cate_name 
  		FROM
  			( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index ) table1
  			INNER JOIN ( SELECT id, cate_name, cate_id, cate_level, parent_id FROM 1688_kj_commodity_index WHERE cate_id NOT IN ( SELECT parent_id FROM 1688_kj_commodity_index ) AND cate_level = 2 ) table3 ON table3.parent_id = table1.cate_id 
  		) table1_2 
  	) tabl1_2_3
  
  ON table1.cate_id=tabl1_2_3.cate_id)  table_last where table_last.one_cate_name="食品酒水" or table_last.one_cate_name="餐饮生鲜")  table_commodity
  
  ) 
  
  ```

  

* 详情页jsv获取信息逆向待定

