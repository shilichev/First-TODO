import React from "react";
import classes from "../../Todo/Todo.module.css";

const canselImgUrl =
  "https://cvescrow.com/wp-content/uploads/Notice-of-right-to-cancel.png";
const confirmImgUrl =
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/confirm-37-713284.png";

class UpdateFild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fild: this.props.fild,
    };
  }
  handleKeyDown = (e) => {
    if (e === "Enter") {
      this.props.updateFild(this.state.fild);
    }
  };
  control = (newText) => {
    this.setState({
      fild: newText,
    });
  };

  buttonCancel = () => {
    this.props.updateFild(this.props.fild);
  };
  buttonConfirm = () => {
    this.props.updateFild(this.state.fild);
  };

  render() {
    return (
      <div className="title">
        <label>
          {this.props.status ? (
            <input
              type="text"
              defaultValue={this.props.fild}
              onChange={(event) => this.control(event.target.value)}
              onKeyDown={(event) => this.handleKeyDown(event.key)}
            />
          ) : (
            <textarea
              defaultValue={this.props.fild}
              onChange={(event) => this.control(event.target.value)}
              onKeyDown={(event) => this.handleKeyDown(event.key)}
            />
          )}
        </label>
        <div className={classes.buttons}>
          <button onClick={this.buttonCancel}>
            <img src={canselImgUrl} alt="Cancel" />
            Cancel
          </button>
          <button onClick={this.buttonConfirm}>
            <img src={confirmImgUrl} alt="Confirm" />
            Confirm
          </button>
        </div>
      </div>
    );
  }
}

export default UpdateFild;
