import React from "react";
import { getdate, getday, getmonths } from "../service/data";
function CardFivedays(props) {
  console.log(props);
  return (
    <>
      <div className="d-flex mt-5 justify-content-center flex-wrap">
        {props.weatherDats &&
          props.weatherDats.map((Current, i) => (
            <div key={i} className="parent border rounded py-3 px-3 me-4 mb-4">
              <h1 className="text-center mb-4">
                {getday(new Date(Current.dt_txt).getDay())}
              </h1>
              <div className="mb-5 d-flex justify-content-center ">
                <p className="me-2">
                  {getmonths(new Date(Current.dt_txt).getMonth())}{" "}
                  {new Date(Current.dt_txt).getDate()}
                  <sup>{getdate(new Date(Current.dt_txt).getDate())}</sup>,
                </p>
                <p className="me-2">
                  {new Date(Current.dt_txt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
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
                <h2 className="h1 text-center me-2 mt-3 mb-4">
                  {Current.main.temp}
                </h2>
                <h2>
                  {" "}
                  <sup>o</sup>F
                </h2>
              </div>

              <p className="text-center">{Current.weather[0].description}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default CardFivedays;
