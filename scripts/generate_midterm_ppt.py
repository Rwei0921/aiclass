from pathlib import Path

from PIL import Image, ImageDraw
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_AUTO_SHAPE_TYPE
from pptx.enum.text import PP_ALIGN
from pptx.util import Inches, Pt


COLORS = {
    "bg": RGBColor(7, 18, 38),
    "bg_soft": RGBColor(13, 34, 61),
    "primary": RGBColor(50, 197, 255),
    "accent": RGBColor(121, 240, 198),
    "text": RGBColor(236, 244, 255),
    "muted": RGBColor(157, 179, 207),
}


def style_slide_background(slide, title_text):
    bg = slide.background.fill
    bg.solid()
    bg.fore_color.rgb = COLORS["bg"]

    top_band = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.RECTANGLE,
        Inches(0),
        Inches(0),
        Inches(13.33),
        Inches(0.55),
    )
    top_band.fill.solid()
    top_band.fill.fore_color.rgb = COLORS["bg_soft"]
    top_band.line.fill.background()

    accent = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.RECTANGLE,
        Inches(0),
        Inches(0.47),
        Inches(13.33),
        Inches(0.08),
    )
    accent.fill.solid()
    accent.fill.fore_color.rgb = COLORS["primary"]
    accent.line.fill.background()

    footer = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.RECTANGLE,
        Inches(0),
        Inches(7.35),
        Inches(13.33),
        Inches(0.15),
    )
    footer.fill.solid()
    footer.fill.fore_color.rgb = COLORS["bg_soft"]
    footer.line.fill.background()

    title_box = slide.shapes.add_textbox(Inches(0.55), Inches(0.08), Inches(8.8), Inches(0.35))
    title_tf = title_box.text_frame
    title_tf.clear()
    p = title_tf.paragraphs[0]
    p.text = title_text
    p.font.name = "Noto Sans TC"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = COLORS["primary"]

    tag_box = slide.shapes.add_textbox(Inches(10.2), Inches(0.08), Inches(2.6), Inches(0.3))
    tag_tf = tag_box.text_frame
    tag_tf.clear()
    p = tag_tf.paragraphs[0]
    p.text = "AI Explorer"
    p.alignment = PP_ALIGN.RIGHT
    p.font.name = "Space Grotesk"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = COLORS["muted"]


def set_shape_text_style(shape, size=22, bold=False, color=None, font_name="Noto Sans TC"):
    tf = shape.text_frame
    for paragraph in tf.paragraphs:
        for run in paragraph.runs:
            run.font.name = font_name
            run.font.size = Pt(size)
            run.font.bold = bold
            run.font.color.rgb = color or COLORS["text"]


def style_content_title(shape):
    tf = shape.text_frame
    for paragraph in tf.paragraphs:
        for run in paragraph.runs:
            run.font.name = "Space Grotesk"
            run.font.size = Pt(32)
            run.font.bold = True
            run.font.color.rgb = COLORS["text"]


def add_page_number(slide, page_text):
    box = slide.shapes.add_textbox(Inches(12.2), Inches(7.08), Inches(0.8), Inches(0.24))
    tf = box.text_frame
    tf.clear()
    p = tf.paragraphs[0]
    p.text = page_text
    p.alignment = PP_ALIGN.RIGHT
    p.font.name = "Space Grotesk"
    p.font.size = Pt(10)
    p.font.color.rgb = COLORS["muted"]


def add_card(slide, x, y, w, h, title, points):
    card = slide.shapes.add_shape(MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE, x, y, w, h)
    card.fill.solid()
    card.fill.fore_color.rgb = COLORS["bg_soft"]
    card.line.color.rgb = COLORS["primary"]
    card.line.width = Pt(1)

    title_box = slide.shapes.add_textbox(x + Inches(0.2), y + Inches(0.12), w - Inches(0.4), Inches(0.5))
    tt = title_box.text_frame
    tt.clear()
    p = tt.paragraphs[0]
    p.text = title
    p.font.name = "Noto Sans TC"
    p.font.size = Pt(21)
    p.font.bold = True
    p.font.color.rgb = COLORS["accent"]

    body = slide.shapes.add_textbox(x + Inches(0.2), y + Inches(0.72), w - Inches(0.35), h - Inches(0.85))
    bt = body.text_frame
    bt.clear()
    for i, point in enumerate(points):
        para = bt.paragraphs[0] if i == 0 else bt.add_paragraph()
        para.text = f"• {point}"
        para.level = 0
        para.font.name = "Noto Sans TC"
        para.font.size = Pt(17)
        para.font.color.rgb = COLORS["text"]


def ensure_visual_assets():
    asset_dir = Path("D:/AIClass/assets/images/ppt")
    asset_dir.mkdir(parents=True, exist_ok=True)

    specs = [
        ("map-overview.png", "互動地圖全覽", "時間軸 + 節點 + 右側面板", (16, 43, 77)),
        ("demo-turing.png", "圖靈測試節點", "NotebookLM 摘要 + 影片 + 來源", (20, 58, 93)),
        ("demo-transformer.png", "Transformer 節點", "模型架構與技術關聯展示", (24, 64, 102)),
        ("demo-chatgpt.png", "ChatGPT 節點", "應用突破與多模態趨勢", (18, 53, 88)),
    ]

    for filename, title, subtitle, bg in specs:
        path = asset_dir / filename
        if path.exists():
            continue

        img = Image.new("RGB", (1280, 720), bg)
        draw = ImageDraw.Draw(img)
        draw.rectangle((40, 40, 1240, 680), outline=(50, 197, 255), width=4)
        draw.rectangle((80, 90, 1200, 170), fill=(10, 25, 45))
        draw.rectangle((80, 210, 760, 640), fill=(13, 34, 61), outline=(121, 240, 198), width=3)
        draw.rectangle((790, 210, 1200, 640), fill=(9, 28, 50), outline=(50, 197, 255), width=3)
        draw.text((110, 110), title, fill=(236, 244, 255))
        draw.text((110, 150), subtitle, fill=(157, 179, 207))
        draw.text((115, 230), "AI Timeline Map", fill=(236, 244, 255))
        draw.text((810, 230), "Node Detail Panel", fill=(236, 244, 255))
        img.save(path)

    return {
        "overview": str(asset_dir / "map-overview.png"),
        "turing": str(asset_dir / "demo-turing.png"),
        "transformer": str(asset_dir / "demo-transformer.png"),
        "chatgpt": str(asset_dir / "demo-chatgpt.png"),
    }


def add_title_slide(prs, title, subtitle):
    slide = prs.slides.add_slide(prs.slide_layouts[0])
    style_slide_background(slide, title)
    slide.shapes.title.text = title
    slide.placeholders[1].text = subtitle
    style_content_title(slide.shapes.title)

    stf = slide.placeholders[1].text_frame
    for paragraph in stf.paragraphs:
        for run in paragraph.runs:
            run.font.name = "Noto Sans TC"
            run.font.size = Pt(22)
            run.font.color.rgb = COLORS["muted"]

    hero = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE,
        Inches(0.7),
        Inches(4.55),
        Inches(12.0),
        Inches(1.7),
    )
    hero.fill.solid()
    hero.fill.fore_color.rgb = COLORS["bg_soft"]
    hero.line.color.rgb = COLORS["primary"]
    hero.line.width = Pt(1.2)

    htf = hero.text_frame
    htf.clear()
    p = htf.paragraphs[0]
    p.text = "讓 AI 歷史變成可點擊、可理解、可驗證的學習地圖"
    p.font.name = "Noto Sans TC"
    p.font.size = Pt(26)
    p.font.bold = True
    p.font.color.rgb = COLORS["text"]
    p.alignment = PP_ALIGN.CENTER

    return slide


def add_bullets_slide(prs, title, bullets):
    slide = prs.slides.add_slide(prs.slide_layouts[1])
    style_slide_background(slide, title)
    slide.shapes.title.text = title
    style_content_title(slide.shapes.title)
    body = slide.shapes.placeholders[1].text_frame
    body.clear()

    panel = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE,
        Inches(0.75),
        Inches(1.7),
        Inches(11.9),
        Inches(4.95),
    )
    panel.fill.solid()
    panel.fill.fore_color.rgb = COLORS["bg_soft"]
    panel.line.color.rgb = COLORS["primary"]
    panel.line.width = Pt(1)

    body_box = slide.shapes.add_textbox(Inches(1.05), Inches(2.0), Inches(11.2), Inches(4.4))
    body = body_box.text_frame
    body.clear()

    for idx, item in enumerate(bullets):
        p = body.paragraphs[0] if idx == 0 else body.add_paragraph()
        p.text = f"• {item}"
        p.level = 0
        p.font.name = "Noto Sans TC"
        p.font.size = Pt(18)
        p.font.color.rgb = COLORS["text"]

    return slide


def add_image_bullets_slide(prs, title, image_path, bullets):
    slide = prs.slides.add_slide(prs.slide_layouts[5])
    style_slide_background(slide, title)
    slide.shapes.title.text = title
    style_content_title(slide.shapes.title)

    image_panel = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE,
        Inches(0.7), Inches(1.75), Inches(7.0), Inches(4.9)
    )
    image_panel.fill.solid()
    image_panel.fill.fore_color.rgb = COLORS["bg_soft"]
    image_panel.line.color.rgb = COLORS["primary"]
    image_panel.line.width = Pt(1)

    slide.shapes.add_picture(str(image_path), Inches(0.95), Inches(2.02), Inches(6.5), Inches(4.35))

    bullet_panel = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE,
        Inches(7.9), Inches(1.75), Inches(4.75), Inches(4.9)
    )
    bullet_panel.fill.solid()
    bullet_panel.fill.fore_color.rgb = COLORS["bg_soft"]
    bullet_panel.line.color.rgb = COLORS["accent"]
    bullet_panel.line.width = Pt(1)

    body_box = slide.shapes.add_textbox(Inches(8.2), Inches(2.05), Inches(4.2), Inches(4.35))
    body = body_box.text_frame
    body.clear()
    for idx, item in enumerate(bullets):
        p = body.paragraphs[0] if idx == 0 else body.add_paragraph()
        p.text = f"• {item}"
        p.level = 0
        p.font.name = "Noto Sans TC"
        p.font.size = Pt(16)
        p.font.color.rgb = COLORS["text"]

    return slide


def add_two_column_slide(prs, title, left_title, left_points, right_title, right_points):
    slide = prs.slides.add_slide(prs.slide_layouts[5])
    style_slide_background(slide, title)
    slide.shapes.title.text = title
    style_content_title(slide.shapes.title)

    left_card = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE,
        Inches(0.7), Inches(1.75), Inches(5.95), Inches(4.9)
    )
    left_card.fill.solid()
    left_card.fill.fore_color.rgb = COLORS["bg_soft"]
    left_card.line.color.rgb = COLORS["primary"]
    left_card.line.width = Pt(1)

    right_card = slide.shapes.add_shape(
        MSO_AUTO_SHAPE_TYPE.ROUNDED_RECTANGLE,
        Inches(6.72), Inches(1.75), Inches(5.95), Inches(4.9)
    )
    right_card.fill.solid()
    right_card.fill.fore_color.rgb = COLORS["bg_soft"]
    right_card.line.color.rgb = COLORS["accent"]
    right_card.line.width = Pt(1)

    left_box = slide.shapes.add_textbox(Inches(0.6), Inches(1.5), Inches(5.8), Inches(5.3))
    left_tf = left_box.text_frame
    left_tf.text = left_title
    left_tf.paragraphs[0].font.bold = True
    left_tf.paragraphs[0].font.name = "Noto Sans TC"
    left_tf.paragraphs[0].font.size = Pt(24)
    left_tf.paragraphs[0].font.color.rgb = COLORS["accent"]
    for point in left_points:
        p = left_tf.add_paragraph()
        p.text = f"• {point}"
        p.font.name = "Noto Sans TC"
        p.font.size = Pt(17)
        p.font.color.rgb = COLORS["text"]

    right_box = slide.shapes.add_textbox(Inches(6.8), Inches(1.5), Inches(5.8), Inches(5.3))
    right_tf = right_box.text_frame
    right_tf.text = right_title
    right_tf.paragraphs[0].font.bold = True
    right_tf.paragraphs[0].font.name = "Noto Sans TC"
    right_tf.paragraphs[0].font.size = Pt(24)
    right_tf.paragraphs[0].font.color.rgb = COLORS["accent"]
    for point in right_points:
        p = right_tf.add_paragraph()
        p.text = f"• {point}"
        p.font.name = "Noto Sans TC"
        p.font.size = Pt(17)
        p.font.color.rgb = COLORS["text"]

    return slide


def main():
    prs = Presentation()
    slides = []
    visuals = ensure_visual_assets()

    slides.append(add_title_slide(
        prs,
        "AI Explorer — 互動式 AI 地圖",
        "期中成果報告\n班級：__________  姓名：__________  日期：2026/03"
    ))

    slides.append(add_bullets_slide(prs, "目錄", [
        "1. 問題與解決方案",
        "2. 網站架構與地圖設計",
        "3. 節點 Demo 與技術選型",
        "4. 期中完成項目與期末規劃",
        "5. 反思與 Q&A",
    ]))

    slides.append(add_two_column_slide(
        prs,
        "問題：AI 很難懂？",
        "痛點",
        ["概念抽象、術語多", "缺乏歷史脈絡", "一般使用者難以快速入門"],
        "需要的體驗",
        ["可視化呈現演進", "點擊式互動學習", "白話解釋 + 真實來源"],
    ))

    slides.append(add_bullets_slide(prs, "解決方案：AI 地圖", [
        "核心概念：把 AI 發展做成可點擊科技樹",
        "學習流程：點節點 -> 看摘要 -> 看影片 -> 查來源 -> 做測驗",
        "目標：讓非資訊背景也能建立完整脈絡",
    ]))

    slides.append(add_bullets_slide(prs, "目標受眾", [
        "完全不懂 AI 的一般使用者（同學、家人、非資訊背景）",
        "需要快速理解 AI 發展脈絡的報告觀眾",
        "想用互動方式學習而非只看長文的人",
    ]))

    slides.append(add_bullets_slide(prs, "網站架構（Site Map）", [
        "Home：專案入口與 CTA",
        "Map：互動 AI 地圖核心頁（左地圖右面板）",
        "Topics：22 節點主題索引",
        "About：專案與資料來源說明",
    ]))

    slides.append(add_bullets_slide(prs, "AI 地圖設計概念", [
        "橫軸：時間（1950 -> 2023）",
        "縱向：技術類別（理論、模型、訓練、突破、寒冬）",
        "節點連線：表示技術影響關係",
        "互動：點擊、縮放、拖曳、年代篩選",
    ]))

    slides.append(add_image_bullets_slide(prs, "地圖截圖全覽", visuals["overview"], [
        "左側 65%：SVG 互動地圖",
        "右側 35%：節點詳情面板",
        "上方：年代篩選（1950s -> 2020s+）",
        "面板內容：摘要、影片、來源、測驗",
    ]))

    slides.append(add_image_bullets_slide(prs, "節點 Demo 1 — 圖靈測試", visuals["turing"], [
        "年份：1950，類別：理論基礎",
        "已接 NotebookLM 摘要與來源連結",
        "本地 mp4 影片可直接在面板播放",
        "小測驗可即時回饋答案",
    ]))

    slides.append(add_image_bullets_slide(prs, "節點 Demo 2 — Transformer", visuals["transformer"], [
        "年份：2017，類別：模型架構",
        "定位：大型語言模型的核心架構",
        "可展示與 BERT / GPT-3 的技術關聯",
        "規劃補齊 NotebookLM 摘要與影片",
    ]))

    slides.append(add_image_bullets_slide(prs, "節點 Demo 3 — ChatGPT", visuals["chatgpt"], [
        "年份：2022，類別：應用突破",
        "重點：AI 大眾化的重要里程碑",
        "可結合來源出處做可查證展示",
        "與 Multimodal 節點串接未來趨勢",
    ]))

    slides.append(add_two_column_slide(
        prs,
        "技術選型",
        "前端與部署",
        ["HTML / CSS / JavaScript", "SVG 地圖互動", "GitHub Pages 靜態部署"],
        "內容系統",
        ["NotebookLM 作為內容後台", "匯出 JSON 半自動同步", "節點結構與內容層分離"],
    ))

    slides.append(add_bullets_slide(prs, "期中完成清單", [
        "完成四頁網站：Home / Map / Topics / About",
        "完成 22 節點資料與地圖互動邏輯",
        "完成年代篩選、縮放拖曳、測驗互動",
        "完成 NotebookLM 內容層整合架構",
    ]))

    slides.append(add_bullets_slide(prs, "期末計畫", [
        "補齊 22 節點 NotebookLM 摘要 / 影片 / 來源",
        "完成 RWD 細節與手機互動優化",
        "加入搜尋與學習路徑導覽功能",
        "進行使用者測試與修正迭代",
    ]))

    slides.append(add_bullets_slide(prs, "反思與挑戰", [
        "如何在白話與準確性間取得平衡",
        "如何維持多來源內容的一致更新",
        "如何提升地圖互動流暢度與可讀性",
        "下一步：建立固定同步與檢查流程",
    ]))

    slides.append(add_bullets_slide(prs, "Q&A", [
        "感謝聆聽",
        "歡迎提問與建議",
        "AI Explorer 將持續迭代為更完整的學習平台",
    ]))

    for idx, slide in enumerate(prs.slides, start=1):
        add_page_number(slide, str(idx))

    output = Path("D:/AIClass/ppt/midterm_report.pptx")
    output.parent.mkdir(parents=True, exist_ok=True)
    prs.save(output)
    print(f"Generated: {output}")


if __name__ == "__main__":
    main()
