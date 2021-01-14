import React from "react";

import UpdateTitle from "./UpdateTitle";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }
  checkScale = () => {
    if (this.props.scale === "title") {

    }
  };
  startTitle = () => {
    this.setState({ update: !this.state.update });
  };

  updateTitle = (title) => {
    this.startTitle();
    if (this.state.update) this.props.update(this.props.id, { title: title });
   
  };

  render() {
    return this.state.update ? (
      <UpdateTitle
        title={this.props.title}
        updateTitle={this.updateTitle}
        id={this.props.id}
      />
    ) : (
      <div className="title" onClick={this.updateTitle}>
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default Title;
