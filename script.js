// Toggle Button Function
var toggle = document.getElementById("toggle-btn");
var expNav = document.getElementById("expanded-navbar");

window.addEventListener("scroll", () => {
  if (expNav.classList.contains("flex")) {
    expNav.classList.remove("flex");
    expNav.classList.add("hidden");
  }
});

toggle.addEventListener("click", () => {
  if (expNav.classList.contains("hidden")) {
    expNav.classList.remove("hidden");
    expNav.classList.add("flex");
  } else {
    expNav.classList.remove("flex");
    expNav.classList.add("hidden");
  }
});

// Services Slider Function
const b1 = document.getElementById("sbtn-1");
const b2 = document.getElementById("sbtn-2");
const b3 = document.getElementById("sbtn-3");
const la = document.getElementById("svc-larr");
const ra = document.getElementById("svc-rarr");
const svc = document.getElementById("services-div");
const childElements = svc.children;
const svcW = svc.clientWidth;
for (let i = 0; i < childElements.length; i++) {
  var childWidth = childElements[i].clientWidth;
}

la.addEventListener("click", () => {
  svc.scrollLeft += -childWidth * 2;
});

ra.addEventListener("click", () => {
  svc.scrollLeft += childWidth * 2;
});

svc.addEventListener("scroll", () => {
  if (svc.scrollLeft <= svc.scrollWidth / 4.92) {
    b1.classList.add("scroll-active");
    b2.classList.remove("scroll-active");
    b3.classList.remove("scroll-active");
  } else if (
    svc.scrollLeft >= svc.scrollWidth / 4.92 &&
    svc.scrollLeft <= svc.scrollWidth / 2.4
  ) {
    b2.classList.add("scroll-active");
    b1.classList.remove("scroll-active");
    b3.classList.remove("scroll-active");
  } else {
    b3.classList.add("scroll-active");
    b1.classList.remove("scroll-active");
    b2.classList.remove("scroll-active");
  }
});

b1.addEventListener("click", () => {
  svc.scrollLeft = 0;
});

b2.addEventListener("click", () => {
  svc.scrollLeft = svc.scrollWidth / 3;
});

b3.addEventListener("click", () => {
  svc.scrollLeft = svc.scrollWidth;
});

// Feedback Div Scroll Buttons

const f1 = document.getElementById("fbtn-1");
const f2 = document.getElementById("fbtn-2");

// const fla = document.getElementById("fb-larr");
// const fra = document.getElementById("fb-rarr");
const feed = document.getElementById("feedback-div");
const feedChilds = feed.children;
const feedW = feed.clientWidth;
for (let i = 0; i < feedChilds.length; i++) {
  var feedChildWidth = feedChilds[i].clientWidth;
}

feed.addEventListener("scroll", () => {
  if (feed.scrollLeft <= 0) {
    f1.classList.add("scroll-active");
    f2.classList.remove("scroll-active");
  } else {
    f1.classList.remove("scroll-active");
    f2.classList.add("scroll-active");
  }
});

f1.addEventListener("click", () => {
  feed.scrollLeft = 0;
});

f2.addEventListener("click", () => {
  feed.scrollLeft = feed.scrollWidth / 3;
});
