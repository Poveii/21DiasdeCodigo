const bodyElement = document.querySelector("body");
const labelElement = document.querySelector("label");

labelElement.addEventListener("click", () =>
  bodyElement.classList.toggle("dark")
);
