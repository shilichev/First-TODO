import React from "react";

import UpdateFild from "./UpdateFild";

class Fild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      scale: "",
      fild: {},
    };
  }

  startFild = () => {
    this.setState({ update: !this.state.update });
  };

  updateFild = (fild) => {
    this.startFild();
    console.log(this.state.status);
    if (this.state.status) {
      if (this.state.update) this.props.update(this.props.id, { title: fild });
    } else {
      if (this.state.update)
        this.props.update(this.props.id, { description: fild });
    }
  };
  componentDidMount() {
    if (this.props.scale === "title") {
      this.setState({ scale: "title", fild: this.props.fild, status: true });
    } else if (this.props.scale === "description") {
      this.setState({
        scale: "description",
        fild: this.props.description,
        status: false,
      });
    }
  }
  render() {
    return this.state.update ? (
      <UpdateFild
        status={this.state.status}
        fild={this.props.fild}
        updateFild={this.updateFild}
        id={this.props.id}
      />
    ) : (
      <div className={this.state.scale} onClick={this.updateFild}>
        <label>{this.props.fild}</label>
      </div>
    );
  }
}

export default Fild;
