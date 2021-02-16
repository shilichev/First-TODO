import React from "react";
import classes from "./Add.module.css";
import { connect } from "react-redux";
import autobind from "react-autobind";
import { bindActionCreators } from "redux";
import { apiAddTodo } from "../../../actions/actions";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    autobind(this);
  }
  onChangeText = (event) => {
    this.setState({ value: event.target.value });
  };
  addNewTodo = (id) => {
    this.props.action.apiAddTodo(this.state.value, id);
  };
  createRandomId = () => {
  let randomId = String(Math.round(Math.random() * (9999 - 1000) + 1000));
  return this.addNewTodo(randomId);
};
  render() {
    return (
      <div className={classes.add}>
        <input value={this.state.value} onChange={this.onChangeText}></input>
        <button onClick={this.createRandomId}>
          <strong>ADD</strong>
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(
    {
      apiAddTodo,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Add);
