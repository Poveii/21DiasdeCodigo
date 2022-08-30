const inputListElements = document.querySelectorAll(".card input");
const submitButtonElement = document.querySelector(".card button");
const questionTitleElement = document.querySelector(".card p");

const questionList = [
  "O que é um array?",
  "O que é a NLW?",
  "O que é frontend?",
  "O que é a Rocketseat?",
];

function randomNumberGenerator() {
  return Math.floor(Math.random() * questionList.length);
}

inputListElements.forEach((input) => {
  input.addEventListener("change", function () {
    if (this.checked) {
      input.classList.add("checked");
      const inputChecked = document.querySelector("input.checked");

      inputListElements.forEach((item) => {
        item.setAttribute("disabled", true);
        inputChecked.removeAttribute("disabled");
      });

      submitButtonElement.removeAttribute("disabled");
    } else {
      input.classList.remove("checked");
      inputListElements.forEach((item) => {
        item.removeAttribute("disabled");
      });

      submitButtonElement.setAttribute("disabled", true);
    }
  });
});

submitButtonElement.addEventListener("click", function () {
  const randomNumber = randomNumberGenerator();

  questionTitleElement.textContent = questionList[randomNumber];

  inputListElements.forEach((item) => {
    item.checked = false;
    item.classList.remove("checked");
    item.removeAttribute("disabled");
  });

  submitButtonElement.setAttribute("disabled", true);
});
