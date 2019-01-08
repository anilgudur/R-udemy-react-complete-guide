import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import CockPit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import WithDivClass from "../hoc/withDivClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] inside constructor", props);

    this.state = {
      persons: [
        { id: 1, name: "Max", age: 28 },
        { id: 2, name: "Manu", age: 29 },
        { id: 3, name: "Stephanie", age: 26 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

  // updating triggered from internal by state changes
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    return (
      nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] inside componentDidUpdate");
  }

  nameChangedHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  };

  render() {
    console.log("[App.js] inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          delete={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    ///* <WithClass classes={classes.App}> */
    // /* </WithClass> */

    return (
      <>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Person
        </button>
        <CockPit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonsClicked={this.togglePersonsHandler}
        />
        {persons}
      </>
    );
  }
}

export default WithDivClass(App, classes.App);
