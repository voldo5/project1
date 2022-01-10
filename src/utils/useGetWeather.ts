import React, { useEffect, useState } from "react";
import { WeatherAPI } from "../interfaces/weatherAPI";
import { WeatherCardProps } from "../components/WeatherCard.props";

// function SearchMain() {
//   const [searchTerm, setSearchTerm] = useState("kiev");
//   const [tempInfo, setTempInfo] = useState({});

export const useGetWeather = (city: string) => {
  const [tempInfo, setTempInfo] = useState<WeatherCardProps | undefined>(
    undefined
  );

  useEffect(() => {
    getWeatherInfo(setTempInfo, city);
    console.log("tempInfo = ", tempInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return tempInfo;
};

export const getWeatherInfo = async (
  setTempInfo: React.Dispatch<
    React.SetStateAction<WeatherCardProps | undefined>
  >,
  city: string
) => {
  try {
    //let url = `http://api.openweathermap.org/data/2.5/weather?q=${"kyiv"}&units=metric&appid=54564adc4a3e0ada20cd7cb1a5888d81`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=54564adc4a3e0ada20cd7cb1a5888d81`;
    let res = await fetch(url);
    let weatherInfo = (await res.json()) as WeatherAPI;
    //console.log("weatherInfo = ", weatherInfo);
    const { temp, humidity, pressure } = weatherInfo.main;
    const { main: weatherType } = weatherInfo.weather[0];
    const { name } = weatherInfo;
    const { speed } = weatherInfo.wind;
    const { country } = weatherInfo.sys;

    const myNewWeatherInfo: WeatherCardProps = {
      temp,
      humidity,
      pressure,
      weatherType,
      name,
      speed,
      country,
    };
    console.log("myNewWeatherInfo = ", myNewWeatherInfo);
    setTempInfo(myNewWeatherInfo);
    //console.log("tempInfo = ", tempInfo);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
