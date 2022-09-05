const generateButtonElement = document.querySelector("button");
const textInputElement = document.querySelector("input");

const characters =
  "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890!@#$&.";
const charactersLength = 8;

generateButtonElement.addEventListener("click", function () {
  if (textInputElement.value != "") textInputElement.value = "";

  for (let index = 0; index <= charactersLength; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);

    textInputElement.value += characters[randomNumber];
  }

  const textInputValue = textInputElement.value;

  navigator.clipboard.writeText(textInputValue);
});
