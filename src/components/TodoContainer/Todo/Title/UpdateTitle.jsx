import React from "react";
import classes from "../Todo.module.css";

const canselImgUrl =
  "https://cvescrow.com/wp-content/uploads/Notice-of-right-to-cancel.png";
const confirmImgUrl =
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/confirm-37-713284.png";

class UpdateTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }
  handleKeyDown = (e) => {
    if (e === "Enter") {
      this.props.updateTitle(this.state.title);
    }
  };
  control = (newText) => {
    this.setState({
      title: newText,
    });
  };

  buttonCancel = () => {
    this.props.updateTitle(this.props.title);
  };
  buttonConfirm = () => {
    this.props.updateTitle(this.state.title);
  };

  render() {
    return (
      <div className="title">
        <label>
          <input
            type="text"
            defaultValue={this.state.title}
            onChange={(event) => this.control(event.target.value)}
            onKeyDown={(event) => this.handleKeyDown(event.key)}
          />
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

export default UpdateTitle;
