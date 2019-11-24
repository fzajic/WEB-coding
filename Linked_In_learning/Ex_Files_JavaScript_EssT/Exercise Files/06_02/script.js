const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPostition = (hr*360/12)+((min*360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/50)
let secPosition = sec*360/60;

function runTheClock (){

  hrPostition = hrPostition + (3/36)
  secPosition = secPosition + 6;
  minPosition = minPosition + 6/60

  HOURHAND.style.transform = "rotate(" + hrPostition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000);
