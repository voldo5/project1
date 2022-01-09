import React, { useState, useEffect } from "react";
import { WeatherInfo } from "../utils/useGetInfo";
import * as S from "./weatherCard.styles";

function WeatherCard({
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
  console.log(
    "WeatherCard tempInfo = ",
    temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    sunset
  );
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
        case "Snow":
          setWeatherState("wi-day-snow");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  return (
    <>
      <S.CardContainer>
        <S.WeatherIcon>
          <i className={`wi ${weatherState}`}></i>
        </S.WeatherIcon>

        <S.WeatherCondition>{weatherType}</S.WeatherCondition>

        <S.Place>
          {name}, {country}
        </S.Place>

        <S.Temperature>
          <span>{temp}&deg;</span>
        </S.Temperature>
        <S.CalendarDate1>
          {new Date().toLocaleString("en-US", {
            weekday: "long",
          })}
        </S.CalendarDate1>
        <S.CalendarDate2>
          {new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </S.CalendarDate2>

        <S.HumidityIcon>
          <i className={"wi wi-humidity"}></i>
        </S.HumidityIcon>
        <S.HumidityValue>
          {humidity} <br />
          Humidity
        </S.HumidityValue>

        <S.PressureIcon>
          <i className={"wi wi-rain"}></i>
        </S.PressureIcon>
        <S.PressureValue>
          {pressure} <br />
          Pressure
        </S.PressureValue>

        <S.WindIcon>
          <i className={"wi wi-strong-wind"}></i>
        </S.WindIcon>
        <S.WindValue>
          {speed} <br />
          Wind
        </S.WindValue>
      </S.CardContainer>
    </>
  );
}

export default WeatherCard;
