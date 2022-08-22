const timerSpanElement = document.querySelector("#timer");
const startButtonElement = document.querySelector("button#start");
const stopButtonElement = document.querySelector("button#stop");
const resetButtonElement = document.querySelector("button#reset");
const stopListElement = document.querySelector(".stop-list");

const seconds = document.querySelector("span#seconds");
const minutes = document.querySelector("span#minutes");
const hours = document.querySelector("span#hours");
const timer = document.querySelector("#timer");

let Interval;

startButtonElement.addEventListener("click", function () {
  Interval = setInterval(() => {
    seconds.textContent++;

    if (seconds.textContent.length === 1)
      seconds.textContent = "0" + seconds.textContent;

    if (seconds.textContent >= 59) {
      minutes.textContent++;
      seconds.textContent = 00;
    }

    if (minutes.textContent.length === 1)
      minutes.textContent = "0" + minutes.textContent;

    if (minutes.textContent >= 59) {
      hours.textContent++;
      minutes.textContent = 00;
    }

    if (hours.textContent.length === 1)
      hours.textContent = "0" + hours.textContent;
  }, 10);

  stopButtonElement.removeAttribute("disabled");
  resetButtonElement.setAttribute("disabled", true);
  startButtonElement.setAttribute("disabled", true);
});

stopButtonElement.addEventListener("click", () => {
  clearInterval(Interval);

  stopListElement.innerHTML += "<span>" + timer.textContent + "</span>";

  startButtonElement.removeAttribute("disabled");
  resetButtonElement.removeAttribute("disabled");
  stopButtonElement.setAttribute("disabled", true);
});

resetButtonElement.addEventListener("click", () => {
  seconds.textContent = "00";
  minutes.textContent = "00";
  hours.textContent = "00";

  stopListElement.innerHTML = "";

  resetButtonElement.setAttribute("disabled", true);
});
