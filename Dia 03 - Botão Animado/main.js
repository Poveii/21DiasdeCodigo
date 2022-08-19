const interruptorInputElement = document.querySelector("input");
const interruptorLabelElement = document.querySelector("label");
const bodyElement = document.querySelector("body");

interruptorLabelElement.addEventListener("click", function () {
  if (interruptorInputElement.defaultChecked) {
    bodyElement.classList.add("dark");
    interruptorInputElement.defaultChecked = false;
  } else {
    bodyElement.classList.remove("dark");
    interruptorInputElement.defaultChecked = true;
  }
});
