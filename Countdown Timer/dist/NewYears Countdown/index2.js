//Second Part
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    //---
    const ttseconds = new Date(newYearsDate - currentDate) / 1000;
    //---
    const days = Math.floor(ttseconds / 3600 / 24);
    const hours = Math.floor(ttseconds / 3600) % 24;
    const minutes = Math.floor(ttseconds / 60) % 60;
    const seconds = Math.floor(ttseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days + " " + hours + " " + minutes + " " + ttseconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
//inital one
countdown();

setInterval(countdown, 1000);

