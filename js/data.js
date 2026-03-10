/**
 * AI Explorer — 節點資料庫
 * 包含 33 個 AI 歷史關鍵節點的完整資料（含 Google / DeepMind 2024–2026 突破）
 */

const AI_NODES = [
  {
    id: "turing-test",
    year: 1950,
    name: "圖靈測試",
    nameEn: "Turing Test",
    category: "theory",
    tagline: "機器能思考嗎？",
    description: "英國數學家艾倫·圖靈提出：若機器的對話讓人無法判斷是人還是機器，便可視為具有「智能」。這是 AI 研究最早的評估框架。",
    youtubeId: "3wLqAB2LGIM",
    figure: "艾倫·圖靈（Alan Turing，1912–1954）",
    applications: ["早期聊天機器人 ELIZA", "現代 AI 聊天評估標準"],
    misconception: "通過圖靈測試不代表機器有「意識」，只代表能模仿人類對話。",
    quiz: {
      question: "圖靈測試的核心判斷標準是什麼？",
      options: [
        "A. 機器運算速度夠快",
        "B. 人類無法分辨對話對象是人還是機器",
        "C. 機器能記住超過一百萬筆資料"
      ],
      answer: 1,
      explanation: "圖靈測試重點在於「模仿能力」而非速度或記憶，能騙過人類才算通過。"
    },
    connections: ["perceptron", "lisp"],
    position: { x: 120, y: 250 }
  },
  {
    id: "perceptron",
    year: 1958,
    name: "感知機",
    nameEn: "Perceptron",
    category: "model",
    tagline: "最早的人工神經元",
    description: "Frank Rosenblatt 設計的感知機是最早能「學習」的機器，模仿大腦神經元，輸入數值 → 加權計算 → 輸出判斷。是現代神經網路的始祖。",
    youtubeId: "aircAruvnKk",
    figure: "Frank Rosenblatt（1928–1971）",
    applications: ["早期文字辨識", "二元分類問題"],
    misconception: "感知機只能解決「線性可分」問題，XOR 問題無法解決，是其最大限制。",
    quiz: {
      question: "感知機模仿的是什麼？",
      options: [
        "A. 人類大腦的神經元",
        "B. 電腦的 CPU 結構",
        "C. 資料庫的搜尋演算法"
      ],
      answer: 0,
      explanation: "感知機的設計靈感來自生物神經元：接收輸入訊號，加權後決定是否「激發」輸出。"
    },
    connections: ["backprop", "deep-belief"],
    position: { x: 220, y: 150 }
  },
  {
    id: "lisp",
    year: 1960,
    name: "LISP 語言",
    nameEn: "LISP",
    category: "theory",
    tagline: "AI 研究的第一個程式語言",
    description: "John McCarthy 設計的 LISP 是最早專為 AI 研究打造的程式語言，支援符號運算與遞迴，讓研究者能表達複雜邏輯推理。",
    youtubeId: "HM1WsaM-2bI",
    figure: "John McCarthy（1927–2011），「AI」一詞發明者",
    applications: ["早期 AI 研究程式", "專家系統開發"],
    misconception: "LISP 不是唯一的 AI 語言，現代 AI 大多用 Python，但 LISP 奠定了函數式程式設計基礎。",
    quiz: {
      question: "LISP 語言的特色是什麼？",
      options: [
        "A. 適合做網頁開發",
        "B. 支援符號運算，適合 AI 邏輯推理",
        "C. 是最快的高效能語言"
      ],
      answer: 1,
      explanation: "LISP 設計之初就是為了處理符號邏輯和遞迴，是 AI 研究早期的主流工具。"
    },
    connections: ["expert-systems"],
    position: { x: 240, y: 350 }
  },
  {
    id: "ai-winter-1",
    year: 1974,
    name: "第一次 AI 寒冬",
    nameEn: "First AI Winter",
    category: "winter",
    tagline: "過度承諾，資金斷裂",
    description: "1970 年代初期，AI 研究無法兌現早期的誇大承諾（如機器翻譯品質極差），政府與企業大幅削減研究資金，AI 進入第一次低潮期。",
    youtubeId: "vcH0HsT7ePc",
    figure: "Lighthill Report（1973）：英國政府對 AI 研究的負面評估報告",
    applications: [],
    misconception: "AI 寒冬不代表「AI 已死」，研究仍在進行，只是資金和熱度大幅下降。",
    quiz: {
      question: "AI 寒冬的主要原因是什麼？",
      options: [
        "A. 電腦速度太慢無法執行",
        "B. AI 無法兌現早期誇大的承諾，資金被撤回",
        "C. 研究人員全部轉行"
      ],
      answer: 1,
      explanation: "技術未達預期 + 過度宣傳 = 失去資助。這個教訓對現代 AI 炒作同樣重要。"
    },
    connections: ["expert-systems"],
    position: { x: 340, y: 420 }
  },
  {
    id: "expert-systems",
    year: 1980,
    name: "專家系統",
    nameEn: "Expert Systems",
    category: "breakthrough",
    tagline: "把專家知識裝進電腦",
    description: "將領域專家的知識編碼為「如果…則…」規則，讓電腦模擬專家決策。代表作 MYCIN 能診斷細菌感染，準確率媲美醫生。",
    youtubeId: "pL3Oo44FhMU",
    figure: "Edward Feigenbaum，MYCIN 系統開發者",
    applications: ["醫療診斷系統 MYCIN", "金融信用評估", "工廠故障診斷"],
    misconception: "專家系統的規則需要人工編寫，無法自行學習，遇到規則外情況就會失敗。",
    quiz: {
      question: "專家系統的知識從哪裡來？",
      options: [
        "A. 從大量資料中自動學習",
        "B. 由人工編寫的「如果…則…」規則",
        "C. 從網路即時搜尋"
      ],
      answer: 1,
      explanation: "早期專家系統依賴人工編碼知識，這也是它的最大限制——不能自動學習新知識。"
    },
    connections: ["ai-winter-2", "backprop"],
    position: { x: 420, y: 300 }
  },
  {
    id: "backprop",
    year: 1986,
    name: "倒傳遞演算法",
    nameEn: "Backpropagation",
    category: "training",
    tagline: "讓神經網路真正能學習",
    description: "Rumelhart 等人推廣的倒傳遞演算法，讓多層神經網路能夠有效計算梯度並更新權重，解決了感知機無法學習複雜問題的限制。",
    youtubeId: "Ilg3gGewQ5U",
    figure: "Geoffrey Hinton、David Rumelhart、Ronald Williams（1986 年論文）",
    applications: ["語音辨識", "影像分類", "幾乎所有現代深度學習"],
    misconception: "倒傳遞早在 1970 年代就被發現，但直到 1986 年才被廣泛應用於神經網路。",
    quiz: {
      question: "倒傳遞演算法的作用是什麼？",
      options: [
        "A. 讓資料從輸出層傳回輸入層以更新模型",
        "B. 把模型從雲端下載到本機",
        "C. 反轉資料的順序"
      ],
      answer: 0,
      explanation: "倒傳遞計算每個權重對「錯誤」的貢獻程度，讓網路知道要怎麼調整才能更準確。"
    },
    connections: ["ai-winter-2", "deep-belief", "svm"],
    position: { x: 470, y: 150 }
  },
  {
    id: "ai-winter-2",
    year: 1987,
    name: "第二次 AI 寒冬",
    nameEn: "Second AI Winter",
    category: "winter",
    tagline: "專家系統泡沫破裂",
    description: "1980 年代末，專家系統維護成本過高、無法應對現實複雜性，商用 AI 公司大量倒閉，美日政府 AI 計畫相繼失敗，業界信心崩潰。",
    youtubeId: "vcH0HsT7ePc",
    figure: "DARPA AI 計畫大幅縮編（1987）",
    applications: [],
    misconception: "寒冬期間仍有重要研究在進行，如倒傳遞演算法的推廣和 SVM 的研究。",
    quiz: {
      question: "第二次 AI 寒冬的直接導火線是什麼？",
      options: [
        "A. 電腦病毒攻擊 AI 系統",
        "B. 專家系統過於昂貴且難以維護，商業 AI 公司紛紛失敗",
        "C. 研究發現 AI 在理論上不可能實現"
      ],
      answer: 1,
      explanation: "過度商業化 + 技術限制 = 第二次泡沫破裂，資金撤退，研究停滯。"
    },
    connections: ["svm"],
    position: { x: 530, y: 420 }
  },
  {
    id: "svm",
    year: 1995,
    name: "支持向量機",
    nameEn: "Support Vector Machine",
    category: "model",
    tagline: "找到最完美的分隔線",
    description: "SVM 尋找能讓不同類別資料「邊界間距最大」的超平面，結合 Kernel Trick 後能處理非線性問題，在深度學習興起前是分類任務的王者。",
    youtubeId: "efR1C6CvhmE",
    figure: "Vapnik & Cortes（1995 年論文）",
    applications: ["文字分類（垃圾郵件）", "圖像分類", "生物資訊學"],
    misconception: "SVM 在小資料集上仍很有效，但大資料集和複雜圖像任務上已被深度學習超越。",
    quiz: {
      question: "SVM 的核心目標是什麼？",
      options: [
        "A. 讓模型盡量複雜以記住所有資料",
        "B. 找到讓不同類別間距最大的分隔超平面",
        "C. 隨機猜測並選最好的結果"
      ],
      answer: 1,
      explanation: "最大化邊界（margin）是 SVM 的核心，這讓它對新資料有更好的泛化能力。"
    },
    connections: ["random-forest", "deep-belief"],
    position: { x: 600, y: 200 }
  },
  {
    id: "deep-blue",
    year: 1997,
    name: "Deep Blue 下棋",
    nameEn: "Deep Blue",
    category: "breakthrough",
    tagline: "機器首次擊敗西洋棋世界冠軍",
    description: "IBM 開發的 Deep Blue 在 1997 年以 3.5:2.5 擊敗世界棋王卡斯帕羅夫，成為 AI 史上的重要里程碑，震驚全世界。",
    youtubeId: "KF6sLCeBj0s",
    figure: "IBM Deep Blue 團隊，對手：Garry Kasparov",
    applications: ["棋類 AI", "決策樹搜尋算法", "啟發了後來的 AlphaGo 研究"],
    misconception: "Deep Blue 使用暴力窮舉搜尋，而非「真正理解棋局」，和 AlphaGo 的深度學習方法完全不同。",
    quiz: {
      question: "Deep Blue 主要用什麼方法下棋？",
      options: [
        "A. 深度學習和神經網路",
        "B. 大量搜尋所有可能棋步並評估",
        "C. 讀取棋譜資料庫直接抄棋"
      ],
      answer: 1,
      explanation: "Deep Blue 每秒評估 2 億個棋局，是純粹的暴力運算，而非「智能」學習。"
    },
    connections: ["random-forest", "alphago"],
    position: { x: 650, y: 350 }
  },
  {
    id: "random-forest",
    year: 2001,
    name: "隨機森林",
    nameEn: "Random Forest",
    category: "model",
    tagline: "集體智慧——很多棵樹比一棵好",
    description: "隨機森林結合大量決策樹的預測結果（投票），利用「集成學習」原理大幅提升準確率，是傳統機器學習中最強大的演算法之一。",
    youtubeId: "J4Wdy0Wc_xQ",
    figure: "Leo Breiman（2001 年論文）",
    applications: ["金融風險評估", "醫療診斷輔助", "網路廣告點擊預測"],
    misconception: "隨機森林雖然準確，但「可解釋性」差，很難解釋為什麼得到這個結果。",
    quiz: {
      question: "隨機森林的「森林」指的是什麼？",
      options: [
        "A. 電腦伺服器的機房",
        "B. 許多棵決策樹組合在一起投票",
        "C. 大量隨機產生的資料"
      ],
      answer: 1,
      explanation: "隨機森林 = 很多棵決策樹，各自獨立預測後「多數決」，減少錯誤率。"
    },
    connections: ["deep-belief"],
    position: { x: 720, y: 250 }
  },
  {
    id: "deep-belief",
    year: 2006,
    name: "深度信念網路",
    nameEn: "Deep Belief Network",
    category: "model",
    tagline: "深度學習的黎明",
    description: "Geoffrey Hinton 提出的深度信念網路，展示了多層神經網路可以用「逐層預訓練」的方式有效訓練，重燃學界對深度學習的興趣。",
    youtubeId: "FwFduRA_L6Q",
    figure: "Geoffrey Hinton（多倫多大學，現被譽為「深度學習之父」之一）",
    applications: ["語音辨識預訓練", "影像特徵提取"],
    misconception: "深度學習不是新發明，而是神經網路在算力提升後的「復活」。",
    quiz: {
      question: "Hinton 的深度信念網路的最大貢獻是什麼？",
      options: [
        "A. 發明了新的電腦硬體",
        "B. 證明多層神經網路可以被有效訓練",
        "C. 開發了第一個聊天機器人"
      ],
      answer: 1,
      explanation: "2006 年前大家認為深層網路太難訓練，Hinton 用逐層預訓練突破了這個瓶頸。"
    },
    connections: ["alexnet", "lstm"],
    position: { x: 800, y: 150 }
  },
  {
    id: "alexnet",
    year: 2012,
    name: "AlexNet",
    nameEn: "AlexNet",
    category: "breakthrough",
    tagline: "深度學習改寫電腦視覺",
    description: "AlexNet 在 2012 年 ImageNet 競賽以壓倒性差距（錯誤率 15.3% vs 第二名 26.2%）奪冠，證明 GPU + 大資料 + 深度卷積網路的威力。",
    youtubeId: "UZDiGooFs54",
    figure: "Alex Krizhevsky、Ilya Sutskever、Geoffrey Hinton（多倫多大學）",
    applications: ["圖像分類", "人臉辨識", "醫療影像分析"],
    misconception: "AlexNet 不是第一個卷積神經網路，但它的規模和 GPU 應用讓深度學習正式成為主流。",
    quiz: {
      question: "AlexNet 的突破為什麼重要？",
      options: [
        "A. 它是第一個能說話的 AI",
        "B. 它在圖像辨識競賽中遠超其他方法，證明深度學習的實力",
        "C. 它可以在零資料的情況下學習"
      ],
      answer: 1,
      explanation: "AlexNet 的成功讓整個 AI 研究界從傳統機器學習轉向深度學習。"
    },
    connections: ["word2vec", "gan"],
    position: { x: 880, y: 200 }
  },
  {
    id: "word2vec",
    year: 2013,
    name: "Word2Vec",
    nameEn: "Word2Vec",
    category: "training",
    tagline: "把文字變成數字向量",
    description: "Google 提出的 Word2Vec 能將文字轉換為高維向量，讓「國王 − 男人 + 女人 = 女王」這樣的語意計算成為可能，奠定了 NLP 的基礎。",
    youtubeId: "LSS_bos_ga8",
    figure: "Tomáš Mikolov 等（Google 研究院，2013）",
    applications: ["語意搜尋", "機器翻譯", "文章推薦系統"],
    misconception: "Word2Vec 的向量不是人工定義的，而是神經網路自己從大量文字中學到的。",
    quiz: {
      question: "Word2Vec 的核心功能是什麼？",
      options: [
        "A. 把文字翻譯成其他語言",
        "B. 將文字轉換為能捕捉語意的數字向量",
        "C. 自動修正錯別字"
      ],
      answer: 1,
      explanation: "向量化讓電腦能做語意運算，「國王 − 男人 + 女人 ≈ 女王」就是最著名的例子。"
    },
    connections: ["bert", "transformer"],
    position: { x: 930, y: 100 }
  },
  {
    id: "gan",
    year: 2014,
    name: "GAN 生成對抗網路",
    nameEn: "Generative Adversarial Network",
    category: "model",
    tagline: "生成器 vs 判別器的博弈",
    description: "Ian Goodfellow 提出的 GAN 讓兩個神經網路互相對抗：生成器偽造資料，判別器辨別真偽，雙方不斷進步，最終能生成極逼真的圖像。",
    youtubeId: "TpMIssRdhco",
    figure: "Ian Goodfellow（現 Apple，2014 年提出 GAN）",
    applications: ["AI 繪圖", "人臉生成 DeepFake", "資料增強"],
    misconception: "GAN 訓練非常不穩定，很容易出現「模式崩潰」，需要豐富技巧才能訓練好。",
    quiz: {
      question: "GAN 中的「對抗」指的是什麼？",
      options: [
        "A. AI 和人類的競爭",
        "B. 生成器和判別器兩個網路互相競爭改進",
        "C. 不同資料集之間的競爭"
      ],
      answer: 1,
      explanation: "生成器想以假亂真，判別器想揭穿假貨，雙方競爭讓生成品質越來越高。"
    },
    connections: ["diffusion"],
    position: { x: 960, y: 320 }
  },
  {
    id: "lstm",
    year: 2015,
    name: "LSTM / RNN",
    nameEn: "Long Short-Term Memory",
    category: "model",
    tagline: "讓機器有記憶",
    description: "LSTM 解決了 RNN 的「長期記憶消失」問題，透過門控機制選擇記什麼、忘什麼，讓序列模型能處理長文字和時間序列，是 Transformer 前的 NLP 主力。",
    youtubeId: "8HyCNIVRbSU",
    figure: "Sepp Hochreiter & Jürgen Schmidhuber（1997 年論文，2015 年廣泛應用）",
    applications: ["機器翻譯", "語音辨識", "股價預測"],
    misconception: "LSTM 雖然能記憶，但序列太長時仍會有性能下降，Transformer 後來取代了它。",
    quiz: {
      question: "LSTM 解決了什麼問題？",
      options: [
        "A. 讓電腦能處理圖像",
        "B. 讓序列模型能記住較早之前的資訊",
        "C. 讓訓練速度變快一百倍"
      ],
      answer: 1,
      explanation: "普通 RNN 訓練時梯度會消失，LSTM 的記憶門讓它能記住重要的「舊資訊」。"
    },
    connections: ["transformer"],
    position: { x: 970, y: 210 }
  },
  {
    id: "alphago",
    year: 2016,
    name: "AlphaGo",
    nameEn: "AlphaGo",
    category: "breakthrough",
    tagline: "AI 征服最複雜的棋盤遊戲",
    description: "DeepMind 的 AlphaGo 結合深度學習與強化學習，在 2016 年以 4:1 擊敗圍棋世界冠軍李世乭，被認為比預期提早十年達成。",
    youtubeId: "WXuK6gekU1Y",
    figure: "DeepMind 團隊，對手：李世乭（韓國圍棋九段）",
    applications: ["棋類 AI", "強化學習應用", "AlphaFold 蛋白質結構預測"],
    misconception: "AlphaGo 和 Deep Blue 完全不同，它透過「自我對弈」學習，而非靠搜尋和人工規則。",
    quiz: {
      question: "AlphaGo 和 Deep Blue 最大的差異是什麼？",
      options: [
        "A. AlphaGo 的電腦更快",
        "B. AlphaGo 用深度學習自我對弈學習，不依賴人工規則",
        "C. AlphaGo 只能在網路上對弈"
      ],
      answer: 1,
      explanation: "AlphaGo 透過強化學習「自己和自己下棋進步」，這是 AI 的革命性突破。"
    },
    connections: ["chatgpt", "gpt3"],
    position: { x: 1020, y: 380 }
  },
  {
    id: "transformer",
    year: 2017,
    name: "Transformer 架構",
    nameEn: "Transformer",
    category: "model",
    tagline: "現代 AI 的基礎建築",
    description: "Google 論文「Attention Is All You Need」提出 Transformer，利用自注意力機制（Self-Attention）平行處理序列，完全取代 RNN，成為 BERT、GPT 等所有大語言模型的基礎。",
    youtubeId: "4Bdc55j80l8",
    figure: "Vaswani 等 8 位 Google Brain 研究員（2017 年論文）",
    applications: ["所有大語言模型（GPT、BERT）", "AI 翻譯", "圖像生成"],
    misconception: "Transformer 不只用在語言，也被應用在圖像（Vision Transformer）、音樂、蛋白質等領域。",
    quiz: {
      question: "Transformer 的核心創新是什麼？",
      options: [
        "A. 使用更多層的 RNN",
        "B. 自注意力機制，讓模型平行處理所有位置的關係",
        "C. 把資料存在雲端"
      ],
      answer: 1,
      explanation: "Self-Attention 讓每個詞能同時「關注」所有其他詞，比 RNN 的逐步處理快也準。"
    },
    connections: ["bert", "gpt3"],
    position: { x: 1060, y: 150 }
  },
  {
    id: "bert",
    year: 2018,
    name: "BERT",
    nameEn: "BERT",
    category: "model",
    tagline: "雙向理解語言的突破",
    description: "Google 的 BERT（Bidirectional Encoder Representations from Transformers）透過同時考慮文字的左右兩側語境，大幅提升 NLP 任務的理解能力。",
    youtubeId: "xI0HHN5XKDo",
    figure: "Jacob Devlin 等（Google AI Research，2018）",
    applications: ["Google 搜尋排名", "問答系統", "文章分類"],
    misconception: "BERT 是「編碼器」模型，擅長理解，而 GPT 是「解碼器」模型，擅長生成，兩者用途不同。",
    quiz: {
      question: "BERT 的「雙向」指的是什麼？",
      options: [
        "A. 能同時用中文和英文",
        "B. 分析文字時同時考慮左邊和右邊的上下文",
        "C. 能讀取正向和反向的資料庫"
      ],
      answer: 1,
      explanation: "傳統模型只從左讀到右，BERT 同時看兩邊上下文，讓語意理解更準確。"
    },
    connections: ["gpt3"],
    position: { x: 1120, y: 100 }
  },
  {
    id: "gpt3",
    year: 2020,
    name: "GPT-3",
    nameEn: "GPT-3",
    category: "breakthrough",
    tagline: "語言的量變引發質變",
    description: "OpenAI 的 GPT-3 擁有 1750 億個參數，展示了「規模化」的驚人威力：無需微調就能寫文章、寫程式、做翻譯，讓世界意識到大型語言模型的潛力。",
    youtubeId: "SY5PvZrJhLE",
    figure: "OpenAI 研究團隊（2020）",
    applications: ["文章撰寫", "程式碼生成（GitHub Copilot）", "客服自動化"],
    misconception: "GPT-3 不「理解」語言，它是超強的「統計預測機」，但效果好得讓人誤以為它懂。",
    quiz: {
      question: "GPT-3 最驚人的能力是什麼？",
      options: [
        "A. 不用任何範例就能完成各種語言任務",
        "B. 計算速度比以前快一億倍",
        "C. 能連結到真實網路即時搜尋"
      ],
      answer: 0,
      explanation: "「Few-shot learning」讓 GPT-3 只需要幾個例子甚至零例子，就能完成新任務——這是巨大突破。"
    },
    connections: ["chatgpt"],
    position: { x: 1170, y: 200 }
  },
  {
    id: "diffusion",
    year: 2021,
    name: "Diffusion Model",
    nameEn: "Diffusion Model",
    category: "model",
    tagline: "從雜訊中還原藝術",
    description: "擴散模型透過「逐步加雜訊再學習去雜訊」的方式，能生成高品質圖像、影片。Stable Diffusion、DALL-E 2 等 AI 繪圖工具都基於此技術。",
    youtubeId: "fbLgFrlTnGU",
    figure: "Jonathan Ho 等（DeepMind / OpenAI，2020–2021）",
    applications: ["Stable Diffusion", "DALL-E 2", "Midjourney", "AI 影片生成"],
    misconception: "Diffusion Model 不是「複製」圖片，而是從訓練資料中學習「什麼樣的像素分布是真實的」。",
    quiz: {
      question: "Diffusion Model 的訓練過程是怎樣的？",
      options: [
        "A. 直接把訓練圖片記在模型裡",
        "B. 學習把有雜訊的圖片還原成乾淨圖片",
        "C. 把所有圖片平均在一起"
      ],
      answer: 1,
      explanation: "訓練時加入雜訊，讓模型學會逆向還原；推理時從純雜訊開始，一步步生成圖像。"
    },
    connections: ["chatgpt", "multimodal", "veo-imagen"],
    position: { x: 1180, y: 350 }
  },
  {
    id: "chatgpt",
    year: 2022,
    name: "ChatGPT",
    nameEn: "ChatGPT",
    category: "breakthrough",
    tagline: "AI 走進每個人的生活",
    description: "OpenAI 在 2022 年推出 ChatGPT，讓大型語言模型第一次以聊天介面的形式大規模進入大眾生活。它不只會回答問題，還能寫摘要、翻譯、生成程式碼與協助腦力激盪；加上 RLHF（人類回饋強化學習）後，整體對話更自然，也更符合人類期待。ChatGPT 的爆紅讓全球重新認識生成式 AI，並快速帶動教育、辦公、客服與開發工具的全面改變。",
    youtubeId: "0uQqMxXoNVs",
    figure: "OpenAI 團隊（Sam Altman、Mira Murati、Ilya Sutskever 等），2022 年 11 月 30 日正式上線",
    applications: ["智慧客服與 FAQ", "程式設計助理", "寫作摘要與翻譯", "教育輔導與問答", "知識工作輔助"],
    misconception: "ChatGPT 很擅長生成像人寫的答案，但這不代表它每次都正確；它仍可能出現幻覺、引用錯誤或過度自信的回答。",
    quiz: {
      question: "ChatGPT 為什麼會成為生成式 AI 的重要轉折點？",
      options: [
        "A. 它把大型語言模型變成一般人也能直接使用的聊天產品",
        "B. 它是第一個會上網搜尋的 AI",
        "C. 它完全不會產生錯誤資訊"
      ],
      answer: 0,
      explanation: "ChatGPT 的歷史意義在於把原本偏研究或開發者導向的模型，轉成全民可直接體驗的產品，從而引爆生成式 AI 熱潮。"
    },
    connections: ["multimodal"],
    position: { x: 1250, y: 250 }
  },
  {
    id: "multimodal",
    year: 2023,
    name: "Multimodal AI",
    nameEn: "Multimodal AI",
    category: "breakthrough",
    tagline: "同時看、聽、說的 AI",
    description: "2023 年之後，多模態 AI 成為新一波關鍵趨勢。這類模型不再只處理文字，而能同時理解圖片、聲音、文件、影片甚至畫面截圖，讓 AI 從『讀文字』進化到『綜合理解多種資訊』。像 GPT-4V、Gemini 與後續多模態系統，讓使用者可以直接上傳圖片發問、讓 AI 看圖解題、讀表格、分析介面或結合語音互動，應用範圍明顯擴大。",
    youtubeId: "tGEf-bGMdoY",
    figure: "OpenAI GPT-4V、Google Gemini、Anthropic Claude 多模態能力發展",
    applications: ["圖片與文字問答", "文件與圖表理解", "影片與畫面分析", "語音互動助理", "視覺輔助工具"],
    misconception: "多模態 AI 看起來像真的『看懂』世界，但它對圖像細節、空間關係與情境推論仍可能出錯，不等於完全具有人類理解力。",
    quiz: {
      question: "多模態 AI 和傳統純文字模型最大的差異是什麼？",
      options: [
        "A. 能整合圖片、文字、音訊等不同形式的資訊",
        "B. 一定比純文字模型更小更省資源",
        "C. 完全不需要訓練資料"
      ],
      answer: 0,
      explanation: "多模態模型的核心優勢是跨模態理解，也就是把不同型態的資訊放在一起分析，而不是只看文字。"
    },
    connections: ["reasoning-models", "gemini-15-pro"],
    position: { x: 1330, y: 200 }
  },
  {
    id: "reasoning-models",
    year: 2024,
    name: "推理型模型",
    nameEn: "Reasoning Models",
    category: "breakthrough",
    tagline: "從直接回答走向分步思考",
    description: "2024 年開始，AI 發展重點逐漸從『會說很多』轉向『能不能更好地思考』。推理型模型強調多步驟問題拆解、較穩定的邏輯過程，以及在數學、規劃、程式設計與複雜任務上的表現提升。這代表大語言模型正在從單純的文字生成工具，朝向更可靠的問題求解系統前進，也為後續 Agent 與工具調用打下基礎。",
    youtubeId: "",
    figure: "OpenAI、Google DeepMind、Anthropic 等主要模型團隊持續強化推理能力",
    applications: ["數學與邏輯解題", "程式除錯與規劃", "複雜任務拆解", "研究分析輔助"],
    misconception: "推理型模型並不是擁有人類意識的『思考者』，而是更擅長在模型內部模擬步驟化求解，結果仍可能錯誤。",
    quiz: {
      question: "推理型模型在 2024 年受到重視的主要原因是什麼？",
      options: [
        "A. 它們更擅長處理多步驟、需要規劃與邏輯的問題",
        "B. 它們完全取代了所有搜尋引擎",
        "C. 它們不再需要任何算力資源"
      ],
      answer: 0,
      explanation: "這一類模型的重要性在於更擅長處理需要拆解、規劃與推理的任務，而不只是產生流暢文字。"
    },
    connections: ["multimodal", "ai-agents", "alphageometry", "gemini-15-pro"],
    position: { x: 1360, y: 230 }
  },
  {
    id: "ai-agents",
    year: 2025,
    name: "AI Agents",
    nameEn: "AI Agents",
    category: "breakthrough",
    tagline: "從聊天走向主動執行任務",
    description: "2025 年的代表性方向之一，是 AI Agent 從概念走向實際應用。Agent 不只是回答一句問題，而是能接收目標後自行拆解步驟、呼叫外部工具、查找資料、讀寫檔案，甚至在多輪流程中持續完成任務。這讓 AI 從『聊天機器人』進一步變成『可執行工作的數位助理』，也是企業導入 AI 自動化的重要轉折點。",
    youtubeId: "",
    figure: "各大 AI 平台、MCP/工具調用生態與企業自動化系統",
    applications: ["自動化工作流程", "研究與搜尋助理", "程式開發協作", "客服流程處理", "跨工具任務執行"],
    misconception: "AI Agent 不是完全自治的智慧體，它通常仍受模型能力、工具權限、流程設計與人類監督所限制。",
    quiz: {
      question: "AI Agent 相比一般聊天機器人，最大的進步是什麼？",
      options: [
        "A. 能規劃、調用工具並持續執行多步驟任務",
        "B. 只能回覆更長的文字",
        "C. 完全不需要人類設定目標"
      ],
      answer: 0,
      explanation: "Agent 的關鍵不是更會聊天，而是能串接工具、分解步驟並持續完成整段工作流程。"
    },
    connections: ["reasoning-models", "ai-native-workflows"],
    position: { x: 1385, y: 250 }
  },
  {
    id: "ai-native-workflows",
    year: 2026,
    name: "AI Native Workflows",
    nameEn: "AI Native Workflows",
    category: "breakthrough",
    tagline: "AI 成為工作流程的一部分",
    description: "到了 2026 年，AI 的競爭重點更可能從『單一模型能力』進一步轉向『能否穩定地嵌入真實工作流程』。AI Native Workflow 指的是搜尋、寫作、資料分析、設計、簡報與程式開發等流程從一開始就把 AI 當成協作者，而不是事後外掛。這代表生成式 AI 開始從新奇工具變成基礎生產力設施，重點也從模型展示轉向可靠性、整合性與人機協作效率。",
    youtubeId: "",
    figure: "生成式 AI 平台、辦公軟體、設計工具與開發環境整合生態",
    applications: ["AI 協作辦公", "智慧分析與報告流程", "AI 輔助設計", "AI 輔助開發", "跨系統知識工作整合"],
    misconception: "AI 融入工作流程不代表人類會被完全取代；真正重要的是分工、驗證、責任歸屬與使用者判斷。",
    quiz: {
      question: "AI Native Workflow 這個概念最強調哪一點？",
      options: [
        "A. 讓 AI 從一開始就被整合進真實工作流程",
        "B. 只追求模型參數越大越好",
        "C. 讓工作完全不需要驗證"
      ],
      answer: 0,
      explanation: "AI Native Workflow 的核心不是單次炫技，而是讓 AI 成為流程中的穩定合作夥伴，提升實際工作效率。"
    },
    connections: ["ai-agents", "gemini-31-continuous"],
    position: { x: 1410, y: 270 }
  },
  {
    id: "gemini-15-pro",
    year: 2024,
    name: "Gemini 1.5 Pro",
    nameEn: "Gemini 1.5 Pro",
    category: "breakthrough",
    tagline: "百萬 Token 超長上下文視窗",
    description: "Google 推出 Gemini 1.5 Pro，採用混合專家模型（MoE）架構，將上下文長度提升至 100 萬甚至 200 萬個 Token。這讓 AI 能一次性處理整本長篇小說、數小時影片或數十萬行程式碼，是大型語言模型上下文處理能力的里程碑。同年展示的 Project Astra 也突破了即時多模態（視覺＋語音）互動的延遲瓶頸。",
    youtubeId: "cNfINi5CNbY",
    figure: "Google DeepMind 團隊（2024），Gemini 1.5 系列",
    applications: ["長文件理解與問答", "完整程式碼庫分析", "長影片內容摘要", "Project Astra 即時視覺助理"],
    misconception: "超長上下文不等於完美記憶，模型在極長輸入中仍可能遺漏特定細節或出現注意力稀釋。",
    quiz: {
      question: "Gemini 1.5 Pro 最突破性的技術特色是什麼？",
      options: [
        "A. 能上網即時搜尋所有資訊",
        "B. 上下文視窗擴展到百萬 Token，能處理超長內容",
        "C. 完全不需要 GPU 就能運行"
      ],
      answer: 1,
      explanation: "Gemini 1.5 Pro 的 MoE 架構讓上下文從數千 Token 飛躍到百萬等級，徹底改變長內容處理方式。"
    },
    connections: ["multimodal", "reasoning-models", "alphafold3"],
    position: { x: 1440, y: 200 }
  },
  {
    id: "alphafold3",
    year: 2024,
    name: "AlphaFold 3",
    nameEn: "AlphaFold 3",
    category: "breakthrough",
    tagline: "預測所有生命分子的結構",
    description: "DeepMind 的 AlphaFold 3 不再只預測蛋白質，而是能準確預測幾乎所有生命分子（DNA、RNA、配體、離子等）的 3D 結構及交互作用，大幅加速新藥研發和生物醫學研究。這項突破被《Nature》稱為「分子生物學的革命」。",
    youtubeId: "P-TuAkJLWKA",
    figure: "Google DeepMind 團隊，Demis Hassabis 與 John Jumper（2024）",
    applications: ["新藥研發加速", "蛋白質與藥物交互預測", "疾病機制研究", "酵素工程設計"],
    misconception: "AlphaFold 3 預測的是結構「形狀」，不代表直接等於新藥。從結構預測到可用藥物仍需大量實驗驗證。",
    quiz: {
      question: "AlphaFold 3 相比前代最大的進步是什麼？",
      options: [
        "A. 速度快了一千倍",
        "B. 能預測幾乎所有生命分子（不只蛋白質）的結構與交互",
        "C. 不再需要任何訓練資料"
      ],
      answer: 1,
      explanation: "AlphaFold 3 將預測範圍從蛋白質擴展到 DNA、RNA、配體等所有重要生命分子的結構。"
    },
    connections: ["gemini-15-pro", "alphageometry"],
    position: { x: 1480, y: 300 }
  },
  {
    id: "alphageometry",
    year: 2024,
    name: "AlphaGeometry",
    nameEn: "AlphaGeometry",
    category: "model",
    tagline: "AI 解題達到奧林匹亞金牌水準",
    description: "DeepMind 推出的 AlphaGeometry 結合了神經語言模型與符號推理引擎，能在國際數學奧林匹亞（IMO）等級的幾何題目上達到人類金牌選手水準，是 AI 在數理推理領域的重大里程碑。",
    youtubeId: "BID_vgMn1SM",
    figure: "Google DeepMind（2024），結合神經網路與符號推理的混合式 AI",
    applications: ["數學定理自動證明", "幾何問題求解", "教育用自動解題", "科學假說推理"],
    misconception: "AlphaGeometry 擅長特定的幾何證明，但不代表 AI 已具備通用數學思考能力。",
    quiz: {
      question: "AlphaGeometry 的獨特之處在於？",
      options: [
        "A. 純粹用蠻力計算窮舉所有解法",
        "B. 結合神經語言模型和符號推理引擎來解幾何題",
        "C. 只能解簡單的四則運算"
      ],
      answer: 1,
      explanation: "AlphaGeometry 的創新在於混合了直覺式的神經網路和嚴謹的符號推理，兩者互補。"
    },
    connections: ["alphafold3", "reasoning-models", "gemini3-deep-think"],
    position: { x: 1500, y: 170 }
  },
  {
    id: "veo-imagen",
    year: 2024,
    name: "Veo & Imagen 3",
    nameEn: "Veo & Imagen 3",
    category: "model",
    tagline: "文字生成 4K 影片與超擬真圖像",
    description: "Google DeepMind 在 2024 年推出影片生成模型 Veo（支援 4K 高畫質，物理邏輯連貫）以及圖像生成模型 Imagen 3（極高品質文生圖）。這讓 AI 的視覺創作能力從靜態圖片大幅躍進到動態影片領域。",
    youtubeId: "",
    figure: "Google DeepMind（2024），Veo 與 Imagen 3 生成式影像技術",
    applications: ["短影片自動生成", "廣告與行銷素材製作", "影視概念預覽", "AI 藝術創作"],
    misconception: "AI 生成的影片雖然畫面精良，但在長時間一致性、精確物理模擬和人體動作上仍有明顯瑕疵。",
    quiz: {
      question: "Google 的 Veo 模型在 2024 年的突破是什麼？",
      options: [
        "A. 能從文字描述直接生成 4K 影片",
        "B. 能讓使用者免費使用 GPU",
        "C. 主要用來壓縮影片檔案大小"
      ],
      answer: 0,
      explanation: "Veo 讓文字轉影片的品質達到 4K 等級且物理邏輯連貫，是影片生成領域的重大進展。"
    },
    connections: ["diffusion", "veo3-flow"],
    position: { x: 1460, y: 380 }
  },
  {
    id: "gemini3-deep-think",
    year: 2025,
    name: "Gemini 3 Deep Think",
    nameEn: "Gemini 3 Deep Think",
    category: "breakthrough",
    tagline: "系統二深層推理架構",
    description: "2025 年 Google 推出 Gemini 3 系列，其中 Deep Think 版本具備深層「系統二（System 2）」思考能力，在國際數學奧林匹亞級別的推理問題上達到穩定奪金水準。這代表大型語言模型從快速直覺回答邁向深度邏輯推理的關鍵進化。",
    youtubeId: "",
    figure: "Google DeepMind 團隊（2025），Gemini 3 Pro / Flash / Deep Think 系列",
    applications: ["國際數學奧林匹亞問題求解", "複雜程式設計與除錯", "科學研究假說論證", "長程規劃與策略分析"],
    misconception: "Deep Think 的「思考」仍然是模型內部的推理過程模擬，並非真正的人類意識或自覺。",
    quiz: {
      question: "Gemini 3 Deep Think 的「深層思考」指的是？",
      options: [
        "A. 能「系統二」式地逐步拆解推理複雜問題",
        "B. 需要更多電力所以叫做「深」",
        "C. 只是速度更快的舊模型"
      ],
      answer: 0,
      explanation: "Deep Think 模擬人類慢思考（System 2），在需要多步推理的問題上表現遠超直覺型回答。"
    },
    connections: ["reasoning-models", "ai-agents", "alphageometry", "gemini-31-continuous"],
    position: { x: 1530, y: 230 }
  },
  {
    id: "genie3-world-model",
    year: 2025,
    name: "Genie 3 世界模型",
    nameEn: "Genie 3 World Model",
    category: "model",
    tagline: "AI 生成可互動的虛擬世界",
    description: "DeepMind 的 Genie 模型進化至第三代，能夠從文字或圖片描述生成具備高解析度、且在數分鐘內維持極佳物理一致性的互動式虛擬環境。Genie 3 被視為「世界模型（World Model）」研究方向的重大突破，讓 AI 離理解物理世界運作更近一步。",
    youtubeId: "",
    figure: "Google DeepMind（2025），Genie 3 通用世界模型",
    applications: ["遊戲世界自動生成", "模擬訓練環境", "機器人行為預演", "虛擬實境內容創建"],
    misconception: "Genie 3 的虛擬世界在細節和多分鐘長度後仍會出現物理錯誤，離完美的世界模擬還有距離。",
    quiz: {
      question: "Genie 3 和一般 AI 圖像生成最大的不同是？",
      options: [
        "A. 它生成的不只是圖片，而是可互動的 3D 虛擬環境",
        "B. 它只能生成文字描述",
        "C. 它需要手動畫出每一格畫面"
      ],
      answer: 0,
      explanation: "Genie 3 的革命性在於生成的是「可互動的世界」，使用者可以在其中移動和操作，不只是靜態圖像。"
    },
    connections: ["veo-imagen", "veo3-flow"],
    position: { x: 1550, y: 350 }
  },
  {
    id: "veo3-flow",
    year: 2025,
    name: "Veo 3 & Flow",
    nameEn: "Veo 3 & Flow",
    category: "model",
    tagline: "影片與原生音效同步生成",
    description: "Veo 3 達成了「影片與原生音效同步生成」的突破，AI 不再只輸出無聲畫面，而能自動同步配上合理的環境音效和音樂。同時推出的 Flow 創作平台讓非專業人士也能用 AI 快速製作高品質影片內容，重塑影音產業工作流程。",
    youtubeId: "",
    figure: "Google DeepMind（2025），Veo 3 影音同步生成技術與 Flow 創作平台",
    applications: ["影音內容一站式創作", "廣告與社群媒體素材", "教育影片自動製作", "獨立製片概念預覽"],
    misconception: "Veo 3 的音效雖然自動生成，但在複雜場景下仍需人工微調，目前還不能完全取代專業音效師。",
    quiz: {
      question: "Veo 3 相比前代 Veo 最大的進步是？",
      options: [
        "A. 能同步生成影片畫面與對應的原生音效",
        "B. 運算速度快了十倍",
        "C. 只支援黑白影片"
      ],
      answer: 0,
      explanation: "Veo 3 的創新在於打破了影像與音效分離的限制，首次實現 AI 原生影音同步生成。"
    },
    connections: ["veo-imagen", "genie3-world-model"],
    position: { x: 1580, y: 280 }
  },
  {
    id: "gemini-31-continuous",
    year: 2026,
    name: "Gemini 3.1 持續學習",
    nameEn: "Gemini 3.1 & Continuous Learning",
    category: "breakthrough",
    tagline: "AI 不中斷地自我進化",
    description: "2026 年初 Google 發布 Gemini 3.1 Pro 與 Flash Lite，同時 DeepMind 在連續學習技術上取得重大突破：模型能在運作時不中斷地自我吸收新知識並優化，突破過往 LLM 只停留在「訓練時間點」的限制。結合多代理協作框架，多個 AI Agent 能彼此溝通、規劃長程目標並自動執行跨部門任務，標誌著企業級 AI Agent 時代正式到來。",
    youtubeId: "",
    figure: "Google DeepMind（2026），Gemini 3.1 系列與連續學習技術（Nested Method, NeurIPS 2025）",
    applications: ["AI 即時知識更新", "企業級多 Agent 協作自動化", "設備端與雲端 AI 無縫協作", "自動化科學研究流程"],
    misconception: "連續學習不代表 AI 已具備人類意識或完全自主判斷力，更新過程仍需嚴格的品質與安全監控。",
    quiz: {
      question: "Gemini 3.1 的「連續學習」技術最關鍵的突破是？",
      options: [
        "A. 模型能在運行時不中斷地自我吸收新知識並持續優化",
        "B. 模型的參數量增加到一兆",
        "C. 只能在離線環境中學習"
      ],
      answer: 0,
      explanation: "連續學習打破了 LLM 只能在固定訓練時間點凍結知識的限制，讓 AI 能持續進化。"
    },
    connections: ["ai-native-workflows", "ai-agents", "gemini3-deep-think"],
    position: { x: 1560, y: 200 }
  }
];

// 輔助函式：依類別篩選節點
function getNodesByCategory(category) {
  return AI_NODES.filter(n => n.category === category);
}

// 輔助函式：依年代篩選節點
function getNodesByEra(startYear, endYear) {
  return AI_NODES.filter(n => n.year >= startYear && n.year <= endYear);
}

// 輔助函式：取得節點的所有連線（雙向）
function getConnections(nodeId) {
  return AI_NODES.filter(n => n.connections.includes(nodeId) ||
    AI_NODES.find(m => m.id === nodeId)?.connections.includes(n.id));
}

// 類別設定（顏色和標籤）
const CATEGORIES = {
  theory: { label: "理論基礎", color: "#38BDF8" },
  model: { label: "模型架構", color: "#34D399" },
  training: { label: "訓練方法", color: "#FB923C" },
  breakthrough: { label: "應用突破", color: "#A78BFA" },
  winter: { label: "AI 寒冬", color: "#64748B" }
};

// 時代分期
const ERAS = [
  { label: "1950s 起源", start: 1950, end: 1959 },
  { label: "1960–80s 符號AI", start: 1960, end: 1989 },
  { label: "1990–2000s 機器學習", start: 1990, end: 2009 },
  { label: "2010s 深度學習", start: 2010, end: 2019 },
  { label: "2020s+ 大模型", start: 2020, end: 2099 }
];
