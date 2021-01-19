import React from "react";
import UpdateField from "../common/UpdateField/UpdateField";

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
      <div className={classes.item}>
        <b>
          <Status status={status} id={id} update={props.update} />
        </b>
      </div>
      <div className={classes.item}>
        <b>
          <Field field={title} id={id} update={props.update} scale="title" />
        </b>
      </div>
      <div className={classes.item}>
        <Field
          field={description}
          id={id}
          update={props.update}
          scale="description"
        />
      </div>

      <div className={classes.item}>
        <b>
          <Delete delete={props.delete} id={id} />
        </b>
      </div>
    </div>
  );
}

export default Todo;
