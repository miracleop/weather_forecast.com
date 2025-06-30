const apikey="705fff73617b1777ad86af91356d8909";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBOx=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
     if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rains.png";
    }
     if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
     if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
     if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
     if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
    }
}
searchBtn.addEventListener("click",()=>{checkWeather(searchBOx.value)});
