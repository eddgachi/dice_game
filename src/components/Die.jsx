import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let cls = `Die fas fa-dice-${this.props.face} ${
      this.props.rolling ? "shaking" : ""
    }`;
    return (
      <div>
        <i className={cls} />
      </div>
    );
  }
}

export default Die;
