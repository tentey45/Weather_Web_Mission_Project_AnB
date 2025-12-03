import React from 'react'


export default function ForecastItem({ date, icon, temp }) {
return (
<div className="forecast-item">
<h5 className="forecast-item-date regular-txt">{date}</h5>
<img src={`/assets/weather/${icon}`} className="forecast-item-img" alt="forecast" />
<h5 className="forecast-item-temp">{Math.round(temp)} °C</h5>
</div>
)
}