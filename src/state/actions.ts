export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string };
    };

export const addTask = (text: string, taskId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
  },
});

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});
