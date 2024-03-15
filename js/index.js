const apiKey = "7f9f8ea1977c6047117797102d53435e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=tbilisi";
const apiDynamicUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";


let searchForm = document.querySelector(".search_form");
let searchInput = document.querySelector(".search_input");
let searchBtn = document.querySelector("button");
let weatherImg = document.querySelector(".weather_img");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind_speed");


function getWeather() {
    fetch(`${apiUrl}&appid=${apiKey}`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            h1.textContent = `${data.name}, ${data.sys.country}`;
            h2.textContent = `${Math.round(data.main.temp)}°C / feels like ${Math.round(data.main.feels_like)}°C`;
            h3.textContent = data.weather[0].description;
            humidity.textContent = Math.round(data.main.humidity) + "%";
            windSpeed.textContent = Math.round(data.wind.speed) + " km/h";

            switch (data.weather[0].main) {
                case "Clear":
                    weatherImg.src = "images/clear.png"
                    break;
                case "Clouds":
                    weatherImg.src = "images/clouds.png"
                    break;
                case "Drizzle":
                    weatherImg.src = "images/drizzle.png"
                    break;
                case "Mist":
                    weatherImg.src = "images/mist.png"
                    break;
                case "Rain":
                    weatherImg.src = "images/rain.png"
                    break;
                case "Snow":
                    weatherImg.src = "images/snow.png"
                    break;
            };
        }).catch((error) => {
            document.querySelector(".main_div").classList.add("catch_main_div");
            weatherImg.src = "images/error.png";
            weatherImg.classList.add("error_img");
            h1.textContent = "";
            h2.textContent = "Couldn't load data.";
            h3.textContent = "";
            humidity.textContent = "";
            windSpeed.textContent = "";
            console.error(error);
        });

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let city = searchInput.value;
        fetch(`${apiDynamicUrl}&q=${city}&appid=${apiKey}`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                h1.textContent = `${data.name}, ${data.sys.country}`;
                h2.textContent = `${Math.round(data.main.temp)}°C / feels like ${Math.round(data.main.feels_like)}°C`;
                h3.textContent = data.weather[0].description;
                humidity.textContent = Math.round(data.main.humidity) + "%";
                windSpeed.textContent = Math.round(data.wind.speed) + " km/h";

                switch (data.weather[0].main) {
                    case "Clear":
                        weatherImg.src = "images/clear.png"
                        break;
                    case "Clouds":
                        weatherImg.src = "images/clouds.png"
                        break;
                    case "Drizzle":
                        weatherImg.src = "images/drizzle.png"
                        break;
                    case "Mist":
                        weatherImg.src = "images/mist.png"
                        break;
                    case "Rain":
                        weatherImg.src = "images/rain.png"
                        break;
                    case "Snow":
                        weatherImg.src = "images/snow.png"
                        break;
                };
            }).catch((error) => {
                document.querySelector(".main_div").classList.add("catch_main_div");
                weatherImg.src = "images/error.png";
                weatherImg.classList.add("error_img");
                h1.textContent = "";
                h2.textContent = "Couldn't load data.";
                h3.textContent = "";
                humidity.textContent = "";
                windSpeed.textContent = "";
                console.error(error);
            })
    });
};


getWeather();



