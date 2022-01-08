import React, { useState, useEffect } from "react";
import { WeatherInfo } from "../utils/useGetInfo";
// import {
//   Widget,
//   WeatherIcon,
//   WeatherDescription,
//   Temperature,
//   Description,
//   WeatherCondition,
//   Place,
//   CalendarDate,
//   ExtraTemp,
//   ExtraInfoLeftSide,
//   TwoSidedSection,
// } from "./weatherDetail.styles";
import * as S from "./weatherDetail.styles";

function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}: WeatherInfo) {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  //conveting the seconds in time
  let sec: number = sunset;
  let date: Date = new Date(sec * 1000);
  let timeStr: string = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <S.Widget>
        <S.WeatherIcon className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
          <S.Description>
            <S.WeatherCondition>{weatherType}</S.WeatherCondition>
            <S.Place>
              {name}, {country}
            </S.Place>
          </S.Description>
        </S.WeatherIcon>

        <S.WeatherDescription>
          <S.Temperature>
            <span>{temp}&deg;</span>
          </S.Temperature>
          <S.CalendarDate>{new Date().toLocaleString()}</S.CalendarDate>
        </S.WeatherDescription>

        {/* <S.CalendarDate>{new Date().toLocaleString()}</S.CalendarDate> */}

        <S.ExtraTemp>
          <div className="extra-info">
            <S.TwoSidedSection>
              <p className="w-icon">
                <i className={"wi wi-humidity"}></i>
              </p>
              <S.ExtraInfoLeftSide>
                {humidity} <br />
                Humidity
              </S.ExtraInfoLeftSide>
            </S.TwoSidedSection>
            <S.TwoSidedSection>
              <p className="w-icon">
                <i className={"wi wi-rain"}></i>
              </p>
              <S.ExtraInfoLeftSide>
                {pressure} <br />
                Pressure
              </S.ExtraInfoLeftSide>
            </S.TwoSidedSection>

            <S.TwoSidedSection>
              <p className="w-icon">
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <S.ExtraInfoLeftSide>
                {speed} <br />
                Speed
              </S.ExtraInfoLeftSide>
            </S.TwoSidedSection>
          </div>
        </S.ExtraTemp>
      </S.Widget>
    </>
  );
}

export default WeatherDetails;
