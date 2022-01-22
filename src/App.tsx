import React, { useState, useEffect, useRef, createRef } from "react";
import { AppContainer, CardPlaceholder } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { NewItemForm } from "./components/NewItemForm";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";

export const App = () => {
  const { tasks, dispatch } = useAppState();

  //const refs = useRef<HTMLDivElement[]>([]);
  //const ref = useRef<HTMLDivElement>(null);
  //ref={index === 0 ? refs[index] : undefined}
  const ref = useRef(createRef<HTMLDivElement>());
  const [h0, setH0] = useState<number>(100);

  const getRef = (val: any) => {
    ref.current = val;
    console.log("val = ", val);
  };

  console.log("tasks = ", tasks);
  let newItemFormId: string = (tasks.length + 1).toString();

  return (
    <AppContainer>
      {tasks.map((task, index) => (
        <WeatherCard
          text={task.text}
          id={task.idTask}
          key={task.idTask}
          index={index}
          getRef={getRef}
          height={null}
          h0={h0}
          setH0={setH0}
        />
      ))}

      <NewItemForm
        id={newItemFormId}
        onAdd={(text) => dispatch(addTask(text, newItemFormId))}
      ></NewItemForm>

      {/* {tasks.map((task) => (
        <CardPlaceholder key={task.idTask} />
      ))} */}
    </AppContainer>
  );
};

export default App;
