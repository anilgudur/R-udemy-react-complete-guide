import React from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.togglePersonsClicked}>
        Toggle Persons
      </button>
      <button onClick={props.loginClick}>Log in</button>
    </>
  );
};

export default cockpit;
