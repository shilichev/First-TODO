import React from "react";
import classes from "./Add.module.css";
import { connect } from "react-redux";
import autobind from "react-autobind";
import { bindActionCreators } from "redux";
import { addNewTodo } from "./../../../actions/actions";

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
  addNewTodo = () => {
    this.props.action.addNewTodo({
      id: "150",
      title: this.state.value,
      description: "This description about help",
      status: "DONE",
    });
  };
  render() {
    return (
      <div className={classes.add}>
        <input value={this.state.value} onChange={this.onChangeText}></input>
        <button onClick={this.addNewTodo}>
          <strong>ADD</strong>
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(
    {
      addNewTodo,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Add);
