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
  //ref={index === 0 ? refs[index] : undefined}
  const ref = useRef(createRef<HTMLDivElement>());
  //const [cardSize, setCardSize] = useState<{width: number, height: number}>({width: 160, height: 280});
  const [cardSize, setCardSize] = useState<CardSize>(CARD_SIZE);
  //   const [cardSize, setCardSize] = useState<CardSize>({
  //     width: 160,
  //     height: 280,
  //   });

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
