import React from "react";

import UpdateDescription from "./UpdateDescription";
import NewDescription from "./NewDescription";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }
  updateDescription = () => {
    this.setState({ update: !this.state.update });
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
      <NewDescription
        description={this.props.description}
        updateDescription={this.updateDescription}
      />
    );
  }
}

export default Description;
