---
marp: true
theme: default
class: invert
paginate: true
header: "**AI Explorer** - 期中成果報告"
footer: "AIClass Midterm | 2026/03/29"
style: |
  section {
    font-family: '微軟正黑體', 'Inter', sans-serif;
    background: linear-gradient(135deg, #1e1e1e 0%, #121212 100%);
  }
  h1 {
    color: #4ade80;
    font-size: 3em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
  h2 {
    color: #86efac;
    border-bottom: 2px solid #4ade80;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
  h3 {
    color: #e2e8f0;
  }
  li {
    line-height: 1.8;
  }
  .highlight {
    color: #fca5a5;
    font-weight: bold;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  blockquote {
    border-left: 5px solid #4ade80;
    background: rgba(74, 222, 128, 0.1);
    padding: 10px 20px;
    border-radius: 4px;
    font-style: normal;
  }
---

<!-- backgroundColor: #000000 -->
<!-- _class: lead -->

# AI Explorer
### 互動式 AI 歷史學習網站
**期中成果報告**

> 專案主軸：用互動地圖降低 AI 學習門檻

---

## 1. 專案動機與解法

**問題：**
- AI 術語抽象，初學者容易卡關
- 單看文章難建立歷史脈絡
- 課堂展示缺乏互動體驗

**解法：**
- 以地圖節點呈現 1950–2026 AI 演進
- 每節點提供白話摘要、影片、來源、小測驗
- 支援年代篩選、點擊互動、拖曳縮放

---

## 2. 專案現況量化分析

- 網站頁面：`4` 頁（Home / Map / Topics / About）
- 核心程式碼：約 `2200` 行（HTML / CSS / JS）
- 節點總數：`33`（時間範圍 `1950–2026`）
- 類別數：`5`（理論、模型、訓練、突破、寒冬）
- 含影片節點：`25/33`
- NotebookLM 已同步：`1/33`（約 `3%`）

---

## 3. 網站架構與資料流

- `index.html`：專案入口與 CTA
- `map.html`：互動地圖核心頁（左圖右面板）
- `topics.html`：全部節點索引清單
- `about.html`：專案說明與技術資訊

**資料流：**
- `js/data.js`：33 節點主資料源
- `data/notebooklm-export.json`：內容覆蓋層
- `js/map.js`：地圖渲染、互動與面板更新

---

## 4. 核心功能驗證（Map）

- 年代篩選：全部 / 1950s / 1960-80s / 1990-2000s / 2010s / 2020s+
- 節點互動：點擊節點即時更新右側內容
- 操作體驗：滑鼠滾輪縮放 + 拖曳平移
- 面板內容：摘要、影片、來源、誤解釐清、小測驗
- 回退機制：NotebookLM 無資料時，顯示預設節點內容

---

## 5. 節點分佈分析（33 Nodes）

**按類別：**
- 應用突破：`14`
- 模型架構：`13`
- 理論基礎：`2`
- 訓練方法：`2`
- AI 寒冬：`2`

**按年代：**
- 1950s：`2`
- 1960–1989：`5`
- 1990–2009：`4`
- 2010–2019：`7`
- 2020–2026：`15`

---

## 6. 期中完成項目

- 完成四頁網站框架與導覽流程
- 完成 `js/data.js` 節點資料與連線欄位
- 完成 `map.js` 互動渲染邏輯（篩選、縮放、拖曳、點擊）
- 完成主題索引頁與關於頁串接
- 完成 NotebookLM 內容覆蓋架構（已驗證可載入）

---

## 7. 目前問題與風險

- 口徑不一致：文件中同時出現 `22 / 25 / 33` 節點數字
- NotebookLM 覆蓋率低（目前僅 `1/33`）
- 2025–2026 部分節點屬趨勢推估，需加註說明
- `task.md` 仍有瀏覽器/RWD 驗收待完成

> 先統一資料口徑，再補內容與測試證據

---

## 8. 期末規劃（3 階段）

1. **資料校正**
   統一全站節點數為 `33`，修正 README / 頁面 / task 文件
2. **內容補強**
   補齊 33 節點 NotebookLM 摘要、影片、來源
3. **體驗優化**
   強化手機版操作、進行使用者測試、修正可讀性與效能

---

## 9. Demo 操作流程

1. 從首頁進入 `map.html`
2. 切換年代篩選（例：2010s、2020s+）
3. 點擊節點查看摘要、影片、來源與小測驗
4. 拖曳/縮放地圖觀察技術演進關係
5. 在 `topics.html` 進行全節點瀏覽

---

<!-- _class: lead -->
<!-- _footer: "" -->

# Q & A
## 感謝聆聽
AI Explorer 期中版本已完成互動學習雛形，期末將聚焦內容完整度與資料一致性。
