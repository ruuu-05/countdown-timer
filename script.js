let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");

const finals = '9 aug 2025';
function conutdown(){
const finalsDate = new Date(finals)
const currnetDate = new Date();

const totSec = (finalsDate-currnetDate) / 1000;

const days = Math.floor(totSec/3600 / 24);
const hours = Math.floor(totSec/3600) % 24 ;
const mins = Math.floor(totSec/60) % 60 ;
const secs = Math.floor(totSec % 60) ;

console.log(days , hours , mins , secs ,minsEl)

daysEl.innerHTML= days;
hoursEl.innerHTML= formatTime(hours);
minsEl.innerHTML= formatTime(mins);
secsEl.innerHTML= formatTime(secs);
}
function formatTime(time) {
return time < 10 ? `0${time}` : time;
}


conutdown();

setInterval(conutdown,1000);