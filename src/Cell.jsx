import React from 'react';

function Cell({ value, onClick }) {
  return (
    <div className={`cell ${value.toLowerCase()}`} onClick={onClick}>
      {value}
    </div>
  );
}

export default Cell;
