"use strict"

let apiKey = "83417ec08b874dea9c1190416242712";
let urlApi = "http://api.weatherapi.com/v1/forecast.json?"; //q=city or country

const searchInpt = document.querySelector('#searchInpt');
const Btnsubmit = document.querySelector("#Btnsubmit");


const cityName = document.querySelector('#cityName');
const temp = document.querySelector('#temp-c');
const conditionweather = document.querySelector('#conditionweather');
const windSpeed = document.querySelector('#windSpeed');
const Precipitation  = document.querySelector('#Precipitation');
const cloud  = document.querySelector('#cloud');




const mixtemp2 = document.querySelector('#mixtemp-c2');
const mintemp2 = document.querySelector('#mintemp-c2');
const cloud2 = document.querySelector('#cloudtwo');
const conditionweather2 = document.querySelector('#conditionweather2');


const mixtemp3 = document.querySelector('#mixtemp3');
const mintemp3 = document.querySelector('#mintemp-c3');
const cloud3 = document.querySelector('#cloud3');
const conditionweather3 = document.querySelector('#conditionweather3');


const weatherMonth = document.querySelector('#month');
const weatherDay = document.querySelector('#dayOfweek');
const secondDay = document.querySelector('#secondDay');
const thirdDay = document.querySelector('#thirdDay');

async function getData(city) {
    try {
        var response = await fetch( `${urlApi}key=${apiKey}&q=${city}&days=3`);
        var data = await response.json();

console.log(data);


updateWeatherInfo(data)
    
       
        
        
    }catch(error){
        alert("Error fetching weather data:"+error);
    }

}




Btnsubmit.addEventListener('click' , ()=>{
    getData(searchInpt.value)
    
      
    searchInpt.value='';

    })



function updateWeatherInfo(data) {

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
            
        var dayOfApi1= data.forecast.forecastday[1].date ; 
        var dayOfApi2= data.forecast.forecastday[2].date ; 
        var day1 = new Date(dayOfApi1)
        var day2 = new Date(dayOfApi2)
        var getDy1 = day1.getDay();
        var getDy2 = day2.getDay();
        var dayname = days[getDy1];
        var dayname2 = days[getDy2];


   secondDay.innerHTML = dayname;
  thirdDay.innerHTML= dayname2;
   
  cityName.innerHTML= data.location.name;
  temp.innerHTML =`${data.current.temp_c}°C`;
  conditionweather.innerHTML = data.current.condition.text;
  windSpeed.innerHTML = `${data.current.wind_kph}km/h`;
  Precipitation.innerHTML = `${data.current.pressure_in}%`;
  cloud.src = data.current.condition.icon;

  
  mixtemp2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}°C`;
  mintemp2.innerHTML = `${data.forecast.forecastday[1].day.mintemp_c}°C`;
  cloud2.src = data.forecast.forecastday[1].day.condition.icon;
  conditionweather2.innerHTML = data.forecast.forecastday[1].day.condition.text;

  mixtemp3.innerHTML =`${data.forecast.forecastday[2].day.maxtemp_c}°C`;
  mintemp3.innerHTML =`${data.forecast.forecastday[2].day.mintemp_c}°C`;

  cloud3.src = data.forecast.forecastday[2].day.condition.icon;
  conditionweather3.innerHTML = data.forecast.forecastday[2].day.condition.text;
    
    
}





// Current Date Info
    var month= ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var day =new Date();  
     var getMonth =  month[day.getMonth()]
   var getDayOfMonth = day.getDate()
   var getDay = days[day.getDay()]

 
    weatherMonth.innerHTML =getDayOfMonth + getMonth ;
    weatherDay.innerHTML = getDay;

