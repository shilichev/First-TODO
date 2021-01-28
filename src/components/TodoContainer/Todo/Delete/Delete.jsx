import React from "react";
import { connect } from "react-redux";
import classes from "../Todo.module.css";
import { bindActionCreators } from "redux";
import { deleteTodoById } from "../../../../actions/actions";

class Delete extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteContainer = () => {
    this.props.action.deleteTodoById(this.props.id);
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
  action: bindActionCreators(
    {
      deleteTodoById,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Delete);
