const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const openMenu = document.querySelector("#open_menu");
const closeMenu = document.querySelector("#close_menu");

openMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-y-hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-y-hidden");
});
