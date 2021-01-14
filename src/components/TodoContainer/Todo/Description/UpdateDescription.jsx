import React from "react";
import classes from "../Todo.module.css";

const canselImgUrl =
  "https://cvescrow.com/wp-content/uploads/Notice-of-right-to-cancel.png";
const confirmImgUrl =
  "https://cdn.iconscout.com/icon/premium/png-512-thumb/confirm-37-713284.png";

class UpdateDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
    };
  }
  handleKeyDown = (e) => {
    if (e === "Enter") {
      this.props.updateDescription(this.state.description);
    }
  };
  control = (newText) => {
    this.setState({
      description: newText,
    });
  };

  buttonCancel = () => {
    this.props.updateDescription(this.props.description);
  };
  buttonConfirm = () => {
    this.props.updateDescription(this.state.description);
  };
  render() {
    return (
      <div className="description">
        <label>
          <textarea
            defaultValue={this.props.description}
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

export default UpdateDescription;
