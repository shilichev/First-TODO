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
    this.updateTodoById = this.updateTodoById.bind(this);
  }

  componentDidMount() {
    this.setState({ todos: todoContainer });
  }

  updateTodoById(id, newTodo) {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...newTodo,
          };
        }
        return item;
      }),
    });
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
            update={this.updateTodoById}
          />
        ))}
      </div>
    );
  }
}
export default TodoContainer;
