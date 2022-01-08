import React from "react";
import { AppContainer } from "./app.styles";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherInfo, useGetWeather } from "./utils/useGetInfo";

export const App = () => {
  //const [tempInfo, setTempInfo] = useState({});
  const tempInfo: WeatherInfo | undefined = useGetWeather();
  //const temp = tempInfo as WeatherInfo;
  console.log("tempInfo = ", tempInfo);
  //	{ temp, humidity, pressure, weatherType, speed, country, sunset } = tempInfo as WeatherInfo;
  return (
    <AppContainer>
      {tempInfo && <WeatherDetails {...tempInfo} />}
      Card will go here
    </AppContainer>
  );
};

export default App;
