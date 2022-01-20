import * as React from "react";
import { useState, useEffect } from "react";
import * as S from "./weatherCard.styles";
import { useGetWeather } from "../utils/useGetWeather";
import FlagIcon from "./FlagIcon.js";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useItemDrag } from "../utils/useItemDrag";
import { useAppState } from "../state/AppStateContext";
import { useDrop } from "react-dnd";
import { moveTask, addTask, deleteTask } from "../state/actions";
import { isHidden } from "../utils/isHidden";
import { WeatherCardProps } from "./WeatherCard.props";

type CardProps = {
  text: string;
  id: string;
};

//idTask
function WeatherCard(cardProps: CardProps): JSX.Element {
  const [weatherState, setWeatherState] = useState("");
  let { draggedItem, list, findItemIndexById, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "CARD",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "CARD") {
        if (draggedItem.id === cardProps.id) {
          return;
        }
        dispatch(moveTask(draggedItem.id, cardProps.id));
      }
    },
  });

  const { drag } = useItemDrag({
    id: cardProps.id,
    text: cardProps.text,
    type: "CARD",
  });

  let weather: WeatherCardProps = useGetWeather(cardProps.text);
  console.log("weather.dt = ", weather.dt);
  let localTime = new Date(weather.dt * 1000).toLocaleString("en-US");
  console.log("----weather.dt = ", localTime);
  //var today = new Date();
  //var milliseconds = new Date(milliseconds);
  //var milliseconds = today.getMilliseconds();

  useEffect(() => {
    if (weather.weatherType) {
      switch (weather.weatherType) {
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
  }, [weather.weatherType]);

  drag(drop(ref));

  const flagProps = {
    code: weather.country ? weather.country.toLowerCase() : "ua",
    size: "lg",
  };

  return (
    <>
      <S.CardContainer
        ref={ref}
        isHidden={isHidden(draggedItem, "CARD", cardProps.id)}
      >
        <S.WeatherIcon>
          <i className={`wi ${weatherState}`}></i>
        </S.WeatherIcon>
        <S.WeatherCondition>{weather.weatherType}</S.WeatherCondition>
        <S.Place>
          <FlagIcon code={flagProps.code} size={flagProps.size} />
          &nbsp;&nbsp;&nbsp;
          {weather.name}, {weather.country}
        </S.Place>
        <S.Temperature>
          <span>{weather.temp}&deg;</span>
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
          {weather.humidity} <br />
          Humidity
        </S.HumidityValue>
        <S.PressureIcon>
          <i className={"wi wi-rain"}></i>
        </S.PressureIcon>
        <S.PressureValue>
          {weather.pressure} <br />
          Pressure
        </S.PressureValue>
        <S.WindIcon>
          <i className={"wi wi-strong-wind"}></i>
        </S.WindIcon>
        <S.WindValue>
          {weather.speed} <br />
          Wind
        </S.WindValue>
        <S.DeleteIcon
          onClick={() => {
            dispatch(deleteTask(cardProps.id));
          }}
        >
          <FaTimes />
        </S.DeleteIcon>
        <S.LocalTime>{weather.timeHourMinutes}</S.LocalTime>
      </S.CardContainer>
    </>
  );
}
//onAdd={(text) => dispatch(addTask(text, newItemFormId))}
//const d = new Date(100000000000);
export default WeatherCard;

//   {
//     new Date(weather.dt).toLocaleString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       hour12: false,
//     });
//   }
