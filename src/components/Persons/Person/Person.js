import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount");
  }

  render() {
    console.log("[Person.js] inside render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.deletePersonClick}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.nameChangeClick}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;