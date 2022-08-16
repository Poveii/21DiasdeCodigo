const helloWorldElement = document.querySelector("h1");
const containerElement = document.querySelector(".container");

helloWorldElement.addEventListener("click", function () {
  helloWorldElement.classList.add("vanish");
  containerElement.classList.add("vanish");

  setTimeout(() => {
    helloWorldElement.classList.remove("vanish");

    helloWorldElement.classList.add("colors");
  }, 3000);
});
