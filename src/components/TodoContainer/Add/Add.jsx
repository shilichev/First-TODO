import React from "react";
import classes from "./Add.module.css";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onChangeText = (event) => {
    this.setState({ value: event.target.value });
  };
  addNewTodo = () => {
    this.props.addNewTodo(this.state.value);
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

export default Add;
