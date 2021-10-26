"use strict";


const api={
  key:'469f450f28e57b7f2e1c96764594d750',
  dturl:'https://api.openweathermap.org/data/2.5/'
}


const box=document.querySelector('#box');

box.addEventListener('keypress', appOff);


function appOff(e){
    if(e.keyCode==13){
        getBox(box.value);
    }
}

function getBox(query){
fetch(`${api.dturl}weather?q=${query}&units=metric&APPID=${api.key}`)
.then((weather)=>{
      return weather.json();
})
.then(dispalW)

}

function dispalW(weather){
const temp=document.querySelector(".temp");
temp.innerHTML=`${Math.round(weather.main.temp)}°<span>C</span>`;
const cname=document.querySelector(".c-name");
cname.innerHTML=`${weather.name}, ${weather.sys.country}`;

const cdate=document.querySelector(".c-date");

const month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const week=['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


const dt=new Date();

let wk=dt.getDay();
let dtt=dt.getDate();
let mn=dt.getMonth();
let yr=dt.getFullYear();

cdate.innerHTML=`${yr} , ${dtt} ${month[mn]} , ${week[wk-1]}`;

const ctype=document.querySelector(".cloud-type");
ctype.innerHTML=`${weather.weather[0].main}`;

const tmp=document.querySelector('.temps');
tmp.innerHTML=`${Math.round(weather.main.temp_min)}°<span>C</span> / ${Math.round(weather.main.temp_max)}°<span>C</span>`
console.log(weather);

}




