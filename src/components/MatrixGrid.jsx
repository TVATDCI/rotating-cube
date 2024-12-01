import React from "react";
import "./MatrixGrid.css";

function MatrixGrid() {
  return (
    <div className="grid-container">
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="grid-item"></div>
      ))}
    </div>
  );
}

export default MatrixGrid;
