import React from "react";
import { NewAuthContext } from "../../containers/App";

const dummyLogin = props => (
  <NewAuthContext.Consumer>
    {authContext => {
      return (
        <button onClick={authContext.toggleAuth}>
          {authContext.isAuth ? "Logout" : "Login"}
        </button>
      );
    }}
  </NewAuthContext.Consumer>
);

export default dummyLogin;
