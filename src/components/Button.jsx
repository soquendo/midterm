import React from "react";

const Button = ({ color = "", onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: '10px',
        backgroundColor: color
      }}
    >
      {children}
    </button>
  );
};

export default Button;
