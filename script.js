document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const themeIcon = themeToggle
    ? themeToggle.querySelector(".theme-icon")
    : null;
  const themeText = themeToggle
    ? themeToggle.querySelector(".theme-text")
    : null;

  const savedTheme = localStorage.getItem("novaflow-theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;

  function applyTheme(isLight) {
    document.body.classList.toggle("light-theme", isLight);
    if (themeIcon) themeIcon.textContent = isLight ? "🌙" : "☀️";
    if (themeText) themeText.textContent = isLight ? "Dark" : "Light";
  }

  if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    applyTheme(true);
  } else {
    applyTheme(false);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isLight = !document.body.classList.contains("light-theme");
      applyTheme(isLight);
      localStorage.setItem("novaflow-theme", isLight ? "light" : "dark");
    });
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("is-open");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
      });
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
