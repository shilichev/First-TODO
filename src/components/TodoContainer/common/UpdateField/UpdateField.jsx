import React from "react";
import classes from "../../Todo/Todo.module.css";

const canselImgUrl =
  "https://cvescrow.com/wp-content/uploads/Notice-of-right-to-cancel.png";
const confirmImgUrl =
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/confirm-37-713284.png";

class UpdateField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: this.props.field,
    };
  }
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.updateField(this.state.field);
    }
  };
  control = (e) => {
    this.setState({
      field: e.target.value,
    });
  };

  buttonCancel = () => {
    this.props.updateField(this.props.field);
  };
  buttonConfirm = () => {
    this.props.updateField(this.state.field);
  };

  render() {
    const { field } = this.state;
    return (
      <div className="title">
        <label>
          {this.props.status ? (
            <input type="text"
                   value={field}
                   onChange={this.control}
                   onKeyDown={this.handleKeyDown}
            />
          ) : (
            <textarea value={field}
                      onChange={this.control}
                      onKeyDown={this.handleKeyDown}
            />
          )}
        </label>
        <div className={classes.buttons}>
          <button onClick={this.buttonCancel}>
            <i class="fas fa-window-close  " ></i>
            Cancel
          </button>
          <button onClick={this.buttonConfirm}>
            <i class="fas fa-check-square"></i>
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default UpdateField;
