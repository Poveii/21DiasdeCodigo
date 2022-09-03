const bodyElement = document.querySelector("body");
const listElement = document.querySelector(".list");

bodyElement.addEventListener("keydown", function (event) {
  // const lastEventKeyElement = document.querySelector(".key");a
  // const lastEventKeyElements = document.querySelectorAll(".key");
  // const lastEventKey = lastEventKeyElements[lastEventKeyElements.length - 1];

  // if (lastEventKeyElement !== null) {
  //   if (lastEventKeyElement.textContent === event.key) {
  //     const spanCounterElements = document.querySelectorAll(".counter");
  //     const spanCounterElement =
  //       spanCounterElements[spanCounterElements.length - 1];

  //     spanCounterElement.textContent++;
  //   }

  //   return;
  // }

  listElement.innerHTML += "<div class='item'>" + "</div>";

  const itemListElements = document.querySelectorAll(".item");
  const itemListElement = itemListElements[itemListElements.length - 1];

  itemListElement.innerHTML =
    "<p class='key'>" +
    event.key +
    "<span class='counter'></span>" +
    "</p>" +
    "<span>" +
    event.code +
    "</span>" +
    "<div class='events'></div>";

  itemListElement.classList.add("filled");

  const keyboardEventsListElements = document.querySelectorAll(".events");
  const keyboardEventsListElement =
    keyboardEventsListElements[keyboardEventsListElements.length - 1];

  keyboardEventsListElement.innerHTML = "<span>" + "keydown" + "</span>";

  bodyElement.addEventListener("keypress", function () {
    // const lastEventKeyElement = document.querySelector(".key");
    // if (lastEventKeyElement !== null) {
    //   if (lastEventKeyElement.textContent === event.key) return;
    // }

    keyboardEventsListElement.innerHTML += "<span>" + "keypress" + "</span>";
  });

  bodyElement.addEventListener("keyup", function () {
    // const lastEventKeyElement = document.querySelector(".key");
    // if (lastEventKeyElement !== null) {
    //   if (lastEventKeyElement.textContent === event.key) return;
    // }

    keyboardEventsListElement.innerHTML += "<span>" + "keyup" + "</span>";
  });
});

console.log();
