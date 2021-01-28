import React from "react";
import classes from "../Todo.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTodoById } from "../../../../actions/actions";

class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleCheckboxChange = (e) => {
    if (e.target.checked) {
      this.props.action.updateTodoById(this.props.id, { status: "DONE" });
    } else {
      this.props.action.updateTodoById(this.props.id, { status: "TODO" });
    }
  };
  render() {
    return (
      <div className={classes.item}>
        <div className={classes.checkbox}>
          <label>
            <input
              type="checkbox"
              checked={this.props.status === "DONE"}
              onChange={this.toggleCheckboxChange}
            />

            {this.props.status}
          </label>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(
    {
      updateTodoById,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Status);
