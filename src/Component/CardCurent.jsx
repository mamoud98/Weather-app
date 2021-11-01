import React from "react";
import { Link } from "react-router-dom";
import { getdate, getday, getmonths } from "../service/data";
// /Weather
function CardCurent(props) {
  return (
    <>
      <div className="d-flex mt-5 justify-content-center flex-wrap">
        {props.dataCurrentWeather &&
          props.dataCurrentWeather.map((Current, i) => (
            <Link
              className="text-decoration-none"
              to={`/Weather/${Current.name}`}
            >
              <div
                key={i}
                className="parent border rounded py-3 px-5 me-4 mb-4 text-black"
              >
                <h1 className="text-center mb-4">{Current.name}</h1>
                <div className="mb-5 d-flex  ">
                  <p className="me-2 fw-bold">
                    {getmonths(new Date().getMonth())}
                    {" "}
                  {new Date().getDate()}
                  <sup>{getdate(new Date().getDate())}</sup>,
                  </p>
                  <p className="me-2">{getday(new Date().getDay())}</p>
                  <p>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    className="img-fluid"
                    style={{
                      border: "0",
                      boxShadow: "0 2px 6px 0 hsl(0deg 0% 0% / 20%)",
                    }}
                    src={`http://openweathermap.org/img/wn/${Current.weather[0].icon}@2x.png`}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <h2 className="h1 me-2 text-center mt-3 mb-4">
                  {Current.main.temp}
                </h2>
                <h2>
                  <sup>o</sup>C
                </h2>
                </div>
                <p className="text-center">{Current.weather[0].description}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default CardCurent;
