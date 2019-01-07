import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount");
  }

  // updating triggered from the outside by props changes
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] inside componentWillReceiveProps",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.delete !== this.props.delete ||
      nextProps.changed !== this.props.changed
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] inside componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          deletePersonClick={this.props.delete.bind(this, index)}
          nameChangeClick={this.props.changed.bind(this, person.id)}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
