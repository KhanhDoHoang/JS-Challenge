//First Part for start and reset

// var start = document.getElementById('start');
// var reset = document.getElementById('reset');

// var startTimer = null;

// start.addEventListener('click', function () {
//     //initialize the variable
//     function startInterval() {
//         startTimer = setInterval(function () {
//             timer();
//         }, 1000);
//     }
//     startInterval();
// })

//Second Part

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
    const seconds = Math.floor(ttseconds) / 60;

    console.log(days + " " + hours + " " + minutes + " " + ttseconds);
}
//inital one
countdown();

setInterval(countdown, 1000);