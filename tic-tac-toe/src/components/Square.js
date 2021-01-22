import React from "react";

import "../Square.css";

/* Created function for the Square */
function Square({ onClick, value }) {
  return (
    <button className="square__shape" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
