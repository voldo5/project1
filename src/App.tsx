import React from "react";
import { AppContainer } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { NewItemForm } from "./components/NewItemForm";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";

export const App = () => {
  const { list, dispatch } = useAppState();
  console.log("list = ", list);
  let newItemFormId: string = (list.tasks.length + 1).toString();
  return (
    <AppContainer>
      {list.tasks.map((task) => (
        <WeatherCard text={task.text} id={task.id} key={task.id} />
      ))}

      <NewItemForm
        id={newItemFormId}
        onAdd={(text) => dispatch(addTask(text, newItemFormId))}
      ></NewItemForm>
    </AppContainer>
  );
};

export default App;
