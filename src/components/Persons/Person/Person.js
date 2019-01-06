import React from "react";
import classes from "./Person.module.css";

const person = props => {
  // I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!
  // <p onClick={props.click}>

  // const rnd = Math.random();
  // console.log("rnd", rnd);
  // if (rnd > 0.7) {
  //   throw new Error("Something went wrong");
  // }

  return (
    <div className={classes.Person}>
      <p onClick={props.deletePersonClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.nameChangeClick} value={props.name} />
    </div>
  );
};

export default person;
