import React from "react";
import classes from "./Title.module.css";
import UpdateTitle from "./UpdateTitle";
import NewTitle from "./NewTitle";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: true,
    };
  }
  updateTitle = () => {
    this.setState({ update: !this.state.update });
  };

  render() {
    return !this.state.update ? (
      <UpdateTitle
        title={this.props.title}
        updateTitle={this.updateTitle}
        update={this.props.update}
        id={this.props.id}
      />
    ) : (
      <NewTitle title={this.props.title} updateTitle={this.updateTitle} />
    );
  }
}

export default Title;
