export const addNewTodo = (newTodo) => ({
  type: "ADD_NEW_TODO",
  id,
  newTodo,
});

export const updateTodoById = () => ({
  type: "UPDATE_TODO_BY_ID",
  id,
  newTodo,
});

export const deleteTodoById = () => ({
  type: "DELETE_TODO_BY_ID",
  id,
});
