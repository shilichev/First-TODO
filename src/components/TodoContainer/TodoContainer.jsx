import React from "react";
import classes from "./TodoContainer.module.css";
import Todo from "./Todo/Todo";
import Add from "./Add/Add";
import { connect } from "react-redux";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    let loh = await fetch("http://localhost:5000/todos");
    // let x = loh.json();
    console.log(loh);
  }
  render() {
    return (
      <div className={classes.container}>
        <Add />
        {this.props.todos.map((item) => (
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
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(TodoContainer);

// createRandomId = (title) => {
//   let randomId = Math.round(Math.random() * (9999 - 1000) + 1000);
//   return this.addNewTodo(title, randomId);
// };
