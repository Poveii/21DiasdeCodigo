const goWithSallyButton = document.querySelector("button");
const bodyElement = document.querySelector("body");
const sallyImageElement = document.querySelector("img");
const containerElement = document.querySelector(".container");
const headingElement = document.querySelector("h1");
const paragraphElement = document.querySelector("p");

goWithSallyButton.addEventListener("click", function () {
  if (!goWithSallyButton.id === "return") return;

  if (goWithSallyButton.id === "go-back") return location.reload();

  bodyElement.classList.add("did-it");
  containerElement.classList.add("blur");

  sallyImageElement.id = "sally-found";
  sallyImageElement.src = "./images/sally-did-it.svg";
  sallyImageElement.alt =
    "Uma ilustração do Sally, mas agora ele encontrou o melhor lugar para se ler um livro: embaixo de uma árvore";

  headingElement.textContent = "Parabéns! Você ajudou o Sally!";
  paragraphElement.textContent =
    "Agora falta você encontrar o seu caminho! Verifque se a url do site está correta, caso queira você pode voltar.";

  goWithSallyButton.textContent = "Voltar pro começo";

  setTimeout(() => {
    containerElement.classList.remove("blur");
    goWithSallyButton.id = "go-back";
  }, 400);
});

console.log();
