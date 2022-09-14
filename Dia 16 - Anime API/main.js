function randomNumberGenerator(item) {
  return Math.floor(Math.random() * item.length);
}

function setAnimeInformations() {
  const recomendation_URL = "https://api.jikan.moe/v4/recommendations/anime";

  fetch(recomendation_URL)
    .then((response) => response.json())
    .then((api) => {
      const randomNumberToData = randomNumberGenerator(api.data);
      const randomNumberToEntry = randomNumberGenerator(
        api.data[randomNumberToData].entry
      );

      animeImage.src =
        api.data[randomNumberToData].entry[
          randomNumberToEntry
        ].images.webp.large_image_url;

      animeImage.classList.add("blur");

      animeRecomendationText.textContent = api.data[randomNumberToData].content;

      animeName.textContent =
        api.data[randomNumberToData].entry[randomNumberToEntry].title;

      const animeId =
        api.data[randomNumberToData].entry[randomNumberToEntry].mal_id;

      const anime_URL = `https://api.jikan.moe/v4/anime/${animeId}/full`;

      fetch(anime_URL)
        .then((response) => response.json())
        .then((api) => {
          console.log(api);

          api.data.genres.forEach((genre) => {
            if (genre.name == "Hentai") {
              setAnimeInformations();
              return;
            }

            animeImage.classList.remove("blur");
          });

          animeSynopsis.textContent = api.data.synopsis;
        });

      animeLink.href =
        api.data[randomNumberToData].entry[randomNumberToEntry].url;
    });
}

setAnimeInformations();
