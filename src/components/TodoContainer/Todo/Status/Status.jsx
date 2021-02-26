import React from "react";
import classes from "../Todo.module.css";
import { useDispatch } from "react-redux";
import { apiUpdateTodoById } from "../../../../actions/actions";
import { STATUS_DONE, STATUS_TODO } from "../../../../constants/constants";

const Status = ({ id, status }) => {
  const dispatch = useDispatch();

  const toggleCheckboxChange = (e) => {
    if (e.target.checked) {
      apiUpdateTodoById(id, {
        status: STATUS_DONE,
      })(dispatch);
    } else {
      apiUpdateTodoById(id, {
        status: STATUS_TODO,
      })(dispatch);
    }
  };

  return (
    <div className={classes.item}>
      <div className={classes.checkbox}>
        <label>
          <input
            type="checkbox"
            checked={status === STATUS_DONE}
            onChange={toggleCheckboxChange}
          />

          {status}
        </label>
      </div>
    </div>
  );
};

export default Status;
