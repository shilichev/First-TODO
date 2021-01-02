import React from "react";

class UpdateTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  toggle = (e) => {
    if (e.target.value !== e.target.defaultValue) {
      this.props.update(this.props.id, { title: `${e.target.value}` });
      console.log(1)
    }
  };
  render() {
    return (
      <div className="title" onDoubleClick={this.props.updateTitle}>
        <label>
          <input
            type="text"
            defaultValue={this.props.title}
            onDoubleClick={this.toggle}
          />
        </label>
      </div>
    );
  }
}

export default UpdateTitle;
