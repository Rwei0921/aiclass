function setActiveNav() {
  var links = document.querySelectorAll(".nav-link");
  var page = location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    var target = link.getAttribute("href");
    if (target === page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function setupMobileNavScroll() {
  var nav = document.querySelector(".nav");
  if (!nav) {
    return;
  }
  if (window.innerWidth <= 760) {
    nav.scrollLeft = 0;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setActiveNav();
  setupMobileNavScroll();
});
