import React, { Component } from "react";
import classes from "./App.module.css";
//import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import CockPit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  // nameHandler = newName => {
  //   //console.log("Was clicked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 27 }
  //     ]
  //   });
  // };

  nameChangedHandler = (id, event) => {
    // this.setState({
    //   persons: [
    //     { name: "Max", age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: "Stephanie", age: 27 }
    //   ]
    // });
    // console.log("event", event);
    // console.log("event.target.value", event.target.value);
    // console.log("id", id);
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = index => {
    //const persons = this.state.persons.slice(); // or
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  };

  render() {
    //   <Person
    //   name={this.state.persons[1].name}
    //   age={this.state.persons[1].age}
    //   click={this.nameHandler.bind(this, "Max!")}
    //   nameChangeClick={this.nameChangedHandler}
    // >
    //   My Hobbies: Racing
    // </Person>
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
    // this.state.persons.map((person, index) => {
    //   return (
    //     <Person
    //       name={person.name}
    //       age={person.age}
    //       deletePersonClick={this.deletePersonHandler.bind(this, index)}
    //       nameChangeClick={this.nameChangedHandler.bind(this, person.id)}
    //       key={person.id}
    //     />
    //   );
    // })

    return (
      <div className={classes.App}>
        <CockPit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonsClicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
