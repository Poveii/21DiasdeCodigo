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
  textButton,
  link
) {
  number++;
  number < 10
    ? (counter.textContent = "0" + number)
    : (counter.textContent = number);

  projectImage.src = image;
  projectName.textContent = title;
  projectDescription.textContent = description;
  projectButton.textContent = textButton;
  projectLink.href = link;
}

let index = 0;
fetch(url)
  .then((response) => response.json())
  .then((list) => {
    backward.addEventListener("click", function () {
      if (counter.textContent <= 01) return;

      index--;

      const challengeTitle = list.data[index].title;
      const challengeImage = list.data[index].image;
      const challengeText = list.data[index].description;
      const challengeTextButton = list.data[index].button;
      const challengeLink = list.data[index].link;

      setChallengesInformation(
        index,
        challengeImage,
        challengeTitle,
        challengeText,
        challengeTextButton,
        challengeLink
      );
    });

    forward.addEventListener("click", function () {
      if (counter.textContent >= 21) return;

      index++;

      const challengeTitle = list.data[index].title;
      const challengeImage = list.data[index].image;
      const challengeText = list.data[index].description;
      const challengeTextButton = list.data[index].button;
      const challengeLink = list.data[index].link;

      setChallengesInformation(
        index,
        challengeImage,
        challengeTitle,
        challengeText,
        challengeTextButton,
        challengeLink
      );
    });
  });
