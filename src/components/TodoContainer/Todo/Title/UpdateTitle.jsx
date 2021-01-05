import React from "react";

class UpdateTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.updateTitle();
      this.props.update(this.props.id, { title: `${e.target.value}` });
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
