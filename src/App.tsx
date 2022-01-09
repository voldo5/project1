import React from "react";
import { AppContainer } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { WeatherInfo, useGetWeather } from "./utils/useGetInfo";

export const App = () => {
  //const [tempInfo, setTempInfo] = useState({});
  const tempInfo: WeatherInfo | undefined = useGetWeather();
  //const temp = tempInfo as WeatherInfo;
  console.log("App tempInfo = ", tempInfo);
  //	{ temp, humidity, pressure, weatherType, speed, country, sunset } = tempInfo as WeatherInfo;
  return (
    <AppContainer>{tempInfo && <WeatherCard {...tempInfo} />}</AppContainer>
  );
};

export default App;
