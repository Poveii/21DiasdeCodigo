const generateButtonElement = document.querySelector("button");
const textInputElement = document.querySelector("input");

const characters =
  "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM1234567890!@#$&?._";

generateButtonElement.addEventListener("click", function () {
  console.log("yeah");

  if (textInputElement.value != "") {
    console.log("é o campas?");

    textInputElement.value = "";
  }

  for (let index = 0; index <= 8; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    // console.log(randomNumber);

    textInputElement.value += characters[randomNumber];
  }

  console.log(textInputElement.value);
});
