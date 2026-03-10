# AI Explorer

互動式 AI 歷史學習網站，主軸是用地圖與節點探索 AI 從 1950 到近年的重要發展。

## 專案定位

- 對象：AI 初學者、課堂展示觀眾、非資訊背景使用者
- 目標：用「點節點 -> 看解釋 -> 做小測驗」的方式快速理解 AI 發展脈絡
- 目前版本：以期中展示內容為主，先聚焦在歷史地圖互動體驗
- 期末內容：暫不納入本 README，後續再補充

## 目前網站頁面

1. `index.html`：首頁，說明網站主題與入口
2. `map.html`：互動 AI 地圖，為核心展示頁
3. `topics.html`：主題索引，快速瀏覽全部節點
4. `about.html`：專案簡介與技術說明

## 目前完成內容

- 建立 AI 歷史互動地圖
- 整理 22 個 AI 重要節點
- 節點提供白話說明、英文名稱、類別、常見誤解與小測驗
- 支援年代篩選、節點點擊切換、地圖拖曳與縮放
- 可載入 NotebookLM 匯出的補充內容

## 技術組成

- 前端：HTML / CSS / JavaScript
- 視覺：SVG 地圖互動
- 資料：`js/data.js`
- 補充內容：`data/notebooklm-export.json`

## 專案結構

```text
AIClass/
|- index.html
|- map.html
|- topics.html
|- about.html
|- css/
|  |- style.css
|  |- map.css
|- js/
|  |- data.js
|  |- main.js
|  |- map.js
|- data/
|  |- notebooklm-export.json
|- assets/
```

## 核心互動

- 依年代篩選節點
- 點擊節點查看說明面板
- 顯示影片、摘要、來源與小測驗
- 以節點連線呈現技術演進關係

## 備註

- 此版本先以期中成果展示為主
- 期末延伸內容之後再另外整理與補充
