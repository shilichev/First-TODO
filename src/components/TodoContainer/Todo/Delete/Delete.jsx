import React from "react";
import { connect } from "react-redux";
import classes from "../Todo.module.css";
import { bindActionCreators } from "redux";
import { apiDeleteTodoById } from "../../../../actions/actions";

class Delete extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteContainer = () => {
    this.props.actions.apiDeleteTodoById(this.props.id);
    console.log(this.props.id);
  };
  render() {
    return (
      <div className={classes.item}>
        <div onClick={this.deleteContainer}>
          <i className="fas fa-trash-alt" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      apiDeleteTodoById,
    },
    dispatch
  ),
});
export default connect(null, mapDispatchToProps)(Delete);
