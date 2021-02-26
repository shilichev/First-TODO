import React from "react";

import Status from "./Status/Status";
import Delete from "./Delete/Delete";

import Field from "../common/UpdateField/Field";
import classes from "./Todo.module.css";
import { DESCRIPTION_NAME, TITLE_NAME } from "../../../constants/constants";

const Todo = ({ todo: { id, title, description, status } }) => (
  <div className={classes.box}>
    <Status status={status} id={id} />
    <Field field={title} id={id} scale={TITLE_NAME} />
    <Field field={description} id={id} scale={DESCRIPTION_NAME} />
    <Delete id={id} />
  </div>
);

export default Todo;
