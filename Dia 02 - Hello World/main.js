const helloWorldElement = document.querySelector("h1");
const spanHelloWorldElement = document.querySelector("h1 span");
const contentElement = document.querySelector(".content");
const mainElement = document.querySelector("main");
const blurElement = document.querySelector(".blur");
const footerElement = document.querySelector("footer small");

helloWorldElement.addEventListener("click", function () {
  helloWorldElement.classList.add("vanish");
  contentElement.classList.add("vanish");

  setTimeout(() => {
    helloWorldElement.classList.remove("vanish");

    setTimeout(() => {
      mainElement.classList.add("unsplash");
      blurElement.classList.add("show");
      helloWorldElement.classList.add("colors");

      setTimeout(() => {
        spanHelloWorldElement.textContent = "";
        spanHelloWorldElement.classList.add("type");

        setTimeout(() => {
          footerElement.classList.add("show");
        }, 3000);
      }, 4000);
    }, 800);
  }, 3000);
});
