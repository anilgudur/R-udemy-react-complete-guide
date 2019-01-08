import React, { Component } from "react";

const withDivStatefullClass = (WrappedComponent, className) => {
  //return class extends Component {
  const ClassA = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} ref={this.props.forwardRef} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <ClassA {...props} forwardRef={ref} />;
  });

  // return props => (
  //   <div className={className}>
  //     <WrappedComponent />
  //   </div>
  // );
};

export default withDivStatefullClass;
