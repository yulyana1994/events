const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const finishDate = new Date(`May 31 2023 00:00:00`);

function updateCounter() {
  const currentDate = new Date();
  const diff = finishDate - currentDate;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  days.innerText = daysLeft;

  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;

  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;

  const secondsLeft = Math.floor(diff / 1000) % 60;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

updateCounter();
setInterval(updateCounter, 1000);
