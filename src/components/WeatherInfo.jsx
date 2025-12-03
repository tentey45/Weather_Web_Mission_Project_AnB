import React from 'react'



export default function WeatherInfo({ weather }) {
    if (!weather) return null
    const { name, main, weather: w, wind } = weather
    const condition = w && w[0]


    return (
        <section className="weather-info">
            <div className="location-date-container">
                <div className="location">
                    <span className="material-symbols-outlined">location_on</span>
                    <h4 className="country-txt">{name}</h4>
                </div>
                <h5 className="current-date-txt">{new Date().toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' })}</h5>
            </div>


            <div className="weather-summary-container">
                <img src={`/assets/weather/${condition ? condition.iconFilename : ''}`} alt={condition ? condition.main : ''}
                    className="weather-summary-img" />
                <div className="weater-summary-info">
                    <h1 className="temp-txt">{Math.round(main.temp)} °C</h1>
                    <h3 className="condition-txt">{condition ? condition.main : ''}</h3>
                </div>
            </div>


            <div className="weather-conditions-container">
                <div className="condition-item">
                    <span className="material-symbols-outlined">water_drop</span>
                    <div className="condition-info">
                        <h5 className="regular-txt">Humidity</h5>
                        <h5 className="humidity-value-txt">{main.humidity} %</h5>
                    </div>
                </div>


                <div className="condition-item">
                    <span className="material-symbols-outlined">air</span>
                    <div className="condition-info">
                        <h5 className="regular-txt">Wind Speed</h5>
                        <h5 className="wind-value-txt">{wind.speed} M/s</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}