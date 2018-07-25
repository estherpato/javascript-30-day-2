'use strict';

const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
let secondsDegrees;

function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
   secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// function removeTransition() {
//     if(secondsDegrees === 90) {
//         secondsHand.style.transition = `all 0s`;
//     } else { 
//         secondsHand.style.transition = `all 0.5s`;
//     }
// }

setInterval(setTime, 1000);
// secondsHand.addEventListener('transitionend', removeTransition);