const weatherApp= document.getElementById("weather-app")
const inp = document.getElementById("inp")
const lightContainer = document.getElementById("lightcontainer")
const close = document.getElementById("close")
let data;
async function getData(country){
  let temp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=beaa6830775a4e99910131438220406&q=${country}07112&days=3`)
  if(temp.ok && 400 != temp.status){
    data = await temp.json()
  
    displayData() 
  }
  else {
    lightContainer.classList.remove("d-none")
  }

}
getData("cairo")
inp.addEventListener("input", e =>{
    getData(e.target.value)
})
close.addEventListener("click" ,function(){
  lightContainer.classList.add("d-none")
})
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = new Date()
function displayData(){
  
 let cont = `
 <div class="col-md-4 ">
 <div class="home-weather m-2 ">
   <div class="d-flex justify-content-between caption-home p-2">
     <p>${days[today.getDay()]}</p>
     <p>${data.forecast.forecastday[0].date}</p>
   </div>
   <div class="caption-about p-2 h-5">
     <p >${data.location.name}</p>
     <div class="d-flex justify-content-around">
     <p class = "temp_c" >${data.current.temp_c}<sup>o</sup>c</p>
     <img src="https:${data.current.condition.icon}" alt="">
     </div>
     <p class="text-info" >${data.current.condition.text}</p>
     <div class="d-flex">
       <div class = "ms-2">
         <img src="images/icon-umberella.png" alt="">
         <span>20%</span>
       </div>
       <div>
         <img src="images/icon-wind.png" alt="">
         <span>18km/h</span>
       </div>
       <div>
         <img src="images/icon-compass.png" alt="">
         <span>East</span>
       </div>
     </div>
   </div>
 </div>
 </div>




 


 <div class="col-md-4 ">
 <div class="home-weather m-2 ">
   <div class=" caption-home2 p-2 ">
     <p class="text-center">${days[new Date(data.forecast.forecastday[1].date).getDay()]}</p>
   </div>
   <div class="caption-about2 p-2 text-center h-5 d-flex align-items-center flex-column justify-content-center">
   <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
     <p class="maxtemp2">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</p>
     <p class= "fs-4">${data.forecast.forecastday[1].day.mintemp_c}</p>
     <p class = "text-info ">${data.forecast.forecastday[1].day.condition.text}</p>
   </div>
 </div>
 </div>







 <div class="col-md-4 ">
 <div class="home-weather m-2 ">
   <div class=" caption-home p-2">
     <p class="text-center">${days[new Date(data.forecast.forecastday[2].date).getDay()]}</p>
   </div>
   <div class="caption-about p-2 text-center h-5 d-flex justify-content-center align-items-center flex-column">
   <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
     <p class="maxtemp">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</p>
     <p class = "fs-4">${data.forecast.forecastday[2].day.mintemp_c}</p>
     <p class="text-info">${data.forecast.forecastday[2].day.condition.text}</p>
   </div>
 </div>
 </div>
 
  `
  weatherApp.innerHTML = cont
}

