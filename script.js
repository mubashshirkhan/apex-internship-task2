document.addEventListener("DOMContentLoaded", function () {
  const helloButton = document.getElementById("helloButton");
  const yearElement = document.getElementById("year");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle
    ? themeToggle.querySelector(".theme-icon")
    : null;
  const themeText = themeToggle
    ? themeToggle.querySelector(".theme-text")
    : null;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;

  if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    document.body.classList.add("light-theme");
    if (themeIcon) themeIcon.textContent = "🌙";
    if (themeText) themeText.textContent = "Dark";
  }

  if (helloButton) {
    helloButton.addEventListener("click", function () {
      helloButton.textContent = "Hello there!";
      setTimeout(function () {
        helloButton.textContent = "Say Hello";
      }, 1200);
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
      if (themeIcon) themeIcon.textContent = isLight ? "🌙" : "☀️";
      if (themeText) themeText.textContent = isLight ? "Dark" : "Light";
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
