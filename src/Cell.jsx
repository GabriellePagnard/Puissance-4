import React from 'react';
import { Box } from '@chakra-ui/react';

function Cell({ value, onClick }) {
  const getColor = (value) => {
    if (value.toLowerCase() === 'red') {
      return 'red.500';
    } else if (value.toLowerCase() === 'yellow') {
      return 'yellow.400'; // Utilisation d'un jaune plus vif
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
      boxShadow="md"
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
