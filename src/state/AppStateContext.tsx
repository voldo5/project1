import { createContext, useContext, Dispatch, FC } from "react";
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { findItemIndexById } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

type AppStateContextProps = {
  draggedItem: DragItem | null;
  list: List;
  findItemIndexById(items: Task[], id: string): number;
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

// Cherkasy; Odesa, UA; Tel Aviv, IL; Jerusalem, IL, Boston, US; Mississauga, CA; Khmelnytskyi, UA;
// const appData: AppState = {
//   list: {
//     idList: "0",
//     text: "",
//     tasks: [
//       { idTask: "0", text: "Kyiv" },
//       { idTask: "1", text: "Haifa" },
//     ],
//   },
//   draggedItem: null,
// };

const appData: AppState = {
  draggedItem: null,
  list: {
    idList: "0",
    text: "",
    tasks: [
      { idTask: "0", text: "kyiv" },
      { idTask: "1", text: "Cherkasy" },
      { idTask: "2", text: "Khmelnytskyi, UA" },
      { idTask: "3", text: "Haifa, IL" },
      { idTask: "4", text: "Tel Aviv, IL" },
      { idTask: "5", text: "Toronto, CA" },
      { idTask: "6", text: "Mississauga, CA" },
    ],
  },
};
// { id: "8", text: "Rome, IT" },
//use useImmerReducer instead of useReducer
export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  //useImmerReducer<S = any, A = any>(reducer: Reducer<S, A>, initialState: S, initialAction?
  const { draggedItem, list } = state;
  console.log("list1 = ", list);

  return (
    <AppStateContext.Provider
      value={{
        draggedItem,
        list,
        findItemIndexById,
        dispatch,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
