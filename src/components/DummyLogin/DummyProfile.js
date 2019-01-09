import React from "react";
import { NewAuthContext } from "../../containers/App";

const dummyProfile = props => (
  <NewAuthContext.Consumer>
    {authContext => {
      return (
        <h1>{authContext.isAuth ? "You are logged in!" : "Not logged in!"}</h1>
      );
    }}
  </NewAuthContext.Consumer>
);

export default dummyProfile;
