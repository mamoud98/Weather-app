import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CardCurent from "../Component/CardCurent";
import {getCurrentWeather } from "../service/api";


function Country() {
  const [dataCurrentWeather, setDataCurrentWeather] = useState([]);

  const country = useSelector((state) => state.We.countries);

  const CurrentWeather = async () => {
    const arry = [];
    try {
      for (let i = 0; i < country.length; i++) {
        const response = await getCurrentWeather(country[i], "en");
        const json = await response.json();
        arry.push(json);
      }
      setDataCurrentWeather(arry);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CurrentWeather();
  }, []);
  console.log(dataCurrentWeather);

  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 text-center">Current Weather</h1>
        <CardCurent dataCurrentWeather={dataCurrentWeather} />
      </div>
    </div>
  );
}

export default Country;
