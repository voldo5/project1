import React, { useState, useEffect, useRef, createRef } from "react";
import { AppContainer, CardPlaceholder } from "./app.styles";
import WeatherCard from "./components/WeatherCard";
import { NewItemForm } from "./components/NewItemForm";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";
import { CardSize } from "./interfaces/interface";
import { CARD_SIZE } from "./state/data";

export const App = () => {
  const { tasks, dispatch } = useAppState();

  //const refs = useRef<HTMLDivElement[]>([]);
  //const ref = useRef<HTMLDivElement>(null);

  //const ref = useRef(createRef<HTMLDivElement>());
  const ref = useRef(createRef<HTMLButtonElement>());
  const [cardSize, setCardSize] = useState<CardSize>(CARD_SIZE);

  //   const getRef = (val: any) => {
  //     ref.current = val;
  //     console.log("getRef val = ", val);
  //   };

  //console.log("tasks = ", tasks);
  let newItemFormId: string = (tasks.length + 1).toString();

  //getRef={getRef}
  return (
    <AppContainer>
      {tasks.map((task, index) => (
        <WeatherCard
          text={task.text}
          id={task.idTask}
          key={task.idTask}
          index={index}
          //   height={null}
          cardSize={cardSize}
          setCardSize={setCardSize}
        />
      ))}

      <NewItemForm
        id={newItemFormId}
        onAdd={(text) => dispatch(addTask(text, newItemFormId))}
        cardSize={cardSize}
      ></NewItemForm>

      {/* {tasks.map((task) => (
        <CardPlaceholder key={task.idTask} />
      ))} */}
    </AppContainer>
  );
};

export default App;
