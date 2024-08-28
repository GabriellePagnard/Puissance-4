import React from 'react';
import { Box } from '@chakra-ui/react';

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
