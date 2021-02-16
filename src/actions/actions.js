import { setTodos } from "./actionsCreators";

export const apiLoadListTodos = () => async (dispatch) => {
  let todoContainer = await fetch(
    "http://localhost:5000/todos"
  ).then((response) => response.json());
  console.log(todoContainer);
  if (todoContainer.todos) {
    dispatch(setTodos(todoContainer.todos));
  }
};

export const apiDeleteTodoById = (id) => async (dispatch) => {
  await fetch("http://localhost:5000/todos", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });
  await apiLoadListTodos()(dispatch);
};

export const apiUpdateTodoById = (id, newTodo) => async (dispatch) => {
  await fetch("http://localhost:5000/todos", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, ...newTodo }),
  });
  await apiLoadListTodos()(dispatch);
};

export const apiAddTodo = (title, id) => async (dispatch) => {
  await fetch("http://localhost:5000/todos", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      title: title,
      description: "New Description",
      status: "TODO",
    }),
  });
  await apiLoadListTodos()(dispatch);
};
