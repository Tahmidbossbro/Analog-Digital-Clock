var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');
var secondDigit = document.querySelector('.second-digit');
var minuteDigit = document.querySelector('.minute-digit');
var hourDigit = document.querySelector('.hour-digit');
var container = document.querySelector('.container');
secondHand.style.transform = 'rotate(60deg)';
setInterval(myMethod, 500);
setTimeout(function () {
    container.style.visibility = 'visible';
}, 1000);
function myMethod() {
    var d = new Date();
    // console.log(d.getHours + " : " + d.getMinutes + " : " + d.getSeconds);
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    if (hours > 12) {
        hours = hours - 12;
    }
    if (seconds < 10) {
        secondDigit.innerText = "0" + seconds.toString();
    }
    else {
        secondDigit.innerText = seconds.toString();
    }
    if (minutes < 10) {
        minuteDigit.innerText = "0" + minutes.toString();
    }
    else {
        minuteDigit.innerText = minutes.toString();
    }
    if (hours < 10) {
        hourDigit.innerText = "0" + hours.toString();
    }
    else {
        hourDigit.innerText = hours.toString();
    }
    secondHand.style.transform = 'rotate(' + (seconds * 6) + 'deg)';
    minuteHand.style.transform = 'rotate(' + ((6 * minutes) + (seconds * 0.1)) + 'deg)';
    hourHand.style.transform = 'rotate(' + ((hours * 30) + (minutes * 0.5)) + 'deg)';
}
// container.style.visibility = 'visible';
