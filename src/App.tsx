import React from "react";
import { AppContainer } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { useGetWeather } from "./utils/useGetWeather";
import { WeatherCardProps } from "./components/WeatherCard.props";
import { NewItemForm } from "./components/NewItemForm";

export const App = () => {
  //const [tempInfo, setTempInfo] = useState({});
  const tempInfo: WeatherCardProps | undefined = useGetWeather("kyiv");
  console.log("App tempInfo = ", tempInfo);
  return (
    <AppContainer>
      {tempInfo && <WeatherCard {...tempInfo} />}
      <NewItemForm
        onAdd={(text: string) => {
          text = "new";
        }}
      ></NewItemForm>
    </AppContainer>
  );
};

//className={cn(className, styles.header)} {...props}
//<NewItemForm { ...onAdd = ("New card") => {"new"}} {...props}></NewItemForm>

export default App;
