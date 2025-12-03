export function getWeatherIcon(id) {
  if (id >= 200 && id <= 232) return "storm.svg";  
  if (id >= 300 && id <= 321) return "drizzle.svg";  
  if (id >= 500 && id <= 531) return "rain.svg";  
  if (id >= 600 && id <= 622) return "snow.svg";  
  if (id === 800) return "clear.svg";  
  if (id >= 801 && id <= 804) return "cloud.svg";  
  return "rain.svg";
}
