import React from "react";
import UpdateFild from "../common/UpdateFild/UpdateFild";
import Description from "./Description/Description";
import Status from "./Status/Status";
import Title from "./Title/Title";
import Fild from "../common/UpdateFild/Fild";
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
          {/* <Title title={title} id={id} update={props.update} scale="title" /> */}
          <Fild fild={title} id={id} update={props.update} scale="title" />
        </b>
      </div>
      <div className={classes.item}>
        {/* <Description
          description={description}
          id={id}
          update={props.update}
          scale="description"
        /> */}
        <Fild
          fild={description}
          id={id}
          update={props.update}
          scale="description"
        />
      </div>
      <div className={classes.item}>
        <b>
          <Status status={status} id={id} update={props.update} />
        </b>
      </div>
    </div>
  );
}

export default Todo;
