import React, { useEffect, useState } from "react";
import { getWeatherInfo } from "./apiUtils";
import { WeatherCardProps } from "../components/WeatherCard.props";
import { useAppState } from "../state/AppStateContext";

export const useGetWeather = (city: string): WeatherCardProps => {
  const [weatherInfoState, setWeatherInfoState] = useState<WeatherCardProps>(
    {} as WeatherCardProps
  );

  //let { weatherInfoArray } = useAppState();

  useEffect(() => {
    const f = async () => {
      const weatherInfo = await getWeatherInfo(city);
      setWeatherInfoState(weatherInfo);
      //   weatherInfoArray.push(weatherInfo);
    };

    f();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return weatherInfoState;
};
