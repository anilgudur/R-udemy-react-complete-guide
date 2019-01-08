import React from "react";

const withDivClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withDivClass;
