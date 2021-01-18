import React from "react";

import UpdateField from "./UpdateField";

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
       if (this.state.update)this.props.update(this.props.id, { title: field });
    } else {
      if (this.state.update)
        this.props.update(this.props.id, { description: field });
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
      <UpdateField
        status={this.state.status}
        field={this.props.field}
        updateField={this.updateField}
        id={this.props.id}
      />
    ) : (
      <div className={this.state.scale} onClick={this.updateField}>
        <label>{this.props.field}</label>
      </div>
    );
  }
}

export default Field;
