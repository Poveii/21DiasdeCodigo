const helloWorldElement = document.querySelector("h1");
const containerElement = document.querySelector(".container");
const mainElement = document.querySelector("main");

helloWorldElement.addEventListener("click", function () {
  helloWorldElement.classList.add("vanish");
  containerElement.classList.add("vanish");

  setTimeout(() => {
    helloWorldElement.classList.remove("vanish");

    setTimeout(() => {
      helloWorldElement.classList.add("colors");
      mainElement.classList.add("unsplash");

      setTimeout(() => {
        helloWorldElement.innerText = "Hello";

        setTimeout(() => {
          helloWorldElement.innerText = "Hello Dev!";
        }, 800);
      }, 4000);
    }, 1000);
  }, 3000);
});
