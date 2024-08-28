import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Cell from './Cell';

/**
 * Composant Board qui représente le plateau de jeu de Puissance 4.
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.board - Le tableau de l'état du plateau de jeu.
 * @param {Function} props.onCellClick - La fonction à appeler lors du clic sur une cellule.
 * @param {Array} props.winningCells - Les cellules qui font partie de la combinaison gagnante.
 */
function Board({ board, onCellClick, winningCells }) {
  return (
    <SimpleGrid 
      columns={{ base: 7, sm: 7 }} 
      spacing={{ base: 1, sm: 2 }}  // Réduction de l'espacement pour les petits écrans
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            isWinningCell={winningCells.some(([r, c]) => r === rowIndex && c === colIndex)}
          />
        ))
      )}
    </SimpleGrid>
  );
}

export default Board;
