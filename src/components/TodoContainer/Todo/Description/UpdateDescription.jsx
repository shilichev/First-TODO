import React from "react";

class UpdateDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.updateDescription();
      this.props.update(this.props.id, { description: `${e.target.value}` });
    }
  };
  render() {
    return (
      <div className="description">
        <label>
          <textarea
            defaultValue={this.props.description}
            onKeyDown={this._handleKeyDown}
          />
        </label>
      </div>
    );
  }
}

export default UpdateDescription;
