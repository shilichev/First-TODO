import React from "react";

class NewDescription extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="description" onClick={this.props.updateDescription}>
        <label>{this.props.description}</label>
      </div>
    );
  }
}

export default NewDescription;
