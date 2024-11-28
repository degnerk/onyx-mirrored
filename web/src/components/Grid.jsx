import React from 'react';

function Grid() {
  return (
    <div className="grid-container">
      {[...Array(256)].map((_, index) => (
        <div className="grid-item" key={index}></div>
      ))}
    </div>
  );
};

export default Grid;