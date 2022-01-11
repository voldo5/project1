import React from "react";
import { AppContainer } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { useGetWeather } from "./utils/useGetWeather";
import { WeatherCardProps } from "./components/WeatherCard.props";
import { NewItemForm } from "./components/NewItemForm";
import { useAppState } from "./state/AppStateContext";

export const App = () => {
  const { list, dispatch } = useAppState();
  //const [tempInfo, setTempInfo] = useState({});
  const tempInfo: WeatherCardProps = useGetWeather("kyiv");
  let city: string = "kyiv";
  let id: string = "1";

  //<Column text={list.text} key={list.id} id={list.id} />
  //{tempInfo && <WeatherCard text={city} id={id} />}
  console.log("App tempInfo = ", tempInfo);
  return (
    <AppContainer>
      {list.tasks.map((task) => (
        <WeatherCard text={task.text} id={task.id} />
      ))}

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
