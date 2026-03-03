var MAP_STATE = {
  selectedNodeId: null,
  currentEra: "all",
  viewBox: { x: 0, y: 0, w: 1500, h: 620 },
  dragging: false,
  dragStart: null
};

var MAP_CATEGORY_COLORS = {
  theory: "#32c5ff",
  model: "#79f0c6",
  training: "#f7b955",
  breakthrough: "#bba5ff",
  winter: "#98a8bf"
};

var MAP_ERA_GROUPS = [
  { key: "all", label: "全部", start: 1900, end: 2100 },
  { key: "1950s", label: "1950s", start: 1950, end: 1959 },
  { key: "1960-80s", label: "1960-80s", start: 1960, end: 1989 },
  { key: "1990-2000s", label: "1990-2000s", start: 1990, end: 2009 },
  { key: "2010s", label: "2010s", start: 2010, end: 2019 },
  { key: "2020s", label: "2020s+", start: 2020, end: 2100 }
];

var NOTEBOOK_CONTENT = {};

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseYoutubeEmbed(url) {
  if (!url) {
    return "";
  }
  try {
    var parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        return "https://www.youtube.com/embed/" + (parsed.searchParams.get("v") || "");
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }
    }
    if (parsed.hostname.includes("youtu.be")) {
      return "https://www.youtube.com/embed/" + parsed.pathname.replace("/", "");
    }
  } catch (error) {
    return "";
  }
  return "";
}

function renderVideoBlock(node, notebook) {
  var videoUrl = notebook && notebook.videoUrl ? notebook.videoUrl : "";
  var youtubeEmbed = parseYoutubeEmbed(videoUrl);

  if (youtubeEmbed) {
    return (
      "<div class='video-wrap'>" +
      "<iframe src='" + escapeHTML(youtubeEmbed) + "' title='" + escapeHTML(node.name) + " 影片' loading='lazy' allowfullscreen></iframe>" +
      "</div>"
    );
  }

  if (videoUrl) {
    if (videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm")) {
      return (
        "<div class='video-wrap'>" +
        "<video controls preload='metadata' src='" + escapeHTML(videoUrl) + "'></video>" +
        "</div>"
      );
    }
    return "<p><a class='btn btn-secondary' href='" + escapeHTML(videoUrl) + "' target='_blank' rel='noopener noreferrer'>開啟 NotebookLM 影片</a></p>";
  }

  if (node.youtubeId) {
    return (
      "<div class='video-wrap'>" +
      "<iframe src='https://www.youtube.com/embed/" + escapeHTML(node.youtubeId) + "' title='" + escapeHTML(node.name) + " 影片' loading='lazy' allowfullscreen></iframe>" +
      "</div>"
    );
  }

  return "<p class='muted'>此節點尚未提供影片。</p>";
}

function renderSources(notebook) {
  var sources = notebook && Array.isArray(notebook.sources) ? notebook.sources : [];
  if (!sources.length) {
    return "<p class='muted'>此節點尚未同步來源出處。</p>";
  }

  return (
    "<ul class='source-list'>" +
    sources
      .map(function (source) {
        var title = source.title || "未命名來源";
        var url = source.url || "#";
        var meta = [];
        if (source.publisher) {
          meta.push(source.publisher);
        }
        if (source.year) {
          meta.push(String(source.year));
        }
        return (
          "<li class='source-item'>" +
          "<a href='" + escapeHTML(url) + "' target='_blank' rel='noopener noreferrer'>" + escapeHTML(title) + "</a>" +
          (meta.length ? "<small>" + escapeHTML(meta.join(" · ")) + "</small>" : "") +
          "</li>"
        );
      })
      .join("") +
    "</ul>"
  );
}

function getEraByKey(key) {
  return MAP_ERA_GROUPS.find(function (era) {
    return era.key === key;
  });
}

function getVisibleNodes() {
  var era = getEraByKey(MAP_STATE.currentEra) || MAP_ERA_GROUPS[0];
  return AI_NODES.filter(function (node) {
    return node.year >= era.start && node.year <= era.end;
  });
}

function renderEraButtons() {
  var container = document.getElementById("era-filter");
  if (!container) {
    return;
  }

  container.innerHTML = "";
  MAP_ERA_GROUPS.forEach(function (era) {
    var button = document.createElement("button");
    button.className = "era-btn" + (MAP_STATE.currentEra === era.key ? " active" : "");
    button.textContent = era.label;
    button.type = "button";
    button.addEventListener("click", function () {
      MAP_STATE.currentEra = era.key;
      var visible = getVisibleNodes();
      if (!visible.find(function (node) { return node.id === MAP_STATE.selectedNodeId; })) {
        MAP_STATE.selectedNodeId = visible.length ? visible[0].id : null;
      }
      renderMap();
      renderEraButtons();
      renderPanel();
    });
    container.appendChild(button);
  });
}

function renderMap() {
  var svg = document.getElementById("map-svg");
  if (!svg) {
    return;
  }

  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  svg.setAttribute("viewBox", [MAP_STATE.viewBox.x, MAP_STATE.viewBox.y, MAP_STATE.viewBox.w, MAP_STATE.viewBox.h].join(" "));

  var visibleNodes = getVisibleNodes();
  var visibleIds = visibleNodes.map(function (node) {
    return node.id;
  });

  var gridLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  gridLayer.setAttribute("class", "map-grid");
  for (var x = 100; x <= 1450; x += 100) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", 20);
    line.setAttribute("x2", x);
    line.setAttribute("y2", 600);
    gridLayer.appendChild(line);
  }
  svg.appendChild(gridLayer);

  var connectionLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  visibleNodes.forEach(function (node) {
    node.connections.forEach(function (targetId) {
      if (!visibleIds.includes(targetId)) {
        return;
      }
      var target = AI_NODES.find(function (candidate) {
        return candidate.id === targetId;
      });
      if (!target || target.year < node.year) {
        return;
      }
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("class", "map-connection");
      line.setAttribute("x1", node.position.x);
      line.setAttribute("y1", node.position.y);
      line.setAttribute("x2", target.position.x);
      line.setAttribute("y2", target.position.y);
      connectionLayer.appendChild(line);
    });
  });
  svg.appendChild(connectionLayer);

  var nodeLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  visibleNodes.forEach(function (node) {
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "map-node" + (MAP_STATE.selectedNodeId === node.id ? " active" : ""));
    group.setAttribute("transform", "translate(" + node.position.x + " " + node.position.y + ")");

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", 13);
    circle.setAttribute("fill", MAP_CATEGORY_COLORS[node.category] || "#32c5ff");

    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", 18);
    text.setAttribute("y", 4);
    text.textContent = node.year + " " + node.name;

    group.appendChild(circle);
    group.appendChild(text);
    group.addEventListener("click", function () {
      MAP_STATE.selectedNodeId = node.id;
      renderMap();
      renderPanel();
    });
    nodeLayer.appendChild(group);
  });
  svg.appendChild(nodeLayer);
}

function renderPanel() {
  var panel = document.getElementById("map-panel");
  if (!panel) {
    return;
  }

  var visibleNodes = getVisibleNodes();
  var node = visibleNodes.find(function (candidate) {
    return candidate.id === MAP_STATE.selectedNodeId;
  });

  if (!node && visibleNodes.length) {
    node = visibleNodes[0];
    MAP_STATE.selectedNodeId = node.id;
  }

  if (!node) {
    panel.innerHTML = "<h3>沒有可顯示節點</h3><p>目前篩選條件下沒有資料。</p>";
    return;
  }

  var notebook = NOTEBOOK_CONTENT[node.id] || null;
  var category = CATEGORIES[node.category];
  var summary = notebook && notebook.summary ? notebook.summary : node.description;
  var title = notebook && notebook.title ? notebook.title : node.name;

  panel.innerHTML =
    "<div class='node-meta'>" +
    "<span class='chip'>" + node.year + "</span>" +
    "<span class='node-badge' style='background:" + (category ? category.color : "#32c5ff") + "'>" + (category ? category.label : node.category) + "</span>" +
    "</div>" +
    "<h3>" + escapeHTML(title) + "</h3>" +
    "<p class='muted'>" + escapeHTML(node.nameEn) + "</p>" +
    "<p><strong>一句話：</strong>" + escapeHTML(node.tagline) + "</p>" +
    (notebook ? "<p class='chip'>NotebookLM 內容已同步</p>" : "<p class='chip'>尚未同步 NotebookLM，顯示預設內容</p>") +
    "<h4>重點摘要</h4>" +
    "<p>" + escapeHTML(summary) + "</p>" +
    "<h4>影片</h4>" +
    renderVideoBlock(node, notebook) +
    "<h4>資料來源</h4>" +
    renderSources(notebook) +
    "<h4>常見誤解</h4>" +
    "<p>" + escapeHTML(node.misconception) + "</p>" +
    "<div class='quiz'>" +
    "<strong>小測驗</strong>" +
    "<p>" + escapeHTML(node.quiz.question) + "</p>" +
    "<div class='quiz-options'>" +
    node.quiz.options
      .map(function (option, index) {
        return "<button class='quiz-option' type='button' data-index='" + index + "'>" + escapeHTML(option) + "</button>";
      })
      .join("") +
    "</div>" +
    "<div class='quiz-feedback' id='quiz-feedback'></div>" +
    "</div>";

  panel.querySelectorAll(".quiz-option").forEach(function (button) {
    button.addEventListener("click", function () {
      var selected = Number(button.getAttribute("data-index"));
      var feedback = panel.querySelector("#quiz-feedback");
      if (!feedback) {
        return;
      }
      var correct = selected === node.quiz.answer;
      feedback.className = "quiz-feedback " + (correct ? "good" : "bad");
      feedback.textContent = (correct ? "答對了。" : "再試一次。") + node.quiz.explanation;
    });
  });
}

function setupPanZoom() {
  var svg = document.getElementById("map-svg");
  if (!svg) {
    return;
  }

  svg.addEventListener("wheel", function (event) {
    event.preventDefault();
    var scale = event.deltaY > 0 ? 1.08 : 0.92;
    MAP_STATE.viewBox.w = Math.max(700, Math.min(2200, MAP_STATE.viewBox.w * scale));
    MAP_STATE.viewBox.h = Math.max(320, Math.min(980, MAP_STATE.viewBox.h * scale));
    renderMap();
  });

  svg.addEventListener("mousedown", function (event) {
    MAP_STATE.dragging = true;
    MAP_STATE.dragStart = { x: event.clientX, y: event.clientY };
  });

  window.addEventListener("mouseup", function () {
    MAP_STATE.dragging = false;
    MAP_STATE.dragStart = null;
  });

  window.addEventListener("mousemove", function (event) {
    if (!MAP_STATE.dragging || !MAP_STATE.dragStart) {
      return;
    }
    var dx = event.clientX - MAP_STATE.dragStart.x;
    var dy = event.clientY - MAP_STATE.dragStart.y;
    MAP_STATE.viewBox.x -= dx * (MAP_STATE.viewBox.w / svg.clientWidth);
    MAP_STATE.viewBox.y -= dy * (MAP_STATE.viewBox.h / svg.clientHeight);
    MAP_STATE.dragStart = { x: event.clientX, y: event.clientY };
    renderMap();
  });
}

function renderTopics() {
  var container = document.getElementById("topic-grid");
  if (!container || typeof AI_NODES === "undefined") {
    return;
  }

  var sorted = AI_NODES.slice().sort(function (a, b) {
    return a.year - b.year;
  });

  container.innerHTML = sorted
    .map(function (node) {
      var category = CATEGORIES[node.category];
      return (
        "<article class='topic-card'>" +
        "<div class='node-meta'><span class='chip'>" + node.year + "</span>" +
        "<span class='node-badge' style='background:" + (category ? category.color : "#32c5ff") + "'>" + (category ? category.label : node.category) + "</span></div>" +
        "<h3>" + escapeHTML(node.name) + "</h3>" +
        "<p class='muted'>" + escapeHTML(node.nameEn) + "</p>" +
        "<p>" + escapeHTML(node.tagline) + "</p>" +
        "</article>"
      );
    })
    .join("");
}

function loadNotebookContent() {
  return fetch("data/notebooklm-export.json", { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("NotebookLM export not found");
      }
      return response.json();
    })
    .then(function (payload) {
      var nodes = Array.isArray(payload.nodes) ? payload.nodes : [];
      var index = {};
      nodes.forEach(function (node) {
        if (node.nodeId) {
          index[node.nodeId] = node;
        }
      });
      NOTEBOOK_CONTENT = index;
    })
    .catch(function () {
      NOTEBOOK_CONTENT = {};
    });
}

document.addEventListener("DOMContentLoaded", function () {
  if (typeof AI_NODES === "undefined") {
    return;
  }

  loadNotebookContent().finally(function () {
    if (document.getElementById("map-svg")) {
      MAP_STATE.selectedNodeId = AI_NODES[0] ? AI_NODES[0].id : null;
      renderEraButtons();
      renderMap();
      renderPanel();
      setupPanZoom();
    }
    renderTopics();
  });
});
