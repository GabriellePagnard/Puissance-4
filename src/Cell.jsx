import React from 'react';
import { Box } from '@chakra-ui/react';

function Cell({ value, onClick, isWinningCell }) {
  const getColor = (value) => {
    if (value.toLowerCase() === 'red') {
      return 'red.500';
    } else if (value.toLowerCase() === 'yellow') {
      return 'yellow.400';
    } else {
      return 'gray.300';
    }
  };

  return (
    <Box
      w="60px"
      h="60px"
      bg={getColor(value)}
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow={isWinningCell ? '0 0 10px 5px rgba(255, 215, 0, 0.8)' : 'md'}
      cursor={value === '' ? 'pointer' : 'not-allowed'}
      transition="transform 0.2s"
      _hover={{ transform: value === '' ? 'scale(1.1)' : 'none' }}
      onClick={onClick}
    >
      {/* Contenu optionnel */}
    </Box>
  );
}

export default Cell;
