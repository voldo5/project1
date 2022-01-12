export type Action =
  //   | {
  //       type: "ADD_LIST";
  //       payload: string;
  //     }
  {
    type: "ADD_TASK";
    payload: { text: string; taskId: string };
  };

export const addTask = (text: string, taskId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    taskId,
  },
});

// export const addList = (text: string): Action => ({
//   type: "ADD_LIST",
//   payload: text,
// });
