const initialState = [];

const todosReducer = (state = initialState, action) => {
  if (action.type === "ADD_NEW_TODO") {
    return [state, ...action.newTodo];
  }
  if (action.type === "UPDATE_TODO_BY_ID") {
    return state.todos.map((item) => {
      if (item.id === id) {
        return { ...item, ...newTodo };
      }
      return item;
    });
  }
  if (action.type === "DELETE_TODO_BY_ID") {
    return state.filter((item) => item.id !== id);
  }
  return state;
};

export default todosReducer;
