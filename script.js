const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", (e) => {
  if (e.target.src.includes("images/icon-menu.svg")) {
    e.target.src = "images/icon-menu-close.svg";
    menu.classList.add("active");
  } else if (e.target.src.includes("images/icon-menu-close.svg")) {
    e.target.src = "images/icon-menu.svg";
    menu.classList.remove("active");
  }
});
