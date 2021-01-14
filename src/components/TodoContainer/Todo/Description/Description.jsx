import React from "react";

import UpdateDescription from "./UpdateDescription";


class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }
  checkScale = () => {
    if (this.props.scale === "title") {
      console.log(1);
    }
  };
  startDescription = () => {
    this.setState({ update: !this.state.update });
  };
  updateDescription = (description) => {
    this.startDescription();
    if (this.state.update)
      this.props.update(this.props.id, { description: description });
  };

  render() {
    return this.state.update ? (
      <UpdateDescription
        description={this.props.description}
        updateDescription={this.updateDescription}
        update={this.props.update}
        id={this.props.id}
      />
    ) : (
      <div className="description" onClick={this.updateDescription}>
        <label>{this.props.description}</label>
      </div>
    );
  }
}

export default Description;
