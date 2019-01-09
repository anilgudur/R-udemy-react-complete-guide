import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import CockPit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/WithClass";
// import withDivClass from "../hoc/withDivClass";
import withDivStatefullClass from "../hoc/withDivStatefullClass";

export const AuthContext = React.createContext(false);

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
      showPersons: false,
      toggleClicked: 0,
      isAuthenticated: false
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
      nextState.showPersons !== this.state.showPersons ||
      nextState.isAuthenticated !== this.state.isAuthenticated
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
    const doesShow = this.state.showPersons;
    this.setState(prevState => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  };

  loginClickHandler = () => {
    this.setState({ isAuthenticated: true });
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
          //isAuthenticated={this.state.isAuthenticated}
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
          loginClick={this.loginClickHandler.bind(this)}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {persons}
        </AuthContext.Provider>
      </>
    );
  }
}

export default withDivStatefullClass(App, classes.App);
