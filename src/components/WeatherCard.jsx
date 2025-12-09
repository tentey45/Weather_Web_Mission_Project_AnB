import "./WeatherCard.css";

export default function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2 className="city">{weather.name}</h2>
      <p className="temp">{weather.main.temp}°C</p>
      <p className="desc">{weather.weather[0].description}</p>
    </div>
  );
}
