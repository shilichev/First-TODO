import React from "react";
import classes from "./Title.module.css";
import UpdateTitle from "./UpdateTitle";
import NewTitle from "./NewTitle";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: true,
      s: <NewTitle title={this.props.title} updateTitle={this.updateTitle} />,
    };
  }
  updateTitle = () => {
    this.setState({ update: false });
    this.toggleTitleChange();
  };
  toggleTitleChange = () => {
    if (this.state.update) {
      this.state.s = (
        <UpdateTitle
          title={this.props.title}
          updateTitle={this.updateTitle}
          update={this.props.update}
          id={this.props.id}
        />
      );
    } else {
      this.state.s = (
        <NewTitle title={this.props.title} updateTitle={this.updateTitle} />
      );
      return this.setState({ update: true });
    }
  };

  render() {
    return <div>{this.state.s}</div>;
  }
}

export default Title;
