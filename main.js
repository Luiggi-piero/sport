const btnMenu = document.querySelector(".menu");
const btnClose = document.querySelector(".close");
const nav = document.querySelector("nav");

btnMenu.addEventListener("click", () => {
  nav.classList.add("show");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("show");
});
