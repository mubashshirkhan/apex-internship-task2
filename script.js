document.addEventListener("DOMContentLoaded", function () {
  const helloButton = document.getElementById("helloButton");
  const yearElement = document.getElementById("year");

  if (helloButton) {
    helloButton.addEventListener("click", function () {
      alert("Hello! Thanks for visiting my portfolio.");
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
