import React from "react";

const Text = ({ size = "medium", color = "#000", children }) => {
  const fontSizes = {
    small: "10px",
    medium: "20px",
    large: "30px"
  };

  return (
    <p
      style={{
        fontSize: fontSizes[size],
        color
      }}
    >
      {children}
    </p>
  );
};

export default Text;
