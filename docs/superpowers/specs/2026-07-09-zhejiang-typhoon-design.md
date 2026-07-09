# 浙江台风网美化版 · 设计文档

- 日期：2026-07-09
- 范围：复刻 + 全面美化浙江省水利厅「实时台风消息」页面核心功能
- 数据源：直接浏览器 fetch `https://typhoon.slt.zj.gov.cn/Api/...`（接口实测开放 CORS、无鉴权）

---

## 1. 整体架构

```
浙江台风 · 美化版
└── 单页 Vue 3 SPA，纯前端直连 typhoon.slt.zj.gov.cn/Api
└── 路由（hash 模式）：/ /satellite /radar /rain /wind /history /events /about
└── 顶层布局
    ├ 顶栏（玻璃风）：Logo + 当前台风标签徽章 + UTC/本地时区双时钟 + 自动刷新倒计时 + 主题切换
    ├ 左侧抽屉（可折叠）：模块导航 + 列表内容（实时台风列表/历史检索结果/事件时间线）
    ├ 主区：Leaflet 地图（占满可视区，被抽屉/详情面板覆盖时地图自动 resize）
    └ 右侧抽屉（可折叠）：选中台风/选中模块的详情卡片
└── 全局状态：Pinia
    ├ typhoonStore：当前活动台风数组、选中 tfid、详情缓存、轮询定时器
    ├ layerStore：底图类型、可见图层、卫星/雷达/降雨/风场覆盖层显隐
    └ historyStore：当前查询年份、台风列表、当前选中历史台风
```

关键决策：
- 地图抽成 `<MapCanvas>` 组件，外部只通过 props/state 喂数据（避免 Leaflet 直接耦合到 Vue 单文件里）
- 所有 API 调用集中到 `src/api/typhoon.ts`，fetch + AbortController + 简单内存缓存（5 min TTL）
- 强度等级 → 颜色映射放 `src/lib/typhoon-style.ts`（一处定义、地图标记/徽章/图例统一用）

---

## 2. 七个核心模块

公共数据层 `src/api/typhoon.ts`：

| 方法 | 接口 | 用途 |
|---|---|---|
| `getActiveTyphoons()` | `/Api/TyhoonActivity` | 当前活跃台风（轮询 30 s） |
| `getTyphoonInfo(tfid)` | `/Api/TyphoonInfo/{tfid}` | 单个台风完整详情 |
| `getTyphoonEvents(tfid)` | `/Api/TyphoonEvent/{tfid}/False` | 事件时间线 |
| `searchTyphoon(kw)` | `/Api/TyphoonSearch/{kw}` | 模糊搜索 |
| `getYearTyphoons(year)` | `/Api/TyphoonList/{year}` | 某年所有台风 |
| `getLastRadar()` | `/Api/LastRadar` | 雷达图（多帧 base64 PNG） |
| `getLeastCloud(type)` | `/Api/LeastCloud/?type=24` | 卫星云图（1h/3h/6h） |
| `getLeastRain(hours)` | `/Api/LeastRain/24\|48\|72` | 累计降雨等值面 |
| `getLastWind(yyyymmddhh?)` | `/Api/LastWind[/{ts}]` | 风场 GRIB2 U/V 分量 |

请求拦截器：超时 30s、失败重试 1 次、统一错误 toast。响应统一做 `JSON.parse` 校验 + 字段缺失兜底。

### 模块矩阵

| # | 模块 | 路由 | 关键交互 | 数据 |
|---|---|---|---|---|
| 1 | 实时台风消息 | `/` | 左侧列表点击 → 主图飞向台风 + 右侧详情；切换显示：路径/预报/风圈；播放时间轴（沿路径滑动） | `TyhoonActivity` + `TyphoonInfo` |
| 2 | 卫星云图 | `/satellite` | 切换 1h/3h/6h + 透明度滑块；可选叠加台风路径 | `LeastCloud` |
| 3 | 雷达图 | `/radar` | 帧轮播（雷达是连续多帧 PNG）；播放/暂停/速率 | `LastRadar`（多个 `radarN_N` 字段） |
| 4 | 累计降雨 | `/rain` | 切换 24/48/72h + 图例；多边形悬停高亮 | `LeastRain` |
| 5 | 风场 | `/wind` | leaflet-velocity 渲染 U/V；时间切换 | `LastWind` |
| 6 | 历史台风 | `/history` | 年份下拉 + 检索；选中后展示路径 + 详情 | `TyphoonList` + `TyphoonInfo` |
| 7 | 事件时间线 | `/events` | 选中某台风 → 纵向时间线卡片（生成/升级/登陆） | `TyphoonEvent` |

风场复用 `leaflet-velocity`；降雨多边形直接用 Leaflet `polygon`；卫星云图 / 雷达直接 `L.imageOverlay` 或地图容器 `<img>` 覆盖。三块均复用 `<MapCanvas>`。

---

## 3. UI 组件库与样式系统

### Tailwind 主题（深色玻璃风）
```
背景层：bg-slate-950 → bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
玻璃面板：bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
主色：cyan-400（台风图标、选中态、CTA）
强度色（中国标准映射）：
  热带低压   → #6B7280 (灰)
  热带风暴   → #FBBF24 (黄)
  强热带风暴 → #FB923C (橙)
  台风       → #F87171 (红)
  强台风     → #DC2626 (深红)
  超强台风   → #A21CAF (紫)
字体：Inter 中文回退 PingFang SC / 微软雅黑
```

### 通用组件（`src/components/`）
- `GlassPanel` — 玻璃容器（4 个 size 预设）
- `IntensityBadge` — 等级徽章（带图标 + 颜色）
- `LiveClock` — UTC/本地双时钟
- `RefreshCountdown` — 倒计时圆环（30 s 周期）
- `MapCanvas` — Leaflet 包装（暴露 addLayer/removeLayer/flyTo）
- `Sidebar` / `RightPanel` — 折叠抽屉
- `Toast` / `EmptyState` / `Skeleton`

### 图层/标记组件
- `TyphoonMarker` — 中心标记（图标按强度色变化，hover 弹 popover）
- `WindCircle` — 风圈（按 NE/NW/SW|SE 拆 4 段，可用 L.circle 或 SVG overlay 画椭圆）
- `ForecastLine` — 单条预报路径（含时间锚点 + 标签）
- `PastPath` — 实际路径（与预报用不同线型区分）
- `TimelineSlider` — 沿路径滑块（驱动 map 高亮 + 详情卡片）

---

## 4. 项目结构与依赖

```
zhejiang-typhoon/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.ts
    ├── App.vue
    ├── style.css                  (tailwind 三指令 + 全局)
    ├── router.ts
    ├── api/
    │   └── typhoon.ts             (所有 fetch 封装)
    ├── stores/
    │   ├── typhoon.ts
    │   ├── layer.ts
    │   └── history.ts
    ├── lib/
    │   ├── typhoon-style.ts       (强度→颜色、风圈 NE|NW|SW|SE 拆分)
    │   ├── time.ts                (时区/格式化)
    │   └── fetch-with-retry.ts
    ├── components/
    │   ├── layout/ (TopBar, Sidebar, RightPanel)
    │   ├── ui/    (GlassPanel, IntensityBadge, LiveClock, …)
    │   └── map/   (MapCanvas, TyphoonMarker, WindCircle, ForecastLine, PastPath, TimelineSlider)
    ├── views/
    │   ├── HomeView.vue           (实时台风)
    │   ├── SatelliteView.vue
    │   ├── RadarView.vue
    │   ├── RainView.vue
    │   ├── WindView.vue
    │   ├── HistoryView.vue
    │   ├── EventsView.vue
    │   └── AboutView.vue
    └── types/
        └── typhoon.ts             (TypeScript 接口)
```

### 依赖
```
dependencies:
  vue ^3.4
  vue-router ^4
  pinia ^2
  leaflet ^1.9
  leaflet-velocity ^1.7
  dayjs ^1.11
devDependencies:
  vite ^5
  @vitejs/plugin-vue
  typescript ^5
  vue-tsc
  tailwindcss ^3.4
  autoprefixer
  postcss
  @types/leaflet
```

---

## 5. 错误处理 / 加载态 / 测试

### 自动刷新（核心调整）
- 顶栏 `RefreshCountdown`：**30 秒** 周期
- 倒计时归零 → 触发 `typhoonStore.refresh()`（重新拉 `TyhoonActivity`，选中台风详情有缓存就跳过，无缓存就重新拉）
- 浏览器 tab 隐藏时暂停倒计时（`document.visibilitychange`），回到前台再继续
- 手动刷新按钮：顶栏右上角，点击立即触发并把倒计时归零

### 错误处理
- **网络错误**：统一 toast "网络异常，正在重试…"，重试 1 次仍失败 → toast 红色，文案保留 5 s
- **数据缺失**：每个列表/卡片用 `<EmptyState>` 兜底（如"暂无活跃台风"），不用空白
- **图片加载失败**（雷达/云图）：右上角小角标 + 重试按钮
- **API 字段缺失**：在 `lib/typhoon-style.ts` 中默认全部走 unknown / fallback 颜色

### 加载态
- 列表/详情卡片：骨架屏（`<Skeleton>`）
- 地图：tile 层有原生的 loading；面板先放骨架

### 测试
- `vitest` 单测（`src/api/typhoon.ts` 解析、`lib/typhoon-style.ts` 拆分、风圈 NE|NW|SW|SE 解析）
- `playwright` e2e 1 条：打开首页 → 看到当前活动台风 → 点列表项 → 主图 fly 到对应坐标、右侧详情显示
- 命令：`npm run test` / `npm run test:e2e`

### 验证清单（设计层面就钉死）
1. `npm run dev` 启动后浏览器打开无控制台 error/warn
2. 首页加载 ≤ 3 s 内出现台风列表和路径
3. 七大模块路由切换无白屏
4. 至少一家预报机构路径可在地图上看到
5. 风圈在地图上视觉上分四象限
6. 30 s 倒计时归零后自动刷新活动台风列表

---

## 6. 后续可扩展 / 不做（YAGNI）

### 不做（避免范围蔓延）
- 用户登录 / 个人设置
- 后端 / 反代 / 数据库
- PWA / 离线
- 移动端深度适配（保证可用，不专门投入）
- 多语言（先只做简体中文）
- 推送通知
- 实时 WebSocket 推送（30 s 轮询足够）

### 未来可加（不在本次范围）
- 历史台风年表对比（同时多台风同屏）
- 路径统计图表（强度时间序列图）
- 导出为 PNG / 分享 URL
- 内置阅读台风科普

---

## 7. 关键 API 速查（实测）

baseURL：`https://typhoon.slt.zj.gov.cn/Api`

```
GET /TyhoonActivity                → 当前活动台风（注意 Tyhoon 拼写）
GET /TyphoonList/{year}            → 某年台风列表
GET /TyphoonInfo/{tfid}            → 单个台风详情（路径点/风圈/多机构预报/登陆点）
GET /TyphoonEvent/{tfid}/False     → 事件时间线
GET /TyphoonSearch/{kw}            → 搜索（tfid 或中文名）
GET /LastRadar                     → 雷达图多帧 base64 PNG
GET /LastWind                      → 风场 GRIB2 U/V
GET /LastWind/{yyyymmddhh}         → 指定时次风场
GET /LeastRain/{24|48|72}          → 累计降雨等值面多边形
GET /LeastCloud/?type={24|48|72}   → 卫星云图（1h/3h/6h）
```

全部同源 GET，CORS 友好，纯前端可直连。详见 `API.md`。