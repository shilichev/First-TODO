import React from "react";

import UpdateTitle from "./UpdateTitle";
import NewTitle from "./NewTitle";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }
  updateTitle = (title) => {
    this.setState({ update: !this.state.update });
    this.props.update(this.props.id, { title: title });
  };
  render() {
    return this.state.update ? (
      <UpdateTitle
        title={this.props.title}
        updateTitle={this.updateTitle}
        toggleTitle={this.toggleTitle}
        id={this.props.id}
      />
    ) : (
      <NewTitle title={this.props.title} updateTitle={this.updateTitle} />
    );
  }
}

export default Title;
