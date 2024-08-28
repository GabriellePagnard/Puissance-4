import { useState, useEffect } from 'react';
import { checkWinner } from '../utils/checkWinner';

export function useGameLogic() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill('')));
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showWinnerPopup, setShowWinnerPopup] = useState(false);
  const [applyBlur, setApplyBlur] = useState(true);

  useEffect(() => {
    const startingPlayer = Math.random() > 0.5 ? 'Red' : 'Yellow';
    setCurrentPlayer(startingPlayer);
  }, []);

  const handleCellClick = (row, col) => {
    if (!isGameStarted || winner || board[row][col] !== '') return;

    // Vérifiez que le jeton est placé dans la cellule la plus basse disponible
    for (let r = 5; r >= 0; r--) {
      if (board[r][col] === '') {
        row = r;
        break;
      }
    }

    const newBoard = board.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col && cell === '') {
          return currentPlayer;
        }
        return cell;
      })
    );

    setBoard(newBoard);
    const result = checkWinner(newBoard, currentPlayer);
    if (result) {
      setWinner(result.winner);
      setWinningCells(result.cells);
      setTimeout(() => {
        setApplyBlur(true);
        setShowWinnerPopup(true);
      }, 1000);
    } else {
      setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
    setApplyBlur(false);
  };

  const resetGame = () => {
    setBoard(Array(6).fill(Array(7).fill('')));
    setWinner(null);
    setWinningCells([]);
    setShowWinnerPopup(false);
    setApplyBlur(false);
    const startingPlayer = Math.random() > 0.5 ? 'Red' : 'Yellow';
    setCurrentPlayer(startingPlayer);
    setIsGameStarted(true);
  };

  return {
    board,
    currentPlayer,
    isGameStarted,
    winner,
    winningCells,
    showWinnerPopup,
    applyBlur,
    handleCellClick,
    startGame,
    resetGame
  };
}
