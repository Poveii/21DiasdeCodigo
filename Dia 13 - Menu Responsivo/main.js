const menuButtonElement = document.querySelector("nav span");
const navListElement = document.querySelector("nav ul");

menuButtonElement.addEventListener("click", function () {
  if (menuButtonElement.textContent === " menu ") {
    menuButtonElement.textContent = " close ";

    navListElement.classList.add("show");
  } else {
    menuButtonElement.textContent = " menu ";
    navListElement.classList.remove("show");
  }
});
