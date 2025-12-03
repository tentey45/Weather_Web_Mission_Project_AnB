import "./Home.css";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useWeather";

export default function Home() {
  const { weather, loading, search } = useWeather();

  return (
    <div className="home-container">
      <SearchBar onSearch={search} />

      {loading && <p>Loading...</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
