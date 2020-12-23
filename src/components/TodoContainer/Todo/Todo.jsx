import React from "react";
import classes from "./Todo.module.css";

function Todo(props) {
  return (
    <div className={classes.box}>
      <div className={classes.item}>
        <b>{props.title}</b>
      </div>
      <div className={classes.item}>{props.description}</div>
      <div className={classes.item}>
        <b>{props.status}</b>
      </div>
    </div>
  );
}

export default Todo;
