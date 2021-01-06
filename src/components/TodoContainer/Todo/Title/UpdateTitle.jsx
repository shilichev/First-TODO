import React from "react";

class UpdateTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }

  _handleKeyDown = (e, newText) => {
    if (e === "Enter") {
      this.setState({
        title: newText,
      });
      this.props.updateTitle(newText);
    }
  };

  render() {
    return (
      <div className="title">
        <label>
          <input
            type="text"
            defaultValue={this.state.title}
            onKeyDown={(event) =>
              this._handleKeyDown(event.key, event.target.value)
            }
          />
        </label>
      </div>
    );
  }
}

export default UpdateTitle;
