import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardFivedays from "../Component/CardFivedays";
import { getDaysWeather } from "../service/api";
// WiFahrenheit

function Weather() {
  const [weather, setWeather] = useState([]);
  const [weatherDats, setWeatherDays] = useState([]);

  const params = useParams();
  // console.log(params.country);

  const data = () => {
    getDaysWeather(params.country, "en", "standard")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        return data;
      })
      .then((weaterdata) => {
        const arry = [];
        for (let i = 0; i < weaterdata.list.length; i += 8) {
          arry.push(weaterdata.list[i]);
          console.log(arry);
        }
        setWeatherDays(arry);
      });
  };

  useEffect(async () => {
    await data();
  }, []);

  return (
    <>
      <div className="container">
        <h1
          className="text-center"
          style={{ backgroundColor: "#ddd", padding: "5rem" }}
        >
          5-Day Forecast
        </h1>
        <p className="text-center mt-4">
          {params.country}, {weather.city && weather.city.country}
        </p>
        {/* {weatherDats ? JSON.stringify(weatherDats) : <h1>ss</h1>} */}
        <CardFivedays weatherDats={weatherDats} />
      </div>
    </>
  );
}

export default Weather;
