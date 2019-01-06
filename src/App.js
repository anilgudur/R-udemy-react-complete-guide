import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    //   <Person
    //   name={this.state.persons[1].name}
    //   age={this.state.persons[1].age}
    //   click={this.nameHandler.bind(this, "Max!")}
    //   nameChangeClick={this.nameChangedHandler}
    // >
    //   My Hobbies: Racing
    // </Person>
    let persons = null;
    let btnClass = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  deletePersonClick={this.deletePersonHandler.bind(this, index)}
                  nameChangeClick={this.nameChangedHandler.bind(
                    this,
                    person.id
                  )}
                  //key={person.id}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/* <button style={style} onClick={() => this.nameHandler("Maximilian")}>
            Change Name
          </button> */}
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
