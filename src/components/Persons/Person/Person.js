import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount");
    this.focusInput();
  }

  focusInput() {
    //if (this.props.position === 0) {
    this.inputElement.current.focus();
    //}
  }

  render() {
    console.log("[Person.js] inside render");
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.deletePersonClick}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={inp => {
          //   this.inputElement = inp;
          // }}
          ref={this.inputElement}
          type="text"
          onChange={this.props.nameChangeClick}
          value={this.props.name}
        />
      </WithClass>
    );
    // return [
    //   <p key="1" onClick={this.props.deletePersonClick}>
    //     I'm a {this.props.name} and I am {this.props.age} years old!
    //   </p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input
    //     key="3"
    //     type="text"
    //     onChange={this.props.nameChangeClick}
    //     value={this.props.name}
    //   />
    // ];
  }
}

Person.propTypes = {
  deletePersonClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  nameChangeClick: PropTypes.func
};

export default Person;
