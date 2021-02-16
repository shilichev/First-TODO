import React from "react";

import Status from "./Status/Status";
import Delete from "./Delete/Delete";

import Field from "../common/UpdateField/Field";
import classes from "./Todo.module.css";

const Todo = (props) => {
  let id = props.todos.id;
  let title = props.todos.title;
  let description = props.todos.description;
  let status = props.todos.status;
 console.log(props.todos)
  return (
    <div className={classes.box}>
      <Status status={status} id={id} />
      <Field field={title} id={id} scale="title" />
      <Field field={description} id={id} scale="description" />
      <Delete id={id} />
    </div>
  );
};

export default Todo;
