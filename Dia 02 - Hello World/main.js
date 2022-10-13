const helloWorldElement = document.querySelector("h1");
const spanHelloWorldElement = document.querySelector("h1 span");

helloWorldElement.addEventListener("click", function () {
  helloWorldElement.classList.add("vanish");
  document.querySelector(".content").classList.add("vanish");

  setTimeout(() => {
    helloWorldElement.classList.remove("vanish");

    setTimeout(() => {
      document.querySelector("main").classList.add("unsplash");
      document.querySelector(".blur").classList.add("show");
      helloWorldElement.classList.add("colors");

      setTimeout(() => {
        spanHelloWorldElement.textContent = "";
        spanHelloWorldElement.classList.add("type");

        setTimeout(() => {
          document.querySelector("footer small").classList.add("show");
        }, 3000);
      }, 4000);
    }, 800);
  }, 3000);
});
