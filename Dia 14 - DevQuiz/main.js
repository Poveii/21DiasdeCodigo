const inputListElements = document.querySelectorAll(".card input");
const submitButtonElement = document.querySelector(".card button");
const questionTitleElement = document.querySelector(".card p");
const numberQuestionSpanElement = document.querySelector("h2 span");
const labelListElements = document.querySelectorAll(".card label");

const questionList = [
  "O que é um array?",
  "O que significa NLW?",
  "O que é frontend?",
  "O que é a Rocketseat?",
];

const answersList = {
  array: [
    "Uma caixa com várias propriedades.",
    "Uma lista de informações.",
    "Um neǵocio que tem no Javascript.",
    "Não sei...",
  ],
  NLW: [
    "Nesse Lindo World",
    "Next Level Week",
    "Não sei...",
    "Nada liga Weekend",
  ],
  frontend: [
    "O final da frente...?",
    "Não sei...",
    "HTML, CSS e Javascript",
    "A programação do visual de uma página web",
  ],
  Rocketseat: [
    "Não sei...",
    "Uma empresa por aí",
    "Uma empresa muito legal",
    "Uma empresa/escola que impulsiona pessoas com a programação",
  ],
};

const randomNumber = Math.floor(Math.random() * questionList.length);

questionTitleElement.textContent = questionList[randomNumber];

const previousQuestion = questionTitleElement.textContent;

const newQuestion = questionList.filter(
  (question) => question != previousQuestion
);

let index = 0;
function setAnotherQuestion() {
  questionTitleElement.textContent = newQuestion[index];
  index++;
}

function giveAnswersToQuestions() {
  let num = 0;

  labelListElements.forEach((label) => {
    if (questionTitleElement.textContent.includes("array")) {
      label.textContent = answersList.array[num];
      num++;
    } else if (questionTitleElement.textContent.includes("NLW")) {
      label.textContent = answersList.NLW[num];
      num++;
    } else if (questionTitleElement.textContent.includes("frontend")) {
      label.textContent = answersList.frontend[num];
      num++;
    } else if (questionTitleElement.textContent.includes("Rocketseat")) {
      label.textContent = answersList.Rocketseat[num];
      num++;
    }
  });
}

inputListElements.forEach((input) => {
  input.addEventListener("change", function () {
    if (input.checked) {
      input.classList.add("checked");
      const inputChecked = document.querySelector("input.checked");

      inputListElements.forEach((item) => {
        item.setAttribute("disabled", true);
        inputChecked.removeAttribute("disabled");
      });

      submitButtonElement.removeAttribute("disabled");
    } else {
      input.classList.remove("checked");
      inputListElements.forEach((item) => item.removeAttribute("disabled"));

      submitButtonElement.setAttribute("disabled", true);
    }
  });
});

let numberCorrectQuestions = 0;

submitButtonElement.addEventListener("click", function () {
  setAnotherQuestion();

  const labelInputChecked = document.querySelector("input.checked + label");
  const answerText = labelInputChecked.textContent;
  if (
    answerText == answersList.array[1] ||
    answerText == answersList.NLW[1] ||
    answerText == answersList.frontend[3] ||
    answerText == answersList.Rocketseat[3]
  ) {
    numberCorrectQuestions++;
  }

  num = 0;
  inputListElements.forEach((item) => {
    item.checked = false;
    item.classList.remove("checked");
    item.removeAttribute("disabled");
  });

  submitButtonElement.setAttribute("disabled", true);
  if (numberQuestionSpanElement.textContent == questionList.length - 1) {
    numberQuestionSpanElement.textContent++;

    submitButtonElement.textContent = "Enviar";
  } else if (numberQuestionSpanElement.textContent == questionList.length) {
    alert(
      `Parabéns você completou o quiz! Você acertou ${numberCorrectQuestions}/4`
    );
    window.location = "/";
  } else {
    numberQuestionSpanElement.textContent++;
  }

  giveAnswersToQuestions();
});

giveAnswersToQuestions();
