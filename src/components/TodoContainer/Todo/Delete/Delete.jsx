import React from "react";
import classes from "../Todo.module.css";

class Delete extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteContainer = () => {
    this.props.delete(this.props.id);
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

export default Delete;
