import React from "react";
import classes from "../Todo.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiUpdateTodoById } from "../../../../actions/actions";

class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleCheckboxChange = (e) => {
    if (e.target.checked) {
      this.props.actions.apiUpdateTodoById(this.props.id, { status: "DONE" });
    } else {
      this.props.actions.apiUpdateTodoById(this.props.id, { status: "TODO" });
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
  actions: bindActionCreators(
    {
      apiUpdateTodoById,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Status);
