import React from 'react';
import Cell from './Cell.jsx';

function Board({ board, onCellClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell 
            key={`${rowIndex}-${colIndex}`} 
            value={cell} 
            onClick={() => onCellClick(rowIndex, colIndex)} 
          />
        ))
      ))}
    </div>
  );
}

export default Board;
