import React, { Component } from "react";
//import { NewAuthContext } from "../../containers/App";
import NewAuthContext from "../../contexts/NewAuthContext/NewAuthContext";

class DummyLogin extends Component {
  static contextType = NewAuthContext;

  componentDidMount() {
    console.log("this.context", this.context);
  }

  render() {
    return (
      <button onClick={this.context.toggleAuth}>
        {this.context.isAuth ? "Logout" : "Login"}
      </button>
    );
  }
}

export default DummyLogin;

// const dummyLogin = props => (
//   <NewAuthContext.Consumer>
//     {authContext => {
//       return (
//         <button onClick={authContext.toggleAuth}>
//           {authContext.isAuth ? "Logout" : "Login"}
//         </button>
//       );
//     }}
//   </NewAuthContext.Consumer>
// );

//export default dummyLogin;
