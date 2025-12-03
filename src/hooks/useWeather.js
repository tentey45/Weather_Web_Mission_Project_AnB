import { useState } from "react";
import { getWeatherByCity } from "../api/weather";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  async function search(city) {
    try {
      setLoading(true);
      const result = await getWeatherByCity(city);
      setWeather(result);
    } finally {
      setLoading(false);
    }
  }

  return { weather, loading, search };
}
