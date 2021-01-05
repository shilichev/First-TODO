import React from "react";

class UpdateTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle = (e) => {
    if (e.target.value !== e.target.defaultValue) {
      this.props.update(this.props.id, { title: `${e.target.value}` });
      console.log(1);
    }
  };
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.toggle(e);
      this.props.updateTitle();
    }
  };
  render() {
    return (
      <div className="title">
        <label>
          <input
            type="text"
            defaultValue={this.props.title}
            onKeyDown={this._handleKeyDown}
          />
        </label>
      </div>
    );
  }
}

export default UpdateTitle;
