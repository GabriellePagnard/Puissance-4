export const checkWinner = (board, currentPlayer) => {
    // Logique pour vérifier le gagnant
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row][col + 1] === currentPlayer &&
          board[row][col + 2] === currentPlayer &&
          board[row][col + 3] === currentPlayer
        ) {
          return { winner: currentPlayer, cells: [[row, col], [row, col + 1], [row, col + 2], [row, col + 3]] };
        }
      }
    }
  
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 3; row++) {
        if (
          board[row][col] === currentPlayer &&
          board[row + 1][col] === currentPlayer &&
          board[row + 2][col] === currentPlayer &&
          board[row + 3][col] === currentPlayer
        ) {
          return { winner: currentPlayer, cells: [[row, col], [row + 1, col], [row + 2, col], [row + 3, col]] };
        }
      }
    }
  
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row + 1][col + 1] === currentPlayer &&
          board[row + 2][col + 2] === currentPlayer &&
          board[row + 3][col + 3] === currentPlayer
        ) {
          return { winner: currentPlayer, cells: [[row, col], [row + 1, col + 1], [row + 2, col + 2], [row + 3, col + 3]] };
        }
      }
    }
  
    for (let row = 3; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === currentPlayer &&
          board[row - 1][col + 1] === currentPlayer &&
          board[row - 2][col + 2] === currentPlayer &&
          board[row - 3][col + 3] === currentPlayer
        ) {
          return { winner: currentPlayer, cells: [[row, col], [row - 1, col + 1], [row - 2, col + 2], [row - 3, col + 3]] };
        }
      }
    }
  
    return null;
  };
  