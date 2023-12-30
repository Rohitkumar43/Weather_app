
const Apikey = "03358bef0b68af2698a0bd6cdc384024";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;  


const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const wealtherIcon = document.querySelector(".wealther-icon");


async function checkwheather(city) {
    const responses = await fetch( ApiURL + city + `&appid=${Apikey}`);

     
        var data = await responses.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.wealther[0].main == "Clouds"){
        wealtherIcon.src = "D:\JS PROJECT\weather-app-img\images\clouds.png";
    }
    else if(data.wealther[0].main == "Clear"){
        wealtherIcon.src = "D:\JS PROJECT\weather-app-img\images\clear.png";
    }
    else if(data.wealther[0].main == "Rain"){
        wealtherIcon.src = "D:\JS PROJECT\weather-app-img\images\rain.png";
    }
    else if(data.wealther[0].main == "Drizzle"){
        wealtherIcon.src = "D:\JS PROJECT\weather-app-img\images\drizzle.png";
    }
    else if(data.wealther[0].main == "Mist"){
        wealtherIcon.src = "D:\JS PROJECT\weather-app-img\images\mist.png";
    }

    
  
}

searchBtn.addEventListener("click" , () => {
    checkwheather(searchBox.value);
});