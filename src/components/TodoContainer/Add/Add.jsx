import React, { useState } from "react";
import classes from "./Add.module.css";
import { useDispatch } from "react-redux";
import { apiAddTodo } from "../../../actions/actions";
import { addTodo } from "../../../slices/todos";

const Add = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onChangeText = (event) => {
    setValue(event.target.value);
  };

  const addNewTodo = (id) => {
    apiAddTodo(value, id)(dispatch);
    dispatch(
      addTodo({
        title: value || "New Title",
        id: id,
        description: "New description",
        status: "DONE",
      })
    );
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
