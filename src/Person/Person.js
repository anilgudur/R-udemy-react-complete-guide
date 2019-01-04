import React from "react";
import Radium from "radium";
import "./Person.css";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  // I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!
  // <p onClick={props.click}>
  return (
    <div className="Person" style={style}>
      <p onClick={props.deletePersonClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChangeClick} value={props.name} />
    </div>
  );
};

export default Radium(person);
