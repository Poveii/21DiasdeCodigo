const headerElement = document.querySelector("header");
const myNameHeader = document.querySelector("header h1");

myNameHeader.addEventListener("click", function () {
  console.log("here");

  headerElement.classList.add("on-top");
});
