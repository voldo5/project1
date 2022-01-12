import React, { useEffect, useState } from "react";
import { getWeatherInfo } from "./apiUtils";
import { WeatherCardProps } from "../components/WeatherCard.props";

export const useGetWeather = (city: string): WeatherCardProps => {
  const [weatherInfoState, setWeatherInfoState] = useState<WeatherCardProps>(
    {} as WeatherCardProps
  );

  useEffect(() => {
    const f = async () => {
      const weatherInfo = await getWeatherInfo(city);
      setWeatherInfoState(weatherInfo);
    };

    f();

    console.log("weatherInfo = ", weatherInfoState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return weatherInfoState;
};
