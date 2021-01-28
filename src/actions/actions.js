export const addNewTodo = (newTodo) => ({
  type: "ADD_NEW_TODO",
  newTodo,
});

export const updateTodoById = (id, newTodo) => ({
  type: "UPDATE_TODO_BY_ID",
  id,
  newTodo,
});

export const deleteTodoById = (id) => ({
  type: "DELETE_TODO_BY_ID",
  id,
});
