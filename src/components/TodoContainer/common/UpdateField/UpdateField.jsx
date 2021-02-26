import React, { useState } from "react";
import { ENTER_KEY } from "../../../../constants/constants";
import classes from "../../Todo/Todo.module.css";

const UpdateField =(props)=> {
  const {status, updateField} = props;

  const [field, setField]=useState(props.field)

  const handleKeyDown = (e) => {
    if (e.key === ENTER_KEY) {
      updateField(field);
    }
  };
  const control = (e) => {
    setField(e.target.value)
  };

  const buttonCancel = () => {
    updateField(props.field);
  };
  const buttonConfirm = () => {
    updateField(field);
  };

    return (
      <div>
        <label>
          {status ? (
            <input type="text"
                   value={field}
                   onChange={control}
                   onKeyDown={handleKeyDown}
            />
          ) : (
            <textarea value={field}
                      onChange={control}
                      onKeyDown={handleKeyDown}
            />
          )}
        </label>
        <div className={classes.buttons}>
          <button onClick={buttonCancel}>
            <i className="fas fa-window-close  "></i>
            Cancel
          </button>
          <button onClick={buttonConfirm}>
            <i className="fas fa-check-square"></i>
            Confirm
          </button>
        </div>
      </div>
    );
}

export default UpdateField;
