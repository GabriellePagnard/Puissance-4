import React, { useState } from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Board from './Board.jsx';

function App() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill('')));
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
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.100">
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" color="teal.500">
          Puissance 4
        </Heading>
        <Text fontSize="xl" color="gray.700">
          Joueur actuel: <Text as="span" color={currentPlayer === 'Red' ? 'red.500' : 'yellow.400'}>{currentPlayer}</Text>
        </Text>
        <Box p={4} bg="blue.800" rounded="md" boxShadow="lg"> {/* Grille bleu foncé */}
          <Board board={board} onCellClick={handleCellClick} />
        </Box>
      </VStack>
    </Flex>
  );
}

export default App;
