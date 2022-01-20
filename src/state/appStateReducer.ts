import { Action } from "./actions";
import { nanoid } from "nanoid";
import {
  findItemIndexById,
  moveItem,
  removeItemAtIndex,
} from "../utils/arrayUtils";
import { DragItem } from "../DragItem";
import { WeatherCardProps } from "../components/WeatherCard.props";

export type Task = {
  idTask: string;
  text: string;
};
export type List = {
  idList: string;
  text: string;
  tasks: Task[];
};
export type AppState = {
  draggedItem: DragItem | null;
  timeZoneApiDelay: number;
  list: List;
};

// useImmerReducer. Here we renamed the state into draft, so we know that we can mutate it. Also we’ve
// changed the ADD_LIST case so that it just pushes the new list object to the lists array.
// We don’t need to return the new state value anymore, ImmerJS will handle it
// automatically.
// We also updated the return type of our reducer. The type is now AppState | void.
// Sometimes we still might need to return a new instance of the state, for example to
// reset the state to the initial value, but as we usually won’t return anything - we added
// the void type to the union
export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "SET_DRAGGED_TASK": {
      draft.draggedItem = action.payload;
      break;
    }
    case "ADD_TASK": {
      const { text, taskId } = action.payload;
      draft.list.tasks.push({
        idTask: nanoid(),
        text: text,
      });
      break;
    }
    case "MOVE_TASK": {
      //console.log("MOVE_TASK START idList = ", draft.list.idList);
      //if (draft.list.idList === "1") return;

      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.list.tasks, draggedId);
      const hoverIndex = findItemIndexById(draft.list.tasks, hoverId);
      console.log("dragIndex=", dragIndex, "hoverIndex=", hoverIndex);

      draft.list.tasks = moveItem(draft.list.tasks, dragIndex, hoverIndex);
      break;
    }
    case "DELETE_TASK": {
      const { taskId } = action.payload;
      console.log("-----Number(taskId)= ", Number(taskId));
      const deleteIndex = findItemIndexById(draft.list.tasks, taskId);
      draft.list.tasks = removeItemAtIndex(draft.list.tasks, deleteIndex);
      break;
    }
    // ...
    default: {
      break;
    }
  }
};
