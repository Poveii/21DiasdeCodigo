function randomNumberGenerator(item) {
  return Math.floor(Math.random() * item.length);
}

function setAnime() {
  const url = "https://api.jikan.moe/v4/recommendations/anime";

  fetch(url)
    .then((response) => response.json())
    .then((api) => {
      const randomNumberToData = randomNumberGenerator(api.data);
      const randomNumberToEntry = randomNumberGenerator(
        api.data[randomNumberToData].entry
      );

      const animeId =
        api.data[randomNumberToData].entry[randomNumberToEntry].mal_id;

      const url2 = `https://api.jikan.moe/v4/anime/${animeId}/full`;

      fetch(url2)
        .then((response) => response.json())
        .then((api2) => {
          // console.log(api2.data);
          animeSynopsis.textContent = api2.data.synopsis;
        });

      // console.log(api.data[randomNumberToData]);

      animeImage.src =
        api.data[randomNumberToData].entry[
          randomNumberToEntry
        ].images.webp.large_image_url;

      animeName.textContent =
        api.data[randomNumberToData].entry[randomNumberToEntry].title;

      animeURL.href =
        api.data[randomNumberToData].entry[randomNumberToEntry].url;

      animeRecomendationText.textContent = api.data[randomNumberToData].content;
    });
}

setAnime();
