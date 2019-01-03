import React from "react";

const person = props => {
  // I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChangeClick} value={props.name} />
    </div>
  );
};

export default person;
