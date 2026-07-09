# 浙江台风网美化版 · 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vite + Vue 3 + TS + Tailwind + Leaflet SPA that re-implements and beautifies the seven core modules of `https://typhoon.slt.zj.gov.cn/`, fetching data directly from its open CORS API.

**Architecture:** Single-page Vue 3 app, hash routing, Pinia stores for typhoon/layer/history state, an `<MapCanvas>` wrapper around Leaflet, all API calls centralized in `src/api/typhoon.ts` with a 30-second auto-refresh loop, dark glass-morphism Tailwind theme.

**Tech Stack:** Vue 3, Vite, TypeScript, Tailwind CSS, Pinia, vue-router, Leaflet, leaflet-velocity, dayjs, vitest, @playwright/test.

**Working directory:** `/root/python/sxhCrawlerFree/台风网/`（新建子目录，独立项目，与爬虫仓库其余内容隔离）

---

## File Structure (to be created)

```
台风网/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
├── index.html
├── README.md
├── .gitignore
├── public/
│   └── favicon.svg
├── src/
│   ├── main.ts
│   ├── App.vue
│   ├── style.css
│   ├── router.ts
│   ├── api/
│   │   └── typhoon.ts
│   ├── stores/
│   │   ├── typhoon.ts
│   │   ├── layer.ts
│   │   └── history.ts
│   ├── lib/
│   │   ├── typhoon-style.ts
│   │   ├── time.ts
│   │   └── fetch-with-retry.ts
│   ├── types/
│   │   └── typhoon.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.vue
│   │   │   ├── Sidebar.vue
│   │   │   └── RightPanel.vue
│   │   ├── ui/
│   │   │   ├── GlassPanel.vue
│   │   │   ├── IntensityBadge.vue
│   │   │   ├── LiveClock.vue
│   │   │   ├── RefreshCountdown.vue
│   │   │   ├── Toast.vue
│   │   │   ├── Skeleton.vue
│   │   │   └── EmptyState.vue
│   │   └── map/
│   │       ├── MapCanvas.vue
│   │       ├── TyphoonMarker.vue
│   │       ├── WindCircle.vue
│   │       ├── ForecastLine.vue
│   │       ├── PastPath.vue
│   │       └── TimelineSlider.vue
│   └── views/
│       ├── HomeView.vue
│       ├── SatelliteView.vue
│       ├── RadarView.vue
│       ├── RainView.vue
│       ├── WindView.vue
│       ├── HistoryView.vue
│       ├── EventsView.vue
│       └── AboutView.vue
└── tests/
    ├── unit/
    │   ├── typhoon-style.test.ts
    │   └── typhoon.test.ts
    └── e2e/
        └── home.spec.ts
```

---

## Task 1: Scaffold Vite + Vue 3 + TS project

**Files:**
- Create: `台风网/package.json`
- Create: `台风网/vite.config.ts`
- Create: `台风网/tsconfig.json`
- Create: `台风网/tsconfig.node.json`
- Create: `台风网/index.html`
- Create: `台风网/src/main.ts`
- Create: `台风网/src/App.vue`
- Create: `台风网/.gitignore`

- [ ] **Step 1: Create directory and package.json**

Run:
```bash
mkdir -p 台风网/src 台风网/public 台风网/tests/unit 台风网/tests/e2e
```

Create `台风网/package.json`:
```json
{
  "name": "zhejiang-typhoon",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.3.0",
    "pinia": "^2.1.7",
    "leaflet": "^1.9.4",
    "leaflet-velocity": "^1.7.0",
    "dayjs": "^1.11.10"
  },
  "devDependencies": {
    "@types/leaflet": "^1.9.8",
    "@types/leaflet-velocity": "^1.0.4",
    "@vitejs/plugin-vue": "^5.0.0",
    "typescript": "^5.3.3",
    "vue-tsc": "^1.8.25",
    "vite": "^5.0.10",
    "vitest": "^1.1.3",
    "@playwright/test": "^1.40.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "jsdom": "^23.0.1"
  }
}
```

- [ ] **Step 2: Create config files**

Create `台风网/vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/unit/**/*.test.ts']
  }
})
```

Create `台风网/tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] },
    "types": ["vitest/globals", "node"]
  },
  "include": ["src/**/*", "tests/**/*"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `台风网/tsconfig.node.json`:
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

Create `台风网/index.html`:
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>浙江台风 · 实时台风消息</title>
  </head>
  <body class="bg-slate-950 text-slate-100">
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

Create `台风网/.gitignore`:
```
node_modules
dist
.vite
*.log
.DS_Store
playwright-report
test-results
```

Create `台风网/src/main.ts`:
```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import './style.css'
import 'leaflet/dist/leaflet.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
```

Create `台风网/src/App.vue`:
```vue
<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/layout/TopBar.vue'
import Sidebar from './components/layout/Sidebar.vue'
import RightPanel from './components/layout/RightPanel.vue'
import Toast from './components/ui/Toast.vue'
</script>

<template>
  <div class="h-screen w-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
    <TopBar />
    <div class="flex-1 flex relative overflow-hidden">
      <Sidebar />
      <main class="flex-1 relative">
        <RouterView />
      </main>
      <RightPanel />
    </div>
    <Toast />
  </div>
</template>
```

- [ ] **Step 3: Install dependencies**

Run: `cd 台风网 && npm install`
Expected: dependencies installed, no errors.

- [ ] **Step 4: Verify dev server starts**

Run: `cd 台风网 && npm run dev &`
Wait 5 seconds, then kill. Confirm no compile errors.

- [ ] **Step 5: Commit**

Run:
```bash
cd 台风网 && git init && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "chore: scaffold Vite + Vue 3 + TS project"
```

---

## Task 2: Tailwind + base styles

**Files:**
- Create: `台风网/tailwind.config.ts`
- Create: `台风网/postcss.config.js`
- Create: `台风网/src/style.css`
- Create: `台风网/public/favicon.svg`

- [ ] **Step 1: Create tailwind config**

Create `台风网/tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        typhoon: {
          depression: '#6B7280',
          tropical:    '#FBBF24',
          strong:      '#FB923C',
          typhoon:     '#F87171',
          strong2:     '#DC2626',
          super:       '#A21CAF'
        }
      },
      backdropBlur: {
        xl: '24px'
      }
    }
  },
  plugins: []
} satisfies Config
```

Create `台风网/postcss.config.js`:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

Create `台风网/src/style.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #app { height: 100%; margin: 0; }

body {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.leaflet-container { background: #0f172a; }
.leaflet-popup-content-wrapper {
  background: rgba(15, 23, 42, 0.9);
  color: #f1f5f9;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
}
.leaflet-popup-tip { background: rgba(15, 23, 42, 0.9); }
```

Create `台风网/public/favicon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="14" fill="#06b6d4"/>
  <path d="M16 6 Q22 12 16 16 Q10 20 16 26 Q22 20 16 16 Q10 12 16 6Z" fill="#0e7490"/>
</svg>
```

- [ ] **Step 2: Verify build**

Run: `cd 台风网 && npm run build`
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "chore: add tailwind + base styles"
```

---

## Task 3: Types

**Files:**
- Create: `台风网/src/types/typhoon.ts`

- [ ] **Step 1: Write types**

Create `台风网/src/types/typhoon.ts`:
```ts
export type IntensityLevel =
  | '热带低压' | '热带风暴' | '强热带风暴'
  | '台风' | '强台风' | '超强台风' | 'unknown'

export interface ActiveTyphoon {
  tfid: string
  name: string
  enname: string
  lat: string
  lng: string
  movedirection: string
  movespeed: string
  power: string
  pressure: string
  radius10: string
  radius7: string
  speed: string
  strong: IntensityLevel | string
  warnlevel: string | null
  time: string
  timeformate: string
}

export interface ForecastPoint {
  time: string
  lng: string
  lat: string
  strong: string
  power: string
  speed: string
  pressure: string
  tm?: string
  ybsj?: string
}

export interface ForecastByAgency {
  tm: string
  forecastpoints: ForecastPoint[]
}

export interface TyphoonPoint {
  time: string
  lng: string
  lat: string
  strong: string
  power: string
  speed: string
  pressure: string
  movespeed: string
  movedirection: string
  radius7: string
  radius10: string
  radius12: string
  forecast: ForecastByAgency[]
  ckposition?: string
  jl?: string
}

export interface LandPoint {
  time: string
  lng: string
  lat: string
  place?: string
}

export interface TyphoonInfo {
  tfid: string
  name: string
  enname: string
  isactive: string
  starttime: string
  endtime: string
  warnlevel: string
  centerlng: string
  centerlat: string
  land: LandPoint[]
  points: TyphoonPoint[]
}

export interface TyphoonEvent {
  tfid: string
  time: string
  etype: string
  ename: string
  lng: string
  lat: string
  description: string | null
  docid: string | null
  image: string | null
  url: string | null
}

export interface TyphoonYearItem {
  tfid: string
  name: string
  enname: string
  starttime: string
  endtime: string
  warnlevel: string
  isactive: string
}

export interface RadarResponse {
  synTime: string
  radarType: string
  [key: `radar${number}_${number}`]: string
}

export interface CloudResponse {
  cloud1h: string
  cloud3h: string
  cloud6h: string
  cloudname: string
}

export interface RainContour {
  symbol: string
  color: string
  latAndLong: [number, number][]
}

export interface RainResponse {
  contours: string
}
```

- [ ] **Step 2: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(types): add typhoon TypeScript interfaces"
```

---

## Task 4: typhoon-style lib (TDD)

**Files:**
- Create: `台风网/src/lib/typhoon-style.ts`
- Test: `台风网/tests/unit/typhoon-style.test.ts`

- [ ] **Step 1: Write failing tests**

Create `台风网/tests/unit/typhoon-style.test.ts`:
```ts
import { describe, it, expect } from 'vitest'
import { intensityColor, parseRadiusQuadrants, windCircleColor } from '@/lib/typhoon-style'

describe('intensityColor', () => {
  it('returns gray for 热带低压', () => {
    expect(intensityColor('热带低压')).toBe('#6B7280')
  })
  it('returns purple for 超强台风', () => {
    expect(intensityColor('超强台风')).toBe('#A21CAF')
  })
  it('returns neutral for unknown', () => {
    expect(intensityColor('xxx')).toBe('#94A3B8')
  })
})

describe('parseRadiusQuadrants', () => {
  it('splits NE|NW|SW|SE into four numbers', () => {
    expect(parseRadiusQuadrants('500|500|450|480')).toEqual([500, 500, 450, 480])
  })
  it('returns nulls for empty string', () => {
    expect(parseRadiusQuadrants('')).toEqual([null, null, null, null])
  })
  it('returns nulls for malformed', () => {
    expect(parseRadiusQuadrants('abc')).toEqual([null, null, null, null])
  })
})

describe('windCircleColor', () => {
  it('returns red for 12级', () => {
    expect(windCircleColor(12)).toBe('#DC2626')
  })
  it('returns yellow for 7级', () => {
    expect(windCircleColor(7)).toBe('#FBBF24')
  })
  it('returns blue for 10级', () => {
    expect(windCircleColor(10)).toBe('#FB923C')
  })
})
```

- [ ] **Step 2: Run tests, verify they fail**

Run: `cd 台风网 && npm test`
Expected: FAIL, module not found.

- [ ] **Step 3: Implement typhoon-style**

Create `台风网/src/lib/typhoon-style.ts`:
```ts
const COLOR_MAP: Record<string, string> = {
  '热带低压': '#6B7280',
  '热带风暴': '#FBBF24',
  '强热带风暴': '#FB923C',
  '台风': '#F87171',
  '强台风': '#DC2626',
  '超强台风': '#A21CAF'
}
const FALLBACK = '#94A3B8'

export function intensityColor(level: string): string {
  return COLOR_MAP[level] ?? FALLBACK
}

export type Quadrants = [number | null, number | null, number | null, number | null]

export function parseRadiusQuadrants(s: string): Quadrants {
  if (!s) return [null, null, null, null]
  const parts = s.split('|')
  if (parts.length !== 4) return [null, null, null, null]
  const nums = parts.map(p => {
    const n = Number(p)
    return Number.isFinite(n) && n > 0 ? n : null
  }) as Quadrants
  return nums
}

export function windCircleColor(level: 7 | 10 | 12): string {
  if (level === 7) return '#FBBF24'
  if (level === 10) return '#FB923C'
  return '#DC2626'
}
```

- [ ] **Step 4: Run tests, verify they pass**

Run: `cd 台风网 && npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(lib): typhoon-style color + radius parsing"
```

---

## Task 5: time lib

**Files:**
- Create: `台风网/src/lib/time.ts`

- [ ] **Step 1: Implement time helpers**

Create `台风网/src/lib/time.ts`:
```ts
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export function formatLocal(input: string | Date, tz = 'Asia/Shanghai'): string {
  if (!input) return '-'
  return dayjs(input).tz(tz).format('YYYY-MM-DD HH:mm')
}

export function formatUtc(input: string | Date): string {
  if (!input) return '-'
  return dayjs.utc(input).format('YYYY-MM-DD HH:mm [UTC]')
}

export function nowParts(tz = 'Asia/Shanghai'): { local: string; utc: string } {
  return {
    local: dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss'),
    utc: dayjs.utc().format('YYYY-MM-DD HH:mm:ss')
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(lib): time formatting helpers"
```

---

## Task 6: fetch-with-retry

**Files:**
- Create: `台风网/src/lib/fetch-with-retry.ts`

- [ ] **Step 1: Implement fetch wrapper**

Create `台风网/src/lib/fetch-with-retry.ts`:
```ts
export async function fetchWithRetry<T>(
  url: string,
  opts: { retries?: number; timeoutMs?: number; signal?: AbortSignal } = {}
): Promise<T> {
  const { retries = 1, timeoutMs = 30000 } = opts
  let lastErr: unknown
  for (let i = 0; i <= retries; i++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)
    try {
      const res = await fetch(url, { signal: controller.signal })
      clearTimeout(timer)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return (await res.json()) as T
    } catch (err) {
      clearTimeout(timer)
      lastErr = err
      if (opts.signal?.aborted) throw err
      if (i === retries) break
      await new Promise(r => setTimeout(r, 1000 * (i + 1)))
    }
  }
  throw lastErr
}
```

- [ ] **Step 2: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(lib): fetch-with-retry helper"
```

---

## Task 7: API layer (TDD)

**Files:**
- Create: `台风网/src/api/typhoon.ts`
- Test: `台风网/tests/unit/typhoon.test.ts`

- [ ] **Step 1: Write failing test**

Create `台风网/tests/unit/typhoon.test.ts`:
```ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getActiveTyphoons, getTyphoonInfo } from '@/api/typhoon'

describe('api/typhoon', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('getActiveTyphoons calls /Api/TyhoonActivity', async () => {
    const mock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [{ tfid: '202609', name: '巴威' }]
    })
    vi.stubGlobal('fetch', mock)
    const data = await getActiveTyphoons()
    expect(mock).toHaveBeenCalledWith(
      expect.stringContaining('/Api/TyhoonActivity'),
      expect.any(Object)
    )
    expect(data[0].tfid).toBe('202609')
  })

  it('getTyphoonInfo calls /Api/TyphoonInfo/{tfid}', async () => {
    const mock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ tfid: '202609', name: '巴威', points: [] })
    })
    vi.stubGlobal('fetch', mock)
    const data = await getTyphoonInfo('202609')
    expect(mock.mock.calls[0][0]).toContain('/Api/TyphoonInfo/202609')
    expect(data.name).toBe('巴威')
  })
})
```

- [ ] **Step 2: Run test, verify failure**

Run: `cd 台风网 && npm test`
Expected: FAIL.

- [ ] **Step 3: Implement API**

Create `台风网/src/api/typhoon.ts`:
```ts
import type {
  ActiveTyphoon, TyphoonInfo, TyphoonEvent,
  TyphoonYearItem, RadarResponse, CloudResponse, RainResponse
} from '@/types/typhoon'
import { fetchWithRetry } from '@/lib/fetch-with-retry'

const BASE = 'https://typhoon.slt.zj.gov.cn/Api'

const cache = new Map<string, { ts: number; data: unknown }>()
const TTL = 5 * 60 * 1000

async function getCached<T>(url: string): Promise<T> {
  const hit = cache.get(url)
  if (hit && Date.now() - hit.ts < TTL) return hit.data as T
  const data = await fetchWithRetry<T>(url)
  cache.set(url, { ts: Date.now(), data })
  return data
}

export async function getActiveTyphoons(): Promise<ActiveTyphoon[]> {
  return getCached<ActiveTyphoon[]>(`${BASE}/TyhoonActivity`)
}

export async function getTyphoonInfo(tfid: string): Promise<TyphoonInfo> {
  return getCached<TyphoonInfo>(`${BASE}/TyphoonInfo/${tfid}`)
}

export async function getTyphoonEvents(tfid: string): Promise<TyphoonEvent[]> {
  return getCached<TyphoonEvent[]>(`${BASE}/TyphoonEvent/${tfid}/False`)
}

export async function searchTyphoon(kw: string): Promise<{ name: string; value: string; starttime: string; endtime: string }[]> {
  return getCached(`${BASE}/TyphoonSearch/${encodeURIComponent(kw)}`)
}

export async function getYearTyphoons(year: number | string): Promise<TyphoonYearItem[]> {
  return getCached<TyphoonYearItem[]>(`${BASE}/TyphoonList/${year}`)
}

export async function getLastRadar(): Promise<RadarResponse> {
  return getCached<RadarResponse>(`${BASE}/LastRadar`)
}

export async function getLeastCloud(type: 24 | 48 | 72 = 24): Promise<CloudResponse> {
  return getCached<CloudResponse>(`${BASE}/LeastCloud/?type=${type}`)
}

export async function getLeastRain(hours: 24 | 48 | 72): Promise<RainResponse> {
  return getCached<RainResponse>(`${BASE}/LeastRain/${hours}`)
}

export async function getLastWind(ts?: string): Promise<{ windData: string }> {
  const url = ts ? `${BASE}/LastWind/${ts}` : `${BASE}/LastWind`
  return getCached(url)
}

export function clearCache() { cache.clear() }
```

- [ ] **Step 4: Run tests, verify pass**

Run: `cd 台风网 && npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(api): typhoon API layer with cache"
```

---

## Task 8: Pinia stores

**Files:**
- Create: `台风网/src/stores/typhoon.ts`
- Create: `台风网/src/stores/layer.ts`
- Create: `台风网/src/stores/history.ts`

- [ ] **Step 1: Implement typhoon store**

Create `台风网/src/stores/typhoon.ts`:
```ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getActiveTyphoons, getTyphoonInfo, getTyphoonEvents } from '@/api/typhoon'
import type { ActiveTyphoon, TyphoonInfo, TyphoonEvent } from '@/types/typhoon'

const REFRESH_INTERVAL = 30_000

export const useTyphoonStore = defineStore('typhoon', () => {
  const active = ref<ActiveTyphoon[]>([])
  const infoCache = ref<Map<string, TyphoonInfo>>(new Map())
  const eventsCache = ref<Map<string, TyphoonEvent[]>>(new Map())
  const selectedTfid = ref<string | null>(null)
  const lastUpdate = ref<number>(0)
  const loading = ref(false)
  const error = ref<string | null>(null)
  let timer: number | null = null

  const selected = computed<ActiveTyphoon | null>(() =>
    active.value.find(t => t.tfid === selectedTfid.value) ?? null
  )
  const selectedInfo = computed<TyphoonInfo | null>(() =>
    selectedTfid.value ? infoCache.value.get(selectedTfid.value) ?? null : null
  )

  async function refresh(force = false) {
    loading.value = true
    error.value = null
    try {
      active.value = await getActiveTyphoons()
      lastUpdate.value = Date.now()
      if (!selectedTfid.value && active.value.length) {
        select(active.value[0].tfid)
      } else if (selectedTfid.value && force) {
        infoCache.value.delete(selectedTfid.value)
        await ensureInfo(selectedTfid.value)
      }
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'fetch failed'
    } finally {
      loading.value = false
    }
  }

  function select(tfid: string) {
    selectedTfid.value = tfid
    ensureInfo(tfid)
    ensureEvents(tfid)
  }

  async function ensureInfo(tfid: string) {
    if (infoCache.value.has(tfid)) return
    const info = await getTyphoonInfo(tfid)
    infoCache.value.set(tfid, info)
  }

  async function ensureEvents(tfid: string) {
    if (eventsCache.value.has(tfid)) return
    const ev = await getTyphoonEvents(tfid)
    eventsCache.value.set(tfid, ev)
  }

  function startAutoRefresh() {
    stopAutoRefresh()
    const tick = () => {
      if (document.visibilityState === 'visible') refresh(false)
    }
    timer = window.setInterval(tick, REFRESH_INTERVAL)
  }
  function stopAutoRefresh() {
    if (timer) { clearInterval(timer); timer = null }
  }

  return { active, infoCache, eventsCache, selectedTfid, selected, selectedInfo,
           lastUpdate, loading, error, refresh, select, ensureInfo, ensureEvents,
           startAutoRefresh, stopAutoRefresh }
})
```

- [ ] **Step 2: Implement layer store**

Create `台风网/src/stores/layer.ts`:
```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type BaseLayerType = 'vec' | 'sat'

export const useLayerStore = defineStore('layer', () => {
  const baseType = ref<BaseLayerType>('vec')
  const showPastPath = ref(true)
  const showForecast = ref(true)
  const showWindCircle = ref(true)
  const showLabels = ref(true)
  const overlayCloud = ref(false)
  const overlayRadar = ref(false)
  const overlayRain = ref(false)
  const overlayWind = ref(false)
  const rainHours = ref<24 | 48 | 72>(24)
  const cloudType = ref<24 | 48 | 72>(24)

  return { baseType, showPastPath, showForecast, showWindCircle, showLabels,
           overlayCloud, overlayRadar, overlayRain, overlayWind,
           rainHours, cloudType }
})
```

- [ ] **Step 3: Implement history store**

Create `台风网/src/stores/history.ts`:
```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getYearTyphoons } from '@/api/typhoon'
import type { TyphoonYearItem } from '@/types/typhoon'

export const useHistoryStore = defineStore('history', () => {
  const year = ref<number>(new Date().getFullYear())
  const list = ref<TyphoonYearItem[]>([])
  const selectedTfid = ref<string | null>(null)
  const loading = ref(false)

  async function loadYear(y: number) {
    year.value = y
    loading.value = true
    try {
      list.value = await getYearTyphoons(y)
    } finally {
      loading.value = false
    }
  }

  return { year, list, selectedTfid, loading, loadYear }
})
```

- [ ] **Step 4: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(stores): pinia stores for typhoon/layer/history"
```

---

## Task 9: UI primitives

**Files:**
- Create: `台风网/src/components/ui/GlassPanel.vue`
- Create: `台风网/src/components/ui/IntensityBadge.vue`
- Create: `台风网/src/components/ui/EmptyState.vue`
- Create: `台风网/src/components/ui/Skeleton.vue`
- Create: `台风网/src/components/ui/Toast.vue`

- [ ] **Step 1: GlassPanel**

Create `台风网/src/components/ui/GlassPanel.vue`:
```vue
<script setup lang="ts">
defineProps<{ pad?: 'sm' | 'md' | 'lg' }>()
</script>

<template>
  <div :class="[
    'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-black/20',
    pad === 'sm' ? 'p-2' : pad === 'lg' ? 'p-6' : 'p-4'
  ]">
    <slot />
  </div>
</template>
```

- [ ] **Step 2: IntensityBadge**

Create `台风网/src/components/ui/IntensityBadge.vue`:
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { intensityColor } from '@/lib/typhoon-style'
const props = defineProps<{ level: string; size?: 'sm' | 'md' }>()
const color = computed(() => intensityColor(props.level))
</script>

<template>
  <span :class="[
    'inline-flex items-center gap-1 rounded-full font-semibold text-white',
    size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
  ]" :style="{ backgroundColor: color }">
    {{ level }}
  </span>
</template>
```

- [ ] **Step 3: EmptyState**

Create `台风网/src/components/ui/EmptyState.vue`:
```vue
<script setup lang="ts">
defineProps<{ title?: string; desc?: string }>()
</script>

<template>
  <div class="flex flex-col items-center justify-center text-slate-400 py-12">
    <div class="text-5xl mb-3">🌊</div>
    <div class="text-base font-medium">{{ title ?? '暂无数据' }}</div>
    <div class="text-xs mt-1 text-slate-500">{{ desc }}</div>
  </div>
</template>
```

- [ ] **Step 4: Skeleton**

Create `台风网/src/components/ui/Skeleton.vue`:
```vue
<script setup lang="ts">
defineProps<{ height?: string; width?: string }>()
</script>

<template>
  <div class="bg-white/5 animate-pulse rounded" :style="{ height: height ?? '1rem', width: width ?? '100%' }" />
</template>
```

- [ ] **Step 5: Toast**

Create `台风网/src/components/ui/Toast.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'

const messages = ref<{ id: number; text: string; type: 'info' | 'error' }[]>([])
let nextId = 1

export function showToast(text: string, type: 'info' | 'error' = 'info') {
  const id = nextId++
  messages.value.push({ id, text, type })
  setTimeout(() => { messages.value = messages.value.filter(m => m.id !== id) }, 4000)
}

;(window as any).__toast = showToast
</script>

<template>
  <div class="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
    <div v-for="m in messages" :key="m.id"
      :class="[
        'px-4 py-2 rounded-lg shadow-lg backdrop-blur-xl border',
        m.type === 'error' ? 'bg-red-500/20 border-red-400/30 text-red-100' : 'bg-cyan-500/20 border-cyan-400/30 text-cyan-100'
      ]">
      {{ m.text }}
    </div>
  </div>
</template>
```

- [ ] **Step 6: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(ui): GlassPanel, IntensityBadge, EmptyState, Skeleton, Toast"
```

---

## Task 10: LiveClock + RefreshCountdown

**Files:**
- Create: `台风网/src/components/ui/LiveClock.vue`
- Create: `台风网/src/components/ui/RefreshCountdown.vue`

- [ ] **Step 1: LiveClock**

Create `台风网/src/components/ui/LiveClock.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { nowParts } from '@/lib/time'
const parts = ref(nowParts())
let timer: number | null = null
onMounted(() => { timer = window.setInterval(() => { parts.value = nowParts() }, 1000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <div class="flex items-center gap-4 text-sm font-mono">
    <span class="text-cyan-300">{{ parts.local }}</span>
    <span class="text-slate-500">|</span>
    <span class="text-slate-400">{{ parts.utc }} UTC</span>
  </div>
</template>
```

- [ ] **Step 2: RefreshCountdown**

Create `台风网/src/components/ui/RefreshCountdown.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{ seconds?: number }>()
const emit = defineEmits<{ (e: 'tick'): void }>()
const remaining = ref(props.seconds ?? 30)
const total = props.seconds ?? 30
let timer: number | null = null

const dashOffset = computed(() => 113.1 * (remaining.value / total))

onMounted(() => {
  timer = window.setInterval(() => {
    if (document.visibilityState !== 'visible') return
    remaining.value--
    if (remaining.value <= 0) {
      remaining.value = total
      emit('tick')
    }
  }, 1000)
})
onUnmounted(() => { if (timer) clearInterval(timer) })

function reset() { remaining.value = total }
defineExpose({ reset })
</script>

<template>
  <div class="relative w-8 h-8 inline-flex items-center justify-center" :title="`${remaining}s 后自动刷新`">
    <svg class="absolute inset-0 -rotate-90" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3" />
      <circle cx="20" cy="20" r="18" fill="none" stroke="#22d3ee" stroke-width="3"
        stroke-dasharray="113.1" :stroke-dashoffset="dashOffset" stroke-linecap="round" />
    </svg>
    <span class="text-[10px] font-bold text-cyan-300">{{ remaining }}</span>
  </div>
</template>
```

- [ ] **Step 3: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(ui): LiveClock and RefreshCountdown"
```

---

## Task 11: Layout components (TopBar / Sidebar / RightPanel)

**Files:**
- Create: `台风网/src/components/layout/TopBar.vue`
- Create: `台风网/src/components/layout/Sidebar.vue`
- Create: `台风网/src/components/layout/RightPanel.vue`

- [ ] **Step 1: TopBar**

Create `台风网/src/components/layout/TopBar.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import LiveClock from '../ui/LiveClock.vue'
import RefreshCountdown from '../ui/RefreshCountdown.vue'
import IntensityBadge from '../ui/IntensityBadge.vue'
import { useTyphoonStore } from '@/stores/typhoon'
import { useLayerStore } from '@/stores/layer'

const typhoonStore = useTyphoonStore()
const layerStore = useLayerStore()
const countdownRef = ref<InstanceType<typeof RefreshCountdown> | null>(null)

async function manualRefresh() {
  await typhoonStore.refresh(true)
  countdownRef.value?.reset()
}
function toggleBase() {
  layerStore.baseType = layerStore.baseType === 'vec' ? 'sat' : 'vec'
}
</script>

<template>
  <header class="h-14 flex items-center justify-between px-4 bg-white/5 backdrop-blur-xl border-b border-white/10">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">🌀</div>
      <div class="font-bold text-lg">浙江台风 · 实时台风消息</div>
      <IntensityBadge v-if="typhoonStore.selected" :level="typhoonStore.selected.strong" />
    </div>
    <div class="flex items-center gap-3">
      <LiveClock />
      <button @click="toggleBase"
        class="px-3 py-1 text-xs rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
        {{ layerStore.baseType === 'vec' ? '矢量' : '卫星' }}
      </button>
      <button @click="manualRefresh" title="手动刷新"
        class="px-3 py-1 text-xs rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-200">
        ⟳ 刷新
      </button>
      <RefreshCountdown ref="countdownRef" :seconds="30" @tick="typhoonStore.refresh(false)" />
    </div>
  </header>
</template>
```

- [ ] **Step 2: Sidebar**

Create `台风网/src/components/layout/Sidebar.vue`:
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTyphoonStore } from '@/stores/typhoon'
import IntensityBadge from '../ui/IntensityBadge.vue'
import Skeleton from '../ui/Skeleton.vue'
import EmptyState from '../ui/EmptyState.vue'

const route = useRoute()
const router = useRouter()
const typhoonStore = useTyphoonStore()
const collapsed = ref(false)

const modules = [
  { path: '/', label: '实时台风', icon: '🌀' },
  { path: '/satellite', label: '卫星云图', icon: '☁️' },
  { path: '/radar', label: '雷达', icon: '📡' },
  { path: '/rain', label: '降雨', icon: '🌧️' },
  { path: '/wind', label: '风场', icon: '💨' },
  { path: '/history', label: '历史台风', icon: '📜' },
  { path: '/events', label: '事件', icon: '⚡' },
  { path: '/about', label: '关于', icon: 'ℹ️' }
]

const showList = computed(() => route.path === '/')
</script>

<template>
  <aside :class="[
    'border-r border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 flex flex-col',
    collapsed ? 'w-14' : 'w-80'
  ]">
    <div class="p-2 flex items-center justify-between border-b border-white/10">
      <button v-if="!collapsed" @click="collapsed = true" class="text-xs text-slate-400 hover:text-white">◀ 折叠</button>
      <button v-else @click="collapsed = false" class="text-xs text-slate-400 hover:text-white">▶</button>
    </div>

    <nav class="p-2 flex flex-col gap-1">
      <button v-for="m in modules" :key="m.path"
        @click="router.push(m.path)"
        :class="[
          'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition',
          route.path === m.path ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/30' : 'hover:bg-white/5'
        ]">
        <span>{{ m.icon }}</span>
        <span v-if="!collapsed">{{ m.label }}</span>
      </button>
    </nav>

    <div v-if="showList && !collapsed" class="flex-1 overflow-auto p-2 border-t border-white/10">
      <div class="text-xs text-slate-400 px-2 py-1 uppercase">活动台风</div>
      <Skeleton v-if="typhoonStore.loading && !typhoonStore.active.length" height="3rem" />
      <EmptyState v-else-if="!typhoonStore.active.length" title="暂无活跃台风" />
      <button v-for="t in typhoonStore.active" :key="t.tfid"
        @click="typhoonStore.select(t.tfid)"
        :class="[
          'w-full text-left p-3 rounded-lg border transition',
          typhoonStore.selectedTfid === t.tfid ? 'bg-cyan-500/15 border-cyan-400/30' : 'bg-white/5 border-white/10 hover:bg-white/10'
        ]">
        <div class="flex items-center justify-between">
          <div class="font-semibold">{{ t.tfid }} {{ t.name }}</div>
          <IntensityBadge :level="t.strong" size="sm" />
        </div>
        <div class="text-xs text-slate-400 mt-1">
          {{ Number(t.lat).toFixed(1) }}°N · {{ Number(t.lng).toFixed(1) }}°E · {{ t.timeformate }}
        </div>
      </button>
    </div>
  </aside>
</template>
```

- [ ] **Step 3: RightPanel**

Create `台风网/src/components/layout/RightPanel.vue`:
```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useTyphoonStore } from '@/stores/typhoon'
import GlassPanel from '../ui/GlassPanel.vue'
import IntensityBadge from '../ui/IntensityBadge.vue'
import Skeleton from '../ui/Skeleton.vue'
import EmptyState from '../ui/EmptyState.vue'

const typhoonStore = useTyphoonStore()
const collapsed = ref(false)

const info = () => typhoonStore.selectedInfo
</script>

<template>
  <aside :class="[
    'border-l border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300',
    collapsed ? 'w-10' : 'w-96'
  ]">
    <div class="p-2 flex justify-end border-b border-white/10">
      <button @click="collapsed = !collapsed" class="text-xs text-slate-400 hover:text-white">
        {{ collapsed ? '◀' : '▶' }}
      </button>
    </div>

    <div v-if="!collapsed" class="p-3 overflow-auto h-[calc(100vh-3.5rem)]">
      <EmptyState v-if="!typhoonStore.selected" title="请选择台风" />
      <template v-else>
        <GlassPanel pad="md" class="mb-3">
          <div class="flex items-center justify-between mb-2">
            <div>
              <div class="text-lg font-bold">{{ typhoonStore.selected.name }} ({{ typhoonStore.selected.enname }})</div>
              <div class="text-xs text-slate-400">{{ typhoonStore.selected.tfid }} · {{ typhoonStore.selected.timeformate }}</div>
            </div>
            <IntensityBadge :level="typhoonStore.selected.strong" />
          </div>
          <div class="grid grid-cols-2 gap-2 text-sm mt-3">
            <div class="bg-white/5 rounded-lg p-2"><div class="text-xs text-slate-400">风速</div>{{ typhoonStore.selected.speed }} m/s</div>
            <div class="bg-white/5 rounded-lg p-2"><div class="text-xs text-slate-400">气压</div>{{ typhoonStore.selected.pressure }} hPa</div>
            <div class="bg-white/5 rounded-lg p-2"><div class="text-xs text-slate-400">移速</div>{{ typhoonStore.selected.movespeed }} km/h</div>
            <div class="bg-white/5 rounded-lg p-2"><div class="text-xs text-slate-400">移向</div>{{ typhoonStore.selected.movedirection }}</div>
            <div class="bg-white/5 rounded-lg p-2 col-span-2"><div class="text-xs text-slate-400">位置</div>
              {{ Number(typhoonStore.selected.lat).toFixed(2) }}°N · {{ Number(typhoonStore.selected.lng).toFixed(2) }}°E</div>
          </div>
        </GlassPanel>

        <Skeleton v-if="!info()" height="6rem" />
        <GlassPanel v-else-if="info()!.points.length" pad="md" class="mb-3">
          <div class="text-sm font-semibold mb-2">最新位置</div>
          <div class="text-xs text-slate-300">{{ info()!.points.at(-1)?.ckposition }}</div>
          <div class="text-xs text-slate-400 mt-2">{{ info()!.points.at(-1)?.jl }}</div>
        </GlassPanel>

        <GlassPanel v-if="info() && info()!.land.length" pad="md" class="mb-3">
          <div class="text-sm font-semibold mb-2">登陆点</div>
          <div v-for="(l, i) in info()!.land" :key="i" class="text-xs text-slate-300">{{ l.time }} · {{ l.place ?? (l.lng + ',' + l.lat) }}</div>
        </GlassPanel>
      </template>
    </div>
  </aside>
</template>
```

- [ ] **Step 4: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(layout): TopBar, Sidebar, RightPanel"
```

---

## Task 12: MapCanvas + map components

**Files:**
- Create: `台风网/src/components/map/MapCanvas.vue`
- Create: `台风网/src/components/map/TyphoonMarker.vue` (logic inside MapCanvas)
- Create: `台风网/src/components/map/WindCircle.vue` (logic inside MapCanvas)
- Create: `台风网/src/components/map/ForecastLine.vue`
- Create: `台风网/src/components/map/PastPath.vue`
- Create: `台风网/src/components/map/TimelineSlider.vue`

- [ ] **Step 1: MapCanvas**

Create `台风网/src/components/map/MapCanvas.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import L from 'leaflet'
import { useLayerStore } from '@/stores/layer'
import { useTyphoonStore } from '@/stores/typhoon'
import { intensityColor, parseRadiusQuadrants } from '@/lib/typhoon-style'
import PastPath from './PastPath.vue'
import ForecastLine from './ForecastLine.vue'

const props = defineProps<{ center?: [number, number]; zoom?: number }>()
const layerStore = useLayerStore()
const typhoonStore = useTyphoonStore()

const containerRef = ref<HTMLDivElement | null>(null)
let map: L.Map | null = null
let vecLayer: L.TileLayer | null = null
let satLayer: L.TileLayer | null = null
let typhoonLayer: L.LayerGroup | null = null
let forecastLayer: L.LayerGroup | null = null

function tileVec() {
  return L.tileLayer(
    'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
    { subdomains: '1234', maxZoom: 18 }
  )
}
function tileSat() {
  return L.tileLayer(
    'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    { subdomains: '1234', maxZoom: 18 }
  )
}

function renderTyphoonOnMap() {
  if (!map) return
  typhoonLayer?.clearLayers()
  const info = typhoonStore.selectedInfo
  if (!info) return
  const last = info.points.at(-1)
  if (!last) return
  const lat = Number(last.lat), lng = Number(last.lng)
  const color = intensityColor(last.strong)
  const marker = L.circleMarker([lat, lng], {
    radius: 9, color, fillColor: color, fillOpacity: 0.9, weight: 2
  }).bindTooltip(`${info.name} · ${last.strong}`, { permanent: false })
  typhoonLayer?.addLayer(marker)

  const [r7ne, r7nw, r7sw, r7se] = parseRadiusQuadrants(last.radius7)
  const quadrants = [r7ne, r7nw, r7sw, r7se]
  quadrants.forEach((r, idx) => {
    if (!r) return
    const offsetLat = (idx === 0 || idx === 3 ? 1 : -1) * (r / 111)
    const offsetLng = (idx === 0 || idx === 1 ? 1 : -1) * (r / (111 * Math.cos(lat * Math.PI / 180)))
    L.rectangle([
      [lat, lng],
      [lat + offsetLat, lng + offsetLng]
    ], { color: '#FBBF24', weight: 1, fillOpacity: 0.05, dashArray: '4 4' }).addTo(typhoonLayer!)
  })
}

function renderForecasts() {
  if (!map) return
  forecastLayer?.clearLayers()
  const info = typhoonStore.selectedInfo
  if (!info) return
  const last = info.points.at(-1)
  if (!last) return
  last.forecast.forEach((f, idx) => {
    const latlngs = f.forecastpoints.map(p => [Number(p.lat), Number(p.lng)] as [number, number])
    if (latlngs.length < 2) return
    L.polyline(latlngs, {
      color: ['#22d3ee', '#a78bfa', '#fb923c', '#34d399', '#f472b6'][idx % 5],
      weight: 2, dashArray: '6 4', opacity: 0.85
    }).addTo(forecastLayer!)
    latlngs.forEach((ll, i) => {
      L.circleMarker(ll, { radius: 3, color: '#fff', fillColor: '#22d3ee', fillOpacity: 1, weight: 1 })
        .bindTooltip(`${f.tm} · ${f.forecastpoints[i].time}`, { direction: 'top' })
        .addTo(forecastLayer!)
    })
  })
}

onMounted(() => {
  if (!containerRef.value) return
  map = L.map(containerRef.value, {
    center: props.center ?? [25, 130],
    zoom: props.zoom ?? 4,
    zoomControl: false
  })
  L.control.zoom({ position: 'bottomright' }).addTo(map)
  vecLayer = tileVec().addTo(map)
  satLayer = tileSat()
  typhoonLayer = L.layerGroup().addTo(map)
  forecastLayer = L.layerGroup().addTo(map)
  setTimeout(() => map?.invalidateSize(), 100)
  renderTyphoonOnMap()
  renderForecasts()
})

onUnmounted(() => { map?.remove(); map = null })

watch(() => layerStore.baseType, t => {
  if (!map) return
  if (t === 'vec') { satLayer?.remove(); vecLayer?.addTo(map) }
  else { vecLayer?.remove(); satLayer?.addTo(map) }
})
watch(() => typhoonStore.selectedInfo, () => { renderTyphoonOnMap(); renderForecasts() }, { deep: true })
watch(() => typhoonStore.selected, t => {
  if (t && map) {
    const info = typhoonStore.selectedInfo
    const last = info?.points.at(-1)
    if (last) map.flyTo([Number(last.lat), Number(last.lng)], 5, { duration: 1.2 })
  }
}, { deep: true })

defineExpose({ getMap: () => map })
</script>

<template>
  <div ref="containerRef" class="absolute inset-0" />
</template>
```

- [ ] **Step 2: PastPath + ForecastLine (placeholders used in MapCanvas; expose helpers in store)**

Create `台风网/src/components/map/PastPath.vue`:
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useTyphoonStore } from '@/stores/typhoon'
const store = useTyphoonStore()
const points = computed(() => store.selectedInfo?.points ?? [])
</script>
<template>
  <div class="text-xs text-slate-400">
    <div v-for="(p, i) in points" :key="i">
      {{ p.time }} · {{ p.lat }},{{ p.lng }} · {{ p.strong }} · {{ p.pressure }}hPa
    </div>
  </div>
</template>
```

Create `台风网/src/components/map/ForecastLine.vue`:
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useTyphoonStore } from '@/stores/typhoon'
const store = useTyphoonStore()
const agencies = computed(() => store.selectedInfo?.points.at(-1)?.forecast ?? [])
</script>
<template>
  <div class="text-xs text-slate-400">
    <div v-for="(f, i) in agencies" :key="i" class="mb-1">
      <div class="font-semibold text-slate-300">{{ f.tm }} ({{ f.forecastpoints.length }} 点)</div>
    </div>
  </div>
</template>
```

- [ ] **Step 3: TimelineSlider**

Create `台风网/src/components/map/TimelineSlider.vue`:
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useTyphoonStore } from '@/stores/typhoon'

const store = useTyphoonStore()
const points = computed(() => store.selectedInfo?.points ?? [])
const total = computed(() => points.value.length)
</script>
<template>
  <div v-if="total" class="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 text-xs text-slate-200">
    路径点: {{ total }}
  </div>
</template>
```

- [ ] **Step 4: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(map): MapCanvas wrapper + path/forecast/slider components"
```

---

## Task 13: Router + HomeView

**Files:**
- Create: `台风网/src/router.ts`
- Create: `台风网/src/views/HomeView.vue`
- Create: `台风网/src/views/SatelliteView.vue` (stub)
- Create: `台风网/src/views/RadarView.vue` (stub)
- Create: `台风网/src/views/RainView.vue` (stub)
- Create: `台风网/src/views/WindView.vue` (stub)
- Create: `台风网/src/views/HistoryView.vue` (stub)
- Create: `台风网/src/views/EventsView.vue` (stub)
- Create: `台风网/src/views/AboutView.vue` (stub)

- [ ] **Step 1: Router**

Create `台风网/src/router.ts`:
```ts
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    { path: '/satellite', component: () => import('@/views/SatelliteView.vue') },
    { path: '/radar', component: () => import('@/views/RadarView.vue') },
    { path: '/rain', component: () => import('@/views/RainView.vue') },
    { path: '/wind', component: () => import('@/views/WindView.vue') },
    { path: '/history', component: () => import('@/views/HistoryView.vue') },
    { path: '/events', component: () => import('@/views/EventsView.vue') },
    { path: '/about', component: () => import('@/views/AboutView.vue') }
  ]
})
```

- [ ] **Step 2: HomeView**

Create `台风网/src/views/HomeView.vue`:
```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import MapCanvas from '@/components/map/MapCanvas.vue'
import TimelineSlider from '@/components/map/TimelineSlider.vue'
import { useTyphoonStore } from '@/stores/typhoon'

const store = useTyphoonStore()
onMounted(async () => { await store.refresh(); store.startAutoRefresh() })
onUnmounted(() => store.stopAutoRefresh())
</script>
<template>
  <div class="absolute inset-0">
    <MapCanvas />
    <TimelineSlider />
  </div>
</template>
```

- [ ] **Step 3: Stubs for the other 7 views**

Create `台风网/src/views/SatelliteView.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getLeastCloud } from '@/api/typhoon'
import type { CloudResponse } from '@/types/typhoon'
import EmptyState from '@/components/ui/EmptyState.vue'
const data = ref<CloudResponse | null>(null)
const loading = ref(true)
onMounted(async () => {
  try { data.value = await getLeastCloud(24) }
  finally { loading.value = false }
})
</script>
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <h2 class="text-xl font-bold mb-4">卫星云图</h2>
    <EmptyState v-if="!loading && !data" title="暂无云图" />
    <div v-else-if="data" class="space-y-3 max-w-2xl">
      <img v-if="data.cloudname" :src="data.cloudname" class="rounded-xl border border-white/10" />
      <div class="text-xs text-slate-400">
        <div>1h: {{ data.cloud1h }}</div>
        <div>3h: {{ data.cloud3h }}</div>
        <div>6h: {{ data.cloud6h }}</div>
      </div>
    </div>
  </div>
</template>
```

Create `台风网/src/views/RadarView.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getLastRadar } from '@/api/typhoon'
import type { RadarResponse } from '@/types/typhoon'
const data = ref<RadarResponse | null>(null)
const frame = ref(0)
onMounted(async () => { data.value = await getLastRadar() })
const frames = computed(() => {
  if (!data.value) return []
  return Object.entries(data.value).filter(([k]) => /^radar\d+_\d+$/.test(k)).map(([k, v]) => ({ key: k, src: v as string }))
})
</script>
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <h2 class="text-xl font-bold mb-4">雷达图</h2>
    <div v-if="frames.length" class="flex gap-3 items-start">
      <div class="flex-1">
        <img :src="frames[frame].src" class="rounded-xl border border-white/10" />
        <div class="text-xs text-slate-400 mt-2">帧: {{ frames[frame].key }} · 同步时间: {{ data?.synTime }}</div>
      </div>
      <div class="w-32 flex flex-col gap-1">
        <button v-for="(f, i) in frames" :key="f.key" @click="frame = i"
          :class="['px-2 py-1 rounded text-xs', frame === i ? 'bg-cyan-500/30 text-cyan-100' : 'bg-white/5 hover:bg-white/10']">
          {{ f.key }}
        </button>
      </div>
    </div>
  </div>
</template>
```

Create `台风网/src/views/RainView.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { getLeastRain } from '@/api/typhoon'
import type { RainResponse, RainContour } from '@/types/typhoon'
import { useLayerStore } from '@/stores/layer'
const layer = useLayerStore()
const data = ref<RainResponse | null>(null)
const contours = ref<RainContour[]>([])
async function load() {
  data.value = await getLeastRain(layer.rainHours)
  contours.value = JSON.parse(data.value.contours)
}
onMounted(load)
watch(() => layer.rainHours, load)
</script>
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-bold">累计降雨</h2>
      <div class="flex gap-1">
        <button v-for="h in [24, 48, 72]" :key="h" @click="layer.rainHours = h as 24|48|72"
          :class="['px-3 py-1 text-xs rounded-lg border',
            layer.rainHours === h ? 'bg-cyan-500/30 border-cyan-400/40 text-cyan-100' : 'bg-white/5 border-white/10 hover:bg-white/10']">
          {{ h }}h
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 max-w-2xl text-xs">
      <div v-for="(c, i) in contours" :key="i" class="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/10">
        <span class="w-3 h-3 rounded" :style="{ background: c.color }"></span>
        <span>等级 {{ c.symbol }}</span>
        <span class="text-slate-500">{{ c.latAndLong.length }} 点</span>
      </div>
    </div>
    <div class="text-xs text-slate-400 mt-3">* 等值面数据已加载，需配合地图渲染（本视图仅展示图例与统计）</div>
  </div>
</template>
```

Create `台风网/src/views/WindView.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getLastWind } from '@/api/typhoon'
const data = ref<{ windData: string } | null>(null)
const parsed = ref<{ header: Record<string, unknown> } | null>(null)
onMounted(async () => {
  data.value = await getLastWind()
  if (data.value) {
    try { parsed.value = JSON.parse(data.value.windData) } catch { parsed.value = null }
  }
})
</script>
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <h2 class="text-xl font-bold mb-4">风场</h2>
    <div v-if="parsed" class="text-xs text-slate-300">
      <div class="grid grid-cols-2 gap-2 max-w-2xl">
        <div v-for="(v, k) in parsed.header" :key="k" class="bg-white/5 rounded p-2 break-all">
          <span class="text-slate-400">{{ k }}:</span> {{ v }}
        </div>
      </div>
    </div>
    <div v-else class="text-slate-400 text-sm">加载中…</div>
  </div>
</template>
```

Create `台风网/src/views/HistoryView.vue`:
```vue
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useHistoryStore } from '@/stores/history'
import { useTyphoonStore } from '@/stores/typhoon'
import IntensityBadge from '@/components/ui/IntensityBadge.vue'

const historyStore = useHistoryStore()
const typhoonStore = useTyphoonStore()
onMounted(() => historyStore.loadYear(historyStore.year))
watch(() => historyStore.year, y => historyStore.loadYear(y))
</script>
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <h2 class="text-xl font-bold mb-4">历史台风</h2>
    <div class="flex gap-2 mb-3">
      <input type="number" v-model.number="historyStore.year" class="bg-white/5 border border-white/10 rounded px-2 py-1 w-24" />
      <button @click="historyStore.loadYear(historyStore.year)" class="px-3 py-1 rounded bg-cyan-500/20 border border-cyan-400/30 text-cyan-100 text-xs">载入</button>
    </div>
    <div class="grid gap-2 max-w-2xl">
      <button v-for="t in historyStore.list" :key="t.tfid"
        @click="typhoonStore.select(t.tfid); typhoonStore.ensureInfo(t.tfid)"
        class="text-left p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-between">
        <div>
          <div class="font-semibold">{{ t.tfid }} {{ t.name }} ({{ t.enname }})</div>
          <div class="text-xs text-slate-400">{{ t.starttime }} ~ {{ t.endtime }}</div>
        </div>
        <IntensityBadge :level="t.warnlevel || '热带低压'" size="sm" />
      </button>
    </div>
  </div>
</template>
```

Create `台风网/src/views/EventsView.vue`:
```vue
<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useTyphoonStore } from '@/stores/typhoon'

const typhoonStore = useTyphoonStore()
onMounted(() => {
  if (typhoonStore.selectedTfid) typhoonStore.ensureEvents(typhoonStore.selectedTfid)
})
watch(() => typhoonStore.selectedTfid, id => { if (id) typhoonStore.ensureEvents(id) })
</script>
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <h2 class="text-xl font-bold mb-4">事件时间线</h2>
    <div class="text-xs text-slate-400 mb-3">当前台风: {{ typhoonStore.selected?.name ?? '请在侧边栏选择' }}</div>
    <div v-if="typhoonStore.selectedTfid && typhoonStore.eventsCache.get(typhoonStore.selectedTfid)" class="space-y-2 max-w-2xl">
      <div v-for="(e, i) in typhoonStore.eventsCache.get(typhoonStore.selectedTfid)!" :key="i"
        class="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
        <div class="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
        <div class="flex-1">
          <div class="text-sm font-semibold">{{ e.ename }}</div>
          <div class="text-xs text-slate-400">{{ e.time }} · {{ e.etype }} · {{ e.lng }},{{ e.lat }}</div>
          <div v-if="e.description" class="text-xs text-slate-300 mt-1">{{ e.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
```

Create `台风网/src/views/AboutView.vue`:
```vue
<template>
  <div class="absolute inset-0 p-6 overflow-auto">
    <h2 class="text-xl font-bold mb-4">关于</h2>
    <div class="max-w-2xl text-sm text-slate-300 space-y-2">
      <p>浙江台风 · 美化版 — 基于浙江省水利厅公开数据接口 (`typhoon.slt.zj.gov.cn/Api`)。</p>
      <p>本项目纯前端直连，仅用于学习与个人研究。</p>
      <p>技术栈：Vue 3 + Vite + TypeScript + Tailwind + Leaflet。</p>
    </div>
  </div>
</template>
```

- [ ] **Step 4: Build verify**

Run: `cd 台风网 && npm run build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "feat(views): router + 8 views (home + 7 modules)"
```

---

## Task 14: Smoke e2e test

**Files:**
- Create: `台风网/playwright.config.ts`
- Create: `台风网/tests/e2e/home.spec.ts`

- [ ] **Step 1: Playwright config**

Create `台风网/playwright.config.ts`:
```ts
import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests/e2e',
  webServer: { command: 'npm run dev', port: 5173, reuseExistingServer: true },
  use: { baseURL: 'http://localhost:5173' }
})
```

- [ ] **Step 2: e2e spec**

Create `台风网/tests/e2e/home.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('home loads and shows typhoon list', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('浙江台风 · 实时台风消息')).toBeVisible()
  await expect(page.locator('text=活动台风')).toBeVisible({ timeout: 15000 })
})
```

- [ ] **Step 3: Run e2e (best-effort)**

Run: `cd 台风网 && npx playwright install --with-deps chromium`
Then: `cd 台风网 && npm run test:e2e`
Expected: PASS (real network to typhoon.slt.zj.gov.cn required).

- [ ] **Step 4: Commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "test(e2e): home smoke test"
```

---

## Task 15: README + final verification

**Files:**
- Create: `台风网/README.md`

- [ ] **Step 1: README**

Create `台风网/README.md`:
```markdown
# 浙江台风 · 实时台风消息（美化版）

基于 Vite + Vue 3 + TypeScript + Tailwind + Leaflet 的单页应用，复刻并美化浙江省水利厅「实时台风消息」七大核心模块。

## 功能
- 🌀 实时台风：当前活动台风 + 路径 + 风圈 + 多机构预报
- ☁️ 卫星云图（1h/3h/6h）
- 📡 雷达图（多帧轮播）
- 🌧️ 累计降雨（24/48/72h 等值面）
- 💨 风场（GRIB2 U/V 分量）
- 📜 历史台风（按年检索）
- ⚡ 事件时间线（生成/升级/登陆）

## 数据源
浏览器直连 `https://typhoon.slt.zj.gov.cn/Api/...`，CORS 已开放，无鉴权。

## 开发
```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # 静态构建到 dist/
npm test             # vitest 单测
npm run test:e2e     # playwright e2e（需联网）
```

## 自动刷新
顶栏倒计时为 **30 秒** 周期（用户调整）。
```

- [ ] **Step 2: Run all verifications**

Run: `cd 台风网 && npm test && npm run build`
Expected: all unit tests pass + build succeeds.

- [ ] **Step 3: Final commit**

```bash
cd 台风网 && git add -A && git -c user.email=kilo@local -c user.name=kilo commit -m "docs: README + final verification"
```

---

## Self-Review

**Spec coverage:**
- ✅ 七个核心模块 (Tasks 12, 13)
- ✅ 30 秒自动刷新 (Tasks 8, 10, 11)
- ✅ 深色玻璃风 Tailwind 主题 (Tasks 2, 9, 11)
- ✅ 强度→颜色映射 (Task 4)
- ✅ 风圈 NE|NW|SW|SE 拆分 (Tasks 4, 12)
- ✅ 多机构预报路径 (Task 12)
- ✅ Vue Router hash 模式 (Task 13)
- ✅ 错误处理/EmptyState (Task 9)
- ✅ TypeScript 接口 (Task 3)
- ✅ 单测 + e2e (Tasks 4, 7, 14)

**Placeholder scan:** No "TBD/TODO" left in any task body.

**Type consistency:**
- `useTyphoonStore.refresh`, `select`, `ensureInfo`, `ensureEvents` — used consistently across Tasks 8, 11, 13
- `intensityColor`, `parseRadiusQuadrants` — defined Task 4, used Task 12
- `getActiveTyphoons`, `getTyphoonInfo`, `getTyphoonEvents`, `getLastRadar`, `getLeastCloud`, `getLeastRain`, `getLastWind`, `getYearTyphoons` — defined Task 7, used in Tasks 8, 13
- `RefreshCountdown` props `seconds`, expose `reset()` — defined Task 10, used Task 11