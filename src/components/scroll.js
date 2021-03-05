import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "0px solid pink",
        margin: "5px",
        padding: "5px",
        height: "530px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
