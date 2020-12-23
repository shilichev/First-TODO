import React from "react";
import classes from "./TodoContainer.module.css";
import { todoContainer } from "../../content/todoContainer";
import Todo from "./Todo/Todo";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.setState({ todos: todoContainer });
  }

  render() {
    return (
      <div className={classes.container}>
        {this.state.todos.map((item) => (
          <Todo
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </div>
    );
  }
}
export default TodoContainer;
