/**
 * Vérifie si un joueur a gagné la partie.
 * @param {Array} board - Le tableau de l'état du plateau de jeu.
 * @param {string} currentPlayer - Le joueur actuel ('Red' ou 'Yellow').
 * @returns {Object|null} - L'objet contenant le gagnant et les cellules gagnantes, ou null si pas de gagnant.
 */
export const checkWinner = (board, currentPlayer) => {
  // Vérification des lignes
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

  // Vérification des colonnes
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

  // Vérification des diagonales (haut-gauche à bas-droite)
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

  // Vérification des diagonales (bas-gauche à haut-droite)
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
