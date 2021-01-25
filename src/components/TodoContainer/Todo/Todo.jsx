import React from "react";

import Status from "./Status/Status";
import Delete from "./Delete/Delete";

import Field from "../common/UpdateField/Field";
import classes from "./Todo.module.css";

function Todo(props) {
  let id = props.id;
  let title = props.title;
  let description = props.description;
  let status = props.status;

  return (
    <div className={classes.box}>
      <Status status={status} id={id} update={props.update} />
      <Field field={title} id={id} update={props.update} scale="title" />
      <Field
        field={description}
        id={id}
        update={props.update}
        scale="description"
      />
      <Delete delete={props.delete} id={id} />
    </div>
  );
}

export default Todo;
