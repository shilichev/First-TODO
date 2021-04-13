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
      return [action.payload, ...state];
    },
    deleteTodoById(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodoById(state, action) {
      console.log(action);
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }

        return item;
      });
    },
  },
});
export default todosSlice.reducer;
export const {
  addTodo,
  setTodoList,
  deleteTodoById,
  updateTodoById,
} = todosSlice.actions;
