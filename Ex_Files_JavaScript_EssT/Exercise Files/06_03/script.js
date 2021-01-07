const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date(); 
console.log(date);
let hr = date.getHours();
let mins = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = hr*360/12+sec*360/60/60/60 + mins*360/60/12;
let minPosition = mins*360/60 + (sec*360/60/60);
let secPosition = sec*360/60;

HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
