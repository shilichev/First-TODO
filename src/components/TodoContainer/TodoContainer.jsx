import React, { useEffect } from "react";
import classes from "./TodoContainer.module.css";
import Todo from "./Todo/Todo";
import Add from "./Add/Add";
import { useDispatch, useSelector } from "react-redux";
import { apiLoadListTodos } from "../../actions/actions";
import { todosSelector } from "../../selectors/commonSelectors";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosSelector);

  useEffect(() => {
    const loadListTodos = () => apiLoadListTodos()(dispatch);
    loadListTodos();
  }, []);

  return (
    <div className={classes.container}>
      <Add />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
