import { todoContainer } from "./../content/todoContainer";

const initialState = todoContainer;

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_NEW_TODO") {
    return [action.newTodo, ...state];
  }
  if (action.type === "UPDATE_TODO_BY_ID") {
    return state.map((item) => {
      if (item.id === action.id) {
        return { ...item, ...action.newTodo };
      }
      return item;
    });
  }
  if (action.type === "DELETE_TODO_BY_ID") {
    return state.filter((item) => item.id !== action.id);
  }
  return state;
};

export default todosReducer;
