from pptx import Presentation
from pptx.util import Inches, Pt

def add_slide(prs, layout, title, content):
    slide = prs.slides.add_slide(layout)
    if title:
        title_shape = slide.shapes.title
        title_shape.text = title
    if content and len(slide.placeholders) > 1:
        body_shape = slide.placeholders[1]
        tf = body_shape.text_frame
        for item in content:
            if isinstance(item, list):
                for subitem in item:
                    p = tf.add_paragraph()
                    p.text = subitem
                    p.level = 1
            else:
                p = tf.add_paragraph()
                p.text = item
                p.level = 0
    return slide

def create_presentation():
    prs = Presentation()
    
    # Slide 1: Title
    title_slide_layout = prs.slide_layouts[0]
    slide = prs.slides.add_slide(title_slide_layout)
    title = slide.shapes.title
    subtitle = slide.placeholders[1]
    title.text = "AI Explorer：互動式 AI 入門教學網站"
    subtitle.text = "專案期中/期末成果報告規劃\n\n基於 ReadMe.md 內容"

    # Slide 2: 專案定位與核心理念
    bullet_slide_layout = prs.slide_layouts[1]
    add_slide(prs, bullet_slide_layout, "1. 專案定位與核心理念", [
        "目標：讓「完全不懂 AI」的使用者也能逐步理解 AI 概念",
        "目標受眾：",
        ["同學、家人、非資訊背景的一般使用者"],
        "核心體驗：",
        ["點擊互動 + 短影片 + 可視化圖形 + 白話解釋", "「點 → 看 → 懂」（降低閱讀門檻）"],
        "呈現方式：以網站作為成果報告展示"
    ])

    # Slide 3: 網站整體架構 (Site Map)
    add_slide(prs, bullet_slide_layout, "2. 網站整體架構 (Site Map)", [
        "建議至少 4 大頁面：",
        "1. Home 首頁：引導使用者進入",
        "2. Learn 互動學習：主頁，可點擊可視化",
        "3. Cases 應用案例：生活化情境 (醫療/交通/娛樂...)",
        "4. Report 成果報告：期中/期末進度、技術架構、反思",
        "5. (可選) Glossary 名詞小字典：讓新手隨時查"
    ])

    # Slide 4: 主互動頁設計
    add_slide(prs, bullet_slide_layout, "3. 主互動頁設計：可點擊可視化", [
        "版面配置：",
        ["左側：可點擊可視化圖（例如：流程圖 / 圈圈圖 / 卡片）", "右側：解釋面板（影片 + 圖解 + 文字 + 小測驗）"],
        "主要可視化主題：AI Pipeline (流程圖)",
        ["資料蒐集 → 前處理 → 模型 → 訓練 → 評估 → 部署", "每個節點都能點擊並在右側切換內容"]
    ])

    # Slide 5: 「解釋面板」內容模板
    add_slide(prs, bullet_slide_layout, "4. 每個節點的「解釋面板」", [
        "點擊任一概念節點後，右側面板固定顯示 6 大元素：",
        "1. 一句話白話版（大標題）",
        "2. 30–60 秒短影片（YouTube / mp4）",
        "3. 可視化圖形（SVG / 圖片 / GIF / 簡易動畫）",
        "4. 生活例子（1–2 個）",
        "5. 常見誤解（1 句澄清）",
        "6. 小測驗（1 題，立即回饋）",
        "優點：新手每次看到的版型都一樣，學習負擔更低！"
    ])

    # Slide 6: 期中進度規劃
    add_slide(prs, bullet_slide_layout, "5. 期中進度規劃 (50%)", [
        "重點：可展示的「互動教材雛形」",
        "完成項目：",
        ["完成網站基本架構：Home / Learn / Cases / Report", "Learn 主互動頁：AI Pipeline 6 個節點「可點擊切換」", "每個節點至少具備：1句話白話解釋、1個影片、1張圖", "Report 頁 (期中版)：專案動機、目前完成進度、期末計畫"]
    ])

    # Slide 7: 期末進度規劃
    add_slide(prs, bullet_slide_layout, "6. 期末進度規劃 (50%)", [
        "重點：把互動與可視化「做完整、做得像產品」",
        "完成項目：",
        ["每個節點補齊面板：生活例子 + 常見誤解 + 小測驗", "加入「學習總測驗」(完成後給予等級/建議)", "Cases 頁面擴充：至少 3 個應用案例", "UI/UX 加強：手機版 RWD、點擊動畫、載入提示", "Report 頁 (期末版)：技術架構圖、測試結果與反思"]
    ])

    # Slide 8: 技術選型建議
    add_slide(prs, bullet_slide_layout, "7. 技術選型建議", [
        "路線 A：純前端（最穩、最適合期中）",
        ["HTML / CSS / JavaScript", "UI：Bootstrap 或 Tailwind", "部署：GitHub Pages"],
        "路線 B：前端 + 輕後端（期末加分）",
        ["加入後端：Flask 或 FastAPI", "可加功能：文字分類、簡單問答、互動小工具", "部署：Render 或 Railway"]
    ])

    # Slide 9: 驗收標準
    add_slide(prs, bullet_slide_layout, "8. 驗收標準與里程碑", [
        "驗收標準：",
        ["使用者不用懂 AI，也能「點擊學習」", "概念都有白話解釋、短影片、圖示、小測驗立即回饋", "網站適合當成果報告展示（可投影、可手機看）"],
        "核心里程碑：",
        ["W1-W3：架構建立、完成 Learn 頁雛形 (期中展示)", "W4-W6：內容補齊、增加測驗與案例", "W7-W8：擴充 Cases、UI優化、Report完整化 (期末展示)"]
    ])

    prs.save(r'd:\AIClass\ppt\AI_Explorer_Readme_Presentation.pptx')
    print("PPT generated successfully!")

if __name__ == '__main__':
    create_presentation()
