import React from "react";

const MessageBox = ({ children, variant, error }) => {
  return (
    <div className={`alert alert-${variant || "info"}`}>
      {children && children ? children : error && error}
    </div>
  );
};

export default MessageBox;
