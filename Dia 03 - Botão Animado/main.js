const interruptorInputElement = document.querySelector("input");
const interruptorLabelElement = document.querySelector("label");

interruptorLabelElement.addEventListener("click", function () {
  if (interruptorInputElement.defaultChecked == true) {
    interruptorInputElement.checked = true;
    interruptorInputElement.defaultChecked = false;
  } else {
    interruptorInputElement.checked = false;
    interruptorInputElement.defaultChecked = true;
  }

  document.body.classList.toggle("dark");
});
