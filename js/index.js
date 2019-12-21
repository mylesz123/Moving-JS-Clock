let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

function setClockDisplay() {
    let currentDate = new Date();
    let currentSecond = currentDate.getSeconds();
    let currentMinute = currentDate.getMinutes();
    let currentHour = currentDate.getHours();

    //tick 6 degrees each specified time lapse
    let secondsToDegrees = ((currentSecond / 60) * 360) + 90;
    let minutesToDegrees = ((currentMinute / 60) * 360) + 90;
    let hoursToDegrees = ((currentHour / 60) * 360);

    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setClockDisplay, 1000);