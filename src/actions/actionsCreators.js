import {
  ADD_NEW_TODO,
  DELETE_TODO_BY_ID,
  UPDATE_TODO_BY_ID,
  SET_TODOS_LIST,
} from "../constants/constants";
export const addTodo = (newTodo) => ({
  type: ADD_NEW_TODO,
  newTodo,
});

export const updateTodoById = (id, newTodo) => ({
  type: UPDATE_TODO_BY_ID,
  id,
  newTodo,
});

export const deleteTodoById = (id) => ({
  type: DELETE_TODO_BY_ID,
  id,
});
export const setTodos = (todos) => ({
  type: SET_TODOS_LIST,
  todos,
});
