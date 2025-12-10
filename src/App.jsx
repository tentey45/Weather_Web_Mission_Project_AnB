import { useState, useEffect } from "react";
import "./App.css";
import search from './assets/search-svgrepo-com.svg'
import notfound from './assets/notepad-svgrepo-com.svg'
import { getWeatherIcon } from "./utils/getWeatherIcon";
import importIcon from "./utils/importIcon";

const API_KEY = "9e77ec7492fee5be08be9e2c4a0b6493";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [notFound, setNotFound] = useState(false);

   useEffect(() => {
    fetchWeather("Phnom Penh"); // Default weather
  }, []);

  async function fetchWeather(cityName) {
    try {
      setNotFound(false);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      console.log(data)

      if (data.cod !== 200) {
        setWeather(null);
        setNotFound(true);
        return;

      }

      setWeather(data);

      fetchForecast(cityName);
    } catch (err) {
      setWeather(null);
      setNotFound(true);
      console.error(err);
    }
  }



  async function fetchForecast(cityName) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();

    const daily = data.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    setForecast(daily);
  }

  function handleSearch() {
    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  }

  return (
    <div className="main-container">
      {/* Search bar */}

      <div className="input-container">

        <input
          className="city-input"
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button className="search-btn" onClick={handleSearch}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>


      {/* <section className="search-city section-message">
          <img className="message-img" src={search} alt="" />
          

          <div>
            <h1>Search City</h1>
            <h4 className="regular-txt">Find out the weather condition of the city</h4>
          </div>
        </section> */}

      


          {/* Not found image */}
          {notFound && (
            <div className="not-found section-message">
              <img src={notfound} alt="Not found" />
              <h2>City not found</h2>
            </div>
          )}

          {/* Weather card */}
          {weather && (
            <div className="weather-info">
              <div className="location-date-container">
                <div className="location">
                  <span className="material-symbols-outlined">
                    location_on
                  </span>
                  <h4 className="country-txt">{weather.name}</h4>
                </div>
                <h5 className="current-date-txt">
                  {new Date().toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                  })}
                </h5>
              </div>

              <div className="weather-summary-container">
                <img
                  className="weather-summary-img"
                  src={importIcon(getWeatherIcon(weather.weather[0].id))}
                  alt="weather"
                />
                <div className="weather-summary-info">
                  <h1 className="temp-txt">{Math.round(weather.main.temp)} °C</h1>
                  <h3 className="condition-txt">{weather.weather[0].main}</h3>
                </div>
              </div>

              <div className="weather-conditions-container">
                <div className="condition-item">
                  <span className="material-symbols-outlined">water_drop</span>
                  <div className="condition-info">
                    <h5>Humidity</h5>
                    <h5>{weather.main.humidity} %</h5>
                  </div>
                </div>

                <div className="condition-item">
                  <span className="material-symbols-outlined">air</span>
                  <div className="condition-info">
                    <h5>Wind</h5>
                    <h5>{weather.wind.speed} M/s</h5>
                  </div>
                </div>

                <div className="condition-item">
                  <span class="material-symbols-outlined">
                    thermometer
                  </span>
                  <div className="condition-info">
                    <h5>Feels Like</h5>
                    <h5>{weather.main.feels_like} °C</h5>
                  </div>
                </div>



              </div>

              {/* Forecast */}
              <div className="forecast-items-container">
                {forecast.map((item) => (
                  <div key={item.dt} className="forecast-item">
                    <h5>
                      {new Date(item.dt_txt).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </h5>

                    <img
                      src={importIcon(getWeatherIcon(item.weather[0].id))}
                      className="forecast-item-img"
                      alt=""
                    />

                    <h5>{Math.round(item.main.temp)} °C</h5>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
}  
