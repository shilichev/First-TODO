import React from "react";
import { useDispatch } from "react-redux";
import classes from "../Todo.module.css";
import { apiDeleteTodoById } from "../../../../actions/actions";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const deleteContainer = () => {
    apiDeleteTodoById(id)(dispatch);
  };

  return (
    <div className={classes.item}>
      <div onClick={deleteContainer}>
        <i className="fas fa-trash-alt" />
      </div>
    </div>
  );
};

export default Delete;
