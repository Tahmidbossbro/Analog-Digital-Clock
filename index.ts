const secondHand = document.querySelector('.second-hand') as HTMLElement;
const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
const hourHand = document.querySelector('.hour-hand') as HTMLElement;

const secondDigit = document.querySelector('.second-digit') as HTMLInputElement;
const minuteDigit = document.querySelector('.minute-digit') as HTMLInputElement;
const hourDigit = document.querySelector('.hour-digit') as HTMLInputElement;

const container = document.querySelector('.container') as HTMLInputElement;


secondHand.style.transform = 'rotate(60deg)';


setInterval(myMethod, 500);

setTimeout(function () {
    container.style.visibility = 'visible';
  }, 500)
function myMethod( )
{
    
    const d = new Date();
    // console.log(d.getHours + " : " + d.getMinutes + " : " + d.getSeconds);
    
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    if (hours > 12){hours = hours -12 ;}

    if (seconds < 10){
        secondDigit.innerText = "0" + seconds.toString();
    }
    else{
        secondDigit.innerText = seconds.toString();
    }
  
    if (minutes < 10){
        minuteDigit.innerText = "0" + minutes.toString();
    }
    else{
        minuteDigit.innerText = minutes.toString();
    }

    if (hours < 10){
        hourDigit.innerText = "0" + hours.toString();
    }
    else{
        hourDigit.innerText = hours.toString();
    }
    
    
    

    secondHand.style.transform = 'rotate('+(seconds*6)+'deg)';
    minuteHand.style.transform = 'rotate('+((6*minutes) +(seconds*0.1))+'deg)';
    hourHand.style.transform = 'rotate('+((hours * 30 ) + (minutes * 0.5))+'deg)';


    
}



// container.style.visibility = 'visible';