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

// Cherkasy; Odesa, UA; Tel Aviv, IL; Jerusalem, IL, Boston, US; Mississauga, CA; Khmelnytskyi, UA;
const appData: AppState = {
  list: {
    id: "0",
    text: "",
    tasks: [
      { id: "1", text: "kyiv" },
      { id: "2", text: "Cherkasy" },
      { id: "3", text: "Khmelnytskyi, UA" },
      { id: "4", text: "Haifa, IL" },
      { id: "5", text: "Tel Aviv, IL" },
      { id: "6", text: "Toronto, CA" },
      { id: "7", text: "Mississauga, CA" },
      { id: "8", text: "Rome, IT" },
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

export const useAppState = () => {
  return useContext(AppStateContext);
};
