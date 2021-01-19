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
    this.deleteTodoById = this.deleteTodoById.bind(this);
  }

  componentDidMount() {
    this.setState({ todos: todoContainer });
  }

  updateTodoById(id, newTodo) {
    console.log(id)
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
  deleteTodoById(id) {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  }
  render() {
    return (
      <div className={classes.container}>
        {this.state.todos.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            update={this.updateTodoById}
            delete={this.deleteTodoById}
          />
        ))}
      </div>
    );
  }
}
export default TodoContainer;
