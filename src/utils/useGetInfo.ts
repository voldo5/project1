import React, { useEffect, useState } from "react";
//import WeatherAPI from "../interfaces/weatherAPI";
import { WeatherAPI, Main, Wind, Sys, Weather } from "../interfaces/weatherAPI";
//import "../components/style.css";

// function SearchMain() {
//   const [searchTerm, setSearchTerm] = useState("kiev");
//   const [tempInfo, setTempInfo] = useState({});

export type WeatherInfo = {
  temp: Main["temp"];
  humidity: Main["humidity"];
  pressure: Main["pressure"];
  weatherType: Weather["main"];
  name: WeatherAPI["name"];
  speed: Wind["speed"];
  country: Sys["country"];
  sunset: Sys["sunset"];
};

export const useGetWeather = () => {
  const [tempInfo, setTempInfo] = useState<WeatherInfo | undefined>(undefined);

  useEffect(() => {
    getWeatherInfo(setTempInfo);
    console.log("tempInfo = ", tempInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return tempInfo;
};

export const getWeatherInfo = async (
  setTempInfo: React.Dispatch<React.SetStateAction<WeatherInfo | undefined>>
) => {
  try {
    //   let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=f840f08444c59ce09a2fbb87f9bff214`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${"kyiv"}&units=metric&appid=54564adc4a3e0ada20cd7cb1a5888d81`;

    let res = await fetch(url);
    //let data = await res.json();
    let weatherInfo = (await res.json()) as WeatherAPI;
    console.log("weatherInfo = ", weatherInfo);
    const { temp, humidity, pressure } = weatherInfo.main;
    const { main: weatherType } = weatherInfo.weather[0];
    const { name } = weatherInfo;
    const { speed } = weatherInfo.wind;
    const { country, sunset } = weatherInfo.sys;

    const myNewWeatherInfo: WeatherInfo = {
      temp,
      humidity,
      pressure,
      weatherType,
      name,
      speed,
      country,
      sunset,
    };
    console.log("myNewWeatherInfo = ", myNewWeatherInfo);
    setTempInfo(myNewWeatherInfo);
    //console.log("tempInfo = ", tempInfo);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//   useEffect(() => {
//     getWeatherInfo();
//   }, []);

//   useEffect(() => {
//     getWeatherInfo();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//       <div className="wrap">
//         <div className="search">
//           <input
//             type="search"
//             placeholder="Search city.."
//             id="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="searchButton" onClick={getWeatherInfo}>
//             Search
//           </button>
//         </div>
//       </div>
//     </>
//   );
//};

//export default SearchMain;
