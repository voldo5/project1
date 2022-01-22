import { useState, createContext, useContext, Dispatch, FC } from "react";
import { appStateReducer, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { findItemIndexById } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";
import { appData } from "./data";

type AppStateContextProps = {
  tasks: Task[];
  draggedItem: DragItem | null;
  timeZoneApiDelay: number;
  dispatch: Dispatch<Action>;
  findItemIndexById(items: Task[], id: string): number;
  incrementDelay(msDelay: number): void;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

//use useImmerReducer instead of useReducer
export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { draggedItem, tasks } = state;
  const [timeZoneApiDelay, setTimeZoneApiDelay] = useState(0);
  function incrementDelay(msDelay: number): void {
    setTimeZoneApiDelay(timeZoneApiDelay + msDelay);
  }

  //console.log("tasks1 = ", tasks);
  return (
    <AppStateContext.Provider
      value={{
        tasks,
        draggedItem,
        timeZoneApiDelay,
        dispatch,
        findItemIndexById,
        incrementDelay,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
