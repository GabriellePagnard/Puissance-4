import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

function Header({ isGameStarted, currentPlayer, showWinnerPopup }) {
  return (
    <VStack spacing={5} textAlign="center">
      <Heading as="h1" size="2xl" color="red.800" mb={5} fontWeight="bold" textAlign="center">
      🟡 Puissance 4 🔴
      </Heading>
      {isGameStarted && !showWinnerPopup && (
        <Text fontSize="xl" color="red.800" fontWeight="bold" textAlign="center">
          Joueur actuel: <Text as="span" color={currentPlayer === 'Red' ? 'red.600' : 'yellow.500'}>{currentPlayer}</Text>
        </Text>
      )}
    </VStack>
  );
}

export default Header;
