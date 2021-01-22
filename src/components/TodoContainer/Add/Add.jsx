import React from "react";

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
      <div>
        <input value={this.state.value} onChange={this.onChangeText}></input>
        <button onClick={this.addNewTodo}>Add TODO</button>
      </div>
    );
  }
}

export default Add;
