import React, { Component } from "react";

const withDivStatefullClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
  // return props => (
  //   <div className={className}>
  //     <WrappedComponent />
  //   </div>
  // );
};

export default withDivStatefullClass;
