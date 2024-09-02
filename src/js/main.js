const btn = document.getElementById("btn-burger");
const menu = document.getElementById("menu-list");
let currnetLink = null;

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu__item-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    if (currnetLink) currnetLink.classList.remove("active");
    currnetLink = link;
    link.classList.add("active");

    setTimeout(() => menu.classList.remove("active"), 550);
    btn.classList.remove("active");
  });
});
