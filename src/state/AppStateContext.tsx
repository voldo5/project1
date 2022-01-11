import { createContext, useContext, Dispatch, FC } from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { findItemIndexById } from "../utils/arrayUtils";

type AppStateContextProps = {
  list: List;
  findItemIndexById(items: Task[], id: string): number;
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appData: AppState = {
  list: {
    id: "0",
    text: "",
    tasks: [
      { id: "0", text: "kiyv" },
      { id: "1", text: "mumbai" },
      { id: "2", text: "Haifa, IL" },
    ],
  },
};

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { list } = state;

  const getTaskByTaskId = (id: string) => {
    return list.tasks.find((task) => task.id === id || []);
  };

  return (
    <AppStateContext.Provider value={{ list, findItemIndexById, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
type Item = {
  id: string;
};

// export const findItemIndexById = <TItem extends Item>(
//   items: TItem[],
//   id: string
// ) => {
//   return items.findIndex((item: TItem) => item.id === id);
// };

export const useAppState = () => {
  return useContext(AppStateContext);
};
