const emojiRandomElement = document.querySelector("h1 span");
const mainElement = document.querySelector("main");
const favicon = document.querySelector("head link[rel~='shortcut']");
const moreEmojisButton = document.querySelector("#more-emojis");
const windowTextElement = document.querySelector(".window-text");

const url =
  "https://emoji-api.com/emojis?access_key=670d4eacad2424782d4e81c433a007764e6e63b4";

fetch(url)
  .then((response) => response.json())
  .then((api) => {
    const randomNumber = Math.floor(Math.random() * api.length);
    favicon.href = `data:image/svg+xml,
      <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
        <text y=%22.9em%22 font-size=%2290%22>
          ${api[randomNumber].character}
        </text>
      </svg>`;
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
        const emojiCharacter = cardElement.querySelector("span").textContent;

        navigator.clipboard.writeText(emojiCharacter);

        windowTextElement.classList.remove("transparent");
        windowTextElement.innerHTML = `O emoji 
          ${emojiCharacter} foi copiado para sua área de transferência!`;

        setTimeout(() => windowTextElement.classList.add("transparent"), 4000);
      });
    });

    index = 56;
    moreEmojisButton.addEventListener("click", function () {
      const emojiCardsElements = document.querySelectorAll(".emoji-card");
      emojiCardsElements.forEach((card) => {
        let emoji = api[index];

        console.log(emoji);
        if (!emoji) {
          windowTextElement.classList.remove("transparent");
          windowTextElement.innerHTML = "Acabou os emojis por aqui!";

          setTimeout(
            () => windowTextElement.classList.add("transparent"),
            4000
          );

          return;
        }

        card.querySelector("span").textContent = emoji.character;
        card.querySelector("h2").textContent = emoji.unicodeName;

        index++;
      });

      index += 56;

      if (!api[index]) return;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
