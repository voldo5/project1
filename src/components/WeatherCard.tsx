import * as React from "react";
import { useState, useEffect } from "react";
import * as S from "./weatherCard.styles";
import { useGetWeather } from "../utils/useGetWeather";
//import ReactDOM from "react-dom";
import FlagIcon from "./FlagIcon.js";
//import { convertTypeAcquisitionFromJson } from "typescript";

type CardProps = {
  text: string;
  id: string;
};

function WeatherCard({ text, id }: CardProps): JSX.Element {
  const [weatherState, setWeatherState] = useState("");

  const { temp, humidity, pressure, weatherType, name, speed, country } =
    useGetWeather(text);

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

  const flagProps = {
    code: country ? country.toLowerCase() : "ua",
    size: "lg",
  };

  return (
    <>
      <S.CardContainer gridArea={id}>
        <S.WeatherIcon>
          <i className={`wi ${weatherState}`}></i>
        </S.WeatherIcon>
        <S.WeatherCondition>{weatherType}</S.WeatherCondition>
        <S.Place>
          <FlagIcon code={flagProps.code} size={flagProps.size} />
          &nbsp;&nbsp;&nbsp;
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
