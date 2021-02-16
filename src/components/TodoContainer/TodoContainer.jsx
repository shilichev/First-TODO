import React from "react";
import classes from "./TodoContainer.module.css";
import Todo from "./Todo/Todo";
import Add from "./Add/Add";
import { connect } from "react-redux";
import { apiLoadListTodos } from "../../actions/actions";
import { bindActionCreators } from "redux";

class TodoContainer extends React.Component {
  async componentDidMount() {
    this.props.actions.apiLoadListTodos();
  }
  render() {
    return (
      <div className={classes.container}>
        <Add />
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} todos={todo}/>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      apiLoadListTodos,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);


