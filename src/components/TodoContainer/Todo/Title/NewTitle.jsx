import React from "react";

class NewTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="title" onClick={this.props.updateTitle}>
        <label>{this.props.title}</label>
      </div>
    );
  }
}

export default NewTitle;
