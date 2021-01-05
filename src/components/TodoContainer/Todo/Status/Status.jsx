import React from "react";


class Status extends React.Component {
  constructor(props) {
    super(props);
  }
  toggleCheckboxChange = (e) => {
    if (e.target.checked) {
      this.props.update(this.props.id, { status: "DONE" });
    } else {
      this.props.update(this.props.id, { status: "TODO" });
    }
  };
  render() {
    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={this.props.status === "DONE"}
            onChange={this.toggleCheckboxChange}
          />

          {this.props.status}
        </label>
      </div>
    );
  }
}

export default Status;
