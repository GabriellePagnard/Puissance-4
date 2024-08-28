import React, { useState } from 'react';
import Board from './Board.jsx';

function App() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(''))); // Initialisation du tableau 6x7
  const [currentPlayer, setCurrentPlayer] = useState('Red');

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
  };

  const handleCellClick = (row, col) => {
    const newBoard = board.map((rowArr, rowIndex) => 
      rowArr.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col && cell === '') {
          return currentPlayer;
        }
        return cell;
      })
    );
    setBoard(newBoard);
    switchPlayer();
  };

  return (
    <div className="app">
      <h1>Puissance 4</h1>
      <h2>Joueur actuel: {currentPlayer}</h2>
      <Board board={board} onCellClick={handleCellClick} />
    </div>
  );
}

export default App;
