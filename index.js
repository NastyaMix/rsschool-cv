const BURGER = document.querySelector(".burger");
const NAV = document.querySelector(".nav");
const BODY = document.querySelector(".body");
const NAV_LINKS = document.querySelectorAll(".nav-link");

(function () {
  BURGER.addEventListener("click", () => {
    NAV.classList.toggle("nav-active");
    BODY.classList.toggle("scroll-hidden");
  });

  function hideMenu() {
    NAV.classList.remove("nav-active");
    BODY.classList.remove("scroll-hidden");
  }

  for (let i = 0; i < NAV_LINKS.length; i++) {
    NAV_LINKS[i].addEventListener("click", () => {
      hideMenu();
    });
  }

  window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".nav") && !target.closest(".burger")) {
      hideMenu();
    }
  });
})();
