import React from 'react';
import { Box } from '@chakra-ui/react';

/**
 * Composant Cell qui représente une cellule individuelle sur le plateau de jeu.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.value - La valeur de la cellule ('Red', 'Yellow' ou '').
 * @param {Function} props.onClick - La fonction à appeler lors du clic sur la cellule.
 * @param {boolean} props.isWinningCell - Indique si la cellule fait partie de la combinaison gagnante.
 */
function Cell({ value, onClick, isWinningCell }) {
  return (
    <Box
      as="button"
      width={{ base: '35px', sm: '50px' }}  // Ajustement de la largeur selon la taille de l'écran
      height={{ base: '35px', sm: '50px' }}  // Ajustement de la hauteur selon la taille de l'écran
      bg={value === 'Red' ? '#FF0000' : value === 'Yellow' ? '#FFD700' : 'white'}
      border="2px solid"
      borderColor={isWinningCell ? 'green.400' : 'black'}
      borderRadius="50%"
      onClick={onClick}
      transition="border-color 0.5s ease"
    />
  );
}

export default Cell;
