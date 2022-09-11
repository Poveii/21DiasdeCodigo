const headerElement = document.querySelector("header");
const myNameHeader = document.querySelector("header h1");
const bodyElement = document.querySelector("body");
const mainElement = document.querySelector("main");

const url = document.URL + "challenges.json";

myNameHeader.addEventListener("click", function () {
  headerElement.classList.add("on-top");
  bodyElement.classList.remove("no-overflow");
  mainElement.classList.remove("no-overflow");
});

function setChallengesInformation(
  number,
  image,
  title,
  description,
  textButton
) {
  counter.textContent = number + 1;
  projectImage.src = image;
  projectName.textContent = title;
  projectDescription.textContent = description;
  projectButton.textContent = textButton;
  console.log(number);
}

let index = 0;
fetch(url)
  .then((response) => response.json())
  .then((list) => {
    console.log(list.data);

    console.log(index);

    backward.addEventListener("click", function () {
      console.log(counter.textContent);
      if (counter.textContent <= 0) return;

      index--;

      let challengeTitle = list.data[index].title;
      console.log(challengeTitle);
      let challengeImage = list.data[index].image;
      console.log(challengeImage);
      let challengeText = list.data[index].description;
      console.log(challengeText);
      let challengeTextButton = list.data[index].button;
      console.log(challengeTextButton);

      setChallengesInformation(
        index,
        challengeImage,
        challengeTitle,
        challengeText,
        challengeTextButton
      );
    });

    forward.addEventListener("click", function () {
      if (counter.textContent >= 21) return;

      index++;

      let challengeTitle = list.data[index].title;
      console.log(challengeTitle);
      let challengeImage = list.data[index].image;
      console.log(challengeImage);
      let challengeText = list.data[index].description;
      console.log(challengeText);
      let challengeTextButton = list.data[index].button;
      console.log(challengeTextButton);

      setChallengesInformation(
        index,
        challengeImage,
        challengeTitle,
        challengeText,
        challengeTextButton
      );

      console.log(
        index,
        challengeImage,
        challengeTitle,
        challengeText,
        challengeTextButton
      );
    });
  });

console.log();
