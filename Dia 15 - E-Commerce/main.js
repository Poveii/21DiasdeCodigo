const menuButtonElement = document.querySelector("#menu-icon");
const navListElement = document.querySelector("nav ul");
const cartButtonElement = document.querySelector("#shopping-cart");

menuButtonElement.addEventListener("click", function () {
  if (menuButtonElement.textContent === " menu ") {
    menuButtonElement.textContent = " close ";

    navListElement.classList.add("show");
    cartButtonElement.classList.add("none");
  } else {
    menuButtonElement.textContent = " menu ";
    navListElement.classList.remove("show");
    cartButtonElement.classList.remove("none");
  }
});
