import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoList(action) {
      return action.todos;
    },
    addTodo(state, action) {
      return [action.payload, ...state]
    },
  },
});
export default todosSlice.reducer;
export const { addTodo, setTodoList } = todosSlice.actions;
