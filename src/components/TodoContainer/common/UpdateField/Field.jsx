import React from "react";
import classes from "../../Todo/Todo.module.css";
import UpdateField from "./UpdateField";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { apiUpdateTodoById } from "../../../../actions/actions";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      scale: "",
    };
  }

  startField = () => {
    this.setState({ update: !this.state.update });
  };

  updateField = (field) => {
    this.startField();
    console.log(this.state.status);
    if (this.state.status) {
      if (this.state.update)
        this.props.actions.apiUpdateTodoById(this.props.id, { title: field });
    } else {
      if (this.state.update)
        this.props.actions.apiUpdateTodoById(this.props.id, { description: field });
    }
  };
  componentDidMount() {
    if (this.props.scale === "title") {
      this.setState({
        scale: "title",
        status: true,
      });
    } else if (this.props.scale === "description") {
      this.setState({
        scale: "description",
        status: false,
      });
    }
  }
  render() {
    return this.state.update ? (
      <div className={classes.item}>
        <UpdateField
          status={this.state.status}
          field={this.props.field}
          updateField={this.updateField}
          id={this.props.id}
        />
      </div>
    ) : (
      <div className={classes.item}>
        <div className={this.state.scale} onClick={this.updateField}>
          <label>{this.props.field}</label>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      apiUpdateTodoById,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Field);
