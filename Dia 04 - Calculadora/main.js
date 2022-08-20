const displayElement = document.querySelector(".display");
const numberButtonsElements = document.querySelectorAll(".number");
const operatorsElements = document.querySelectorAll(".basic-operators button");
const equalElement = document.querySelector("#equal");
const clearDisplayElement = document.querySelector("#clear");
const backspaceDisplayElement = document.querySelector("#backspace");
const turnOnOffDisplayElement = document.querySelector("#turn-on-off");

operatorsElements.forEach((operatorElement) => {
  let operator = operatorElement.textContent;

  operatorElement.addEventListener("click", function () {
    if (displayElement.classList.contains("off")) return;

    if (!displayElement.classList.contains("number")) return;
    if (displayElement.classList.contains("equal"))
      displayElement.innerHTML = eval(displayElement.textContent);

    operatorElement.id === "multiplication" ? (operator = "*") : operator;
    operatorElement.id === "division" ? (operator = "/") : operator;

    displayElement.innerHTML += "<span>" + operator + "</span>";
    document.querySelector(".display span").id = "operator";

    displayElement.classList.remove("number");
  });
});

numberButtonsElements.forEach((numberElement) => {
  numberElement.addEventListener("click", function () {
    if (displayElement.classList.contains("off")) return;

    let number = numberElement.textContent;

    displayElement.innerHTML += number;
    displayElement.classList.add("number");

    let operatorIdElement = document.querySelector("#operator");
    if (operatorIdElement) {
      displayElement.classList.add("equal");
    } else return;
  });
});

equalElement.addEventListener("click", function () {
  if (displayElement.classList.contains("off")) return;

  if (!displayElement.classList.contains("equal")) return;

  try {
    eval(displayElement.textContent);
  } catch (err) {
    return (displayElement.innerHTML = displayElement.textContent.slice(0, -1));
  }

  displayElement.innerHTML = eval(displayElement.textContent);
});

clearDisplayElement.addEventListener("click", () => {
  if (displayElement.classList.contains("off")) return;

  displayElement.innerHTML = "";
  displayElement.className = "display";
});

backspaceDisplayElement.addEventListener("click", () => {
  if (displayElement.classList.contains("off")) return;

  if (displayElement.textContent === "") return;

  displayElement.textContent = displayElement.textContent.slice(0, -1);
  if (displayElement.textContent === "")
    return (displayElement.className = "display");
});

turnOnOffDisplayElement.addEventListener("click", function () {
  displayElement.classList.toggle("off");
});
