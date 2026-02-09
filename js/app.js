document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        menuBtn.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });
});
