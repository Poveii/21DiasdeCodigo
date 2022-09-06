const emojiRandomElement = document.querySelector("h1 span");
const mainElement = document.querySelector("main");

const url =
  "https://emoji-api.com/emojis?access_key=670d4eacad2424782d4e81c433a007764e6e63b4";

fetch(url)
  .then((response) => response.json())
  .then((api) => {
    const randomNumber = Math.floor(Math.random() * api.length);
    emojiRandomElement.textContent = api[randomNumber].character;

    let index = 0;
    const emojiCardsElements = document.querySelectorAll(".emoji-card");
    emojiCardsElements.forEach((card) => {
      let emoji = api[index];

      card.querySelector("span").textContent = emoji.character;
      card.querySelector("h2").textContent = emoji.unicodeName;

      index++;
    });

    emojiCardsElements.forEach((cardElement) => {
      cardElement.addEventListener("click", function () {
        let emojiCharacter = cardElement.querySelector("span").textContent;

        navigator.clipboard.writeText(emojiCharacter);
      });
    });
  });
