import React, { useEffect, useState } from "react";
import classes from "../../Todo/Todo.module.css";
import UpdateField from "./UpdateField";

import { useDispatch } from "react-redux";
import { apiUpdateTodoById } from "../../../../actions/actions";
import { DESCRIPTION_NAME, TITLE_NAME } from "../../../../constants/constants";
import { updateTodoById } from "../../../../slices/todos";

const Field = ({ id, scale, field }) => {
  const [update, setUpdate] = useState(false);
  const [value, setScale] = useState("");
  const [status, setStatus] = useState("");

  const startField = () => {
    setUpdate(!update);
  };

  const dispatch = useDispatch();

  const updateField = (field) => {
    startField();
    apiUpdateTodoById(id, {
      [scale]: field,
    })(dispatch);
    dispatch(updateTodoById({ id, [scale]: field }));
  };
  const setUpdateField = () => {
    startField();
  };

  useEffect(() => {
    if (scale === TITLE_NAME) {
      setScale(TITLE_NAME);
      setStatus(true);
    } else if (scale === DESCRIPTION_NAME) {
      setScale(DESCRIPTION_NAME);
      setStatus(false);
    }
  }, []);

  return update ? (
    <div className={classes.item}>
      <UpdateField
        status={status}
        field={field}
        updateField={updateField}
        id={id}
      />
    </div>
  ) : (
    <div className={classes.item}>
      <div className={scale} onClick={setUpdateField}>
        <label>{field}</label>
      </div>
    </div>
  );
};

export default Field;
