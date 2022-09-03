const bodyElement = document.querySelector("body");
const listElement = document.querySelector(".list");

bodyElement.addEventListener("keydown", function (event) {
  const lastEventKeyList = document.querySelectorAll(".key");
  const lastEventKey = lastEventKeyList[lastEventKeyList.length - 1];

  if (listElement.childElementCount >= 1) {
    if (lastEventKey.textContent == event.key) {
      const spanCounterElements = document.querySelectorAll(".counter");
      const spanCounterElement =
        spanCounterElements[spanCounterElements.length - 1];

      spanCounterElement.textContent++;

      return;
    }
  }

  listElement.innerHTML += "<div class='item'>" + "</div>";

  const itemListElements = document.querySelectorAll(".item");
  const itemListElement = itemListElements[itemListElements.length - 1];

  itemListElement.innerHTML =
    "<p class='key'>" +
    event.key +
    "</p>" +
    "<span class='counter'></span>" +
    "<span>" +
    event.code +
    "</span>" +
    "<div class='events'></div>";

  itemListElement.classList.add("filled");

  const keyboardEventsListElements = document.querySelectorAll(".events");
  const keyboardEventsListElement =
    keyboardEventsListElements[keyboardEventsListElements.length - 1];

  keyboardEventsListElement.innerHTML = "<span>" + "keydown" + "</span>";

  bodyElement.addEventListener("keypress", () => {
    if (keyboardEventsListElement.textContent.endsWith("keypress")) return;
    if (keyboardEventsListElement.textContent.endsWith("keyup")) return;

    keyboardEventsListElement.innerHTML += "<span>" + "keypress" + "</span>";
  });

  bodyElement.addEventListener("keyup", () => {
    if (keyboardEventsListElement.textContent.endsWith("keyup")) return;

    keyboardEventsListElement.innerHTML += "<span>" + "keyup" + "</span>";
  });
});
