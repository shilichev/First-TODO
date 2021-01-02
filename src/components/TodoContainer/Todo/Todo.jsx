import React from "react";
import Status from "./Status/Status";
import Title from "./Title/Title"
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
          <Title title={title} id={id} update={props.update} />
        </b>
      </div>
      <div className={classes.item}>{description}</div>
      <div className={classes.item}>
        <b>
          <Status status={status} id={id} update={props.update} />
        </b>
      </div>
    </div>
  );
}

export default Todo;
