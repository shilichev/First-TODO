import React from "react";
import classes from "./TodoContainer.module.css";
import { todoContainer } from "../../content/todoContainer";
import Todo from "./Todo/Todo";
import Add from "./Add/Add";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.updateTodoById = this.updateTodoById.bind(this);
    this.deleteTodoById = this.deleteTodoById.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  componentDidMount() {
    this.setState({ todos: todoContainer });
  }

  updateTodoById(id, newTodo) {
    console.log(id);
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
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  }
  createRandomId = (title) => {
    let randomId = Math.round(Math.random() * (9999 - 1000) + 1000);
    this.addNewTodo(title, randomId);
  };
  addNewTodo(title, newId) {
    if (this.state.todos.find((item) => item.id == newId)) {
      this.createRandomId(title);
    } else {
      let newTodo = {
        id: `${newId}`,
        title: title,
        description: "New todo",
        status: "TODO",
      };
      let newTodos = [newTodo, ...this.state.todos];
      this.setState({ todos: newTodos });
      console.log(this.state.todos);
    }

    
  }

  render() {
    return (
      <div className={classes.container}>
        <Add addNewTodo={this.createRandomId} />
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
