const mainElement = document.querySelector("main");
const morePhotosButtonElement = document.querySelector("button");

function generateRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function placeUnsplashImages() {
  const keywords = [
    "city",
    "town",
    "night",
    "day",
    "street",
    "people",
    "beach",
    "interior",
    "nature",
    "food",
    "drink",
    "3D",
    "desert",
    "cars",
    "ocean",
    "bike",
    "mountain",
    "product",
    "house",
    "fishing",
    "illustration",
    "downtown",
    "eighty's",
    "pop",
  ];

  const resolutions = ["1280x720", "720x1280", "1920x1080", "1080x1920"];

  if (document.querySelectorAll(".column")[0] == undefined)
    mainElement.innerHTML = "<div class='column'></div>";

  const firstDivElement = document.querySelectorAll(".column")[0];

  for (let index = 0; index < 8; index++) {
    const firstUrl = `https://source.unsplash.com/random/${
      resolutions[generateRandomNumber(resolutions)]
    }/?${keywords[generateRandomNumber(keywords)]}`;

    firstDivElement.innerHTML += "<img />";

    const imgElements = firstDivElement.querySelectorAll("img");
    const imgElement = imgElements[imgElements.length - 1];

    imgElement.src = firstUrl;
  }

  if (window.innerWidth >= 768) {
    if (document.querySelectorAll(".column")[1] == undefined)
      mainElement.innerHTML += "<div class='column'></div>";

    const secondDivElement = document.querySelectorAll(".column")[1];

    for (let index = 0; index < 8; index++) {
      const secondUrl = `https://source.unsplash.com/random/${
        resolutions[generateRandomNumber(resolutions)]
      }/?${keywords[generateRandomNumber(keywords)]}`;

      secondDivElement.innerHTML += "<img />";

      const imgElements = secondDivElement.querySelectorAll("img");
      const imgElement = imgElements[imgElements.length - 1];

      imgElement.src = secondUrl;
    }
  }

  if (window.innerWidth >= 1024) {
    if (document.querySelectorAll(".column")[2] == undefined)
      mainElement.innerHTML += "<div class='column'></div>";

    const thirdDivElement = document.querySelectorAll(".column")[2];

    for (let index = 0; index < 8; index++) {
      const thirdUrl = `https://source.unsplash.com/random/${
        resolutions[generateRandomNumber(resolutions)]
      }/?${keywords[generateRandomNumber(keywords)]}`;

      thirdDivElement.innerHTML += "<img />";

      const imgElements = thirdDivElement.querySelectorAll("img");
      const imgElement = imgElements[imgElements.length - 1];

      imgElement.src = thirdUrl;
    }
  }
}

placeUnsplashImages();

morePhotosButtonElement.addEventListener("click", () => placeUnsplashImages());
