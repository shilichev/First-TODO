import React, { useState } from "react";
import classes from "./Add.module.css";
import {  useDispatch } from "react-redux";
import { apiAddTodo } from "../../../actions/actions";

const Add = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onChangeText = (event) => {
    setValue(event.target.value);
  };

  const addNewTodo = (id) => {
    apiAddTodo(value, id)(dispatch);
  };

  const createRandomId = () => {
    let randomId = String(Math.round(Math.random() * (9999 - 1000) + 1000));
    addNewTodo(randomId);
  };

  return (
    <div className={classes.add}>
      <input value={value} onChange={onChangeText}></input>
      <button onClick={createRandomId}>
        <strong>ADD</strong>
      </button>
    </div>
  );
};

export default Add;
