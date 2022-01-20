import React, { useEffect, useState, useContext, useRef } from "react";
//import { createContext, useContext, Dispatch, FC } from "react";
import { getWeatherInfo, getTimeZoneInfo } from "./apiUtils";
import { WeatherCardProps } from "../components/WeatherCard.props";
import { useAppState } from "../state/AppStateContext";

export const useGetWeather = (city: string): WeatherCardProps => {
  const [weatherInfoState, setWeatherInfoState] = useState<WeatherCardProps>(
    {} as WeatherCardProps
  );

  let { timeZoneApiDelay, incrementDelay } = useAppState();

  useEffect(() => {
    const f = async () => {
      const weatherInfo = await getWeatherInfo(city);
      console.log("--weatherInfo = ", weatherInfo);
      setWeatherInfoState(weatherInfo);
    };

    f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const f1 = async () => {
      const timeZoneInfo = await getTimeZoneInfo(
        weatherInfoState.lon,
        weatherInfoState.lat
      );
      console.log("----timeZoneInfo = ", timeZoneInfo);
      let localTimeHM = new Date(timeZoneInfo.timestamp * 1000).toLocaleString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        }
      );
      console.log("----localTimeHM = ", localTimeHM);
      setWeatherInfoState({
        ...weatherInfoState,
        timeHourMinutes: localTimeHM,
      });
    };

    if (
      Object.keys(weatherInfoState).length > 0 &&
      weatherInfoState.timeHourMinutes === ""
    ) {
      incrementDelay();
      console.log("timeZoneApiDelay= ", timeZoneApiDelay);
      timerRef.current = setTimeout(f1, timeZoneApiDelay);
    }

    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [weatherInfoState.dt]);

  return weatherInfoState;
};
