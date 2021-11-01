const getDaysWeather = (CityName, lang, units) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${CityName}&lang=${lang}&units=${units}&appid=2298ad5da860eaa72f49a587eed1dce8`;
  return fetch(url);
};

const getCurrentWeather = (CityName, lang = "en") => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${CityName}&lang=${lang}&units=metric&appid=2298ad5da860eaa72f49a587eed1dce8`;
  return fetch(url);
};

export { getDaysWeather, getCurrentWeather };
