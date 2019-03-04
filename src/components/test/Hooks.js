import React, { Component } from "react";

export default class Hooks extends Component {
  //Define state
  state = { status: null };

  componentDidMount() {
    console.log("Component did mount!");
  }

  componentWillMount() {
    console.log("Component will mount!");
  }

  componentDidUpdate() {
    console.log("Component did Update!");
  }

  update = e => {
    e.preventDefault();
    this.setState(this.state);
    console.log("update()-fired");
  };

  render() {
    return (
      <div>
        <h1>TestComponent</h1>
        <button className="btn btn-lg btn-secondary" onClick={this.update}>
          Update
        </button>
      </div>
    );
  }
}
