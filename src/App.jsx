import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Board from './Board.jsx';

function App() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill('')));
  const [currentPlayer, setCurrentPlayer] = useState('Red');
  const [isGameStarted, setIsGameStarted] = useState(false);

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

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      position="relative"
      p={4}
      _before={{
        content: `''`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgImage: "url('assets/background.jpg')", 
        bgSize: 'cover',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        filter: 'blur(3px)', // Appliquer le flou ici
        zIndex: -1,
      }}
    >
      {/* Cadre blanc transparent */}
      <Box
        position="relative"
        bg="rgba(255, 255, 255, 0.7)" // Cadre blanc transparent
        rounded="md"
        p={4}
        boxShadow="lg"
        zIndex={1}
      >
        <VStack spacing={5} textAlign="center">
          <Heading as="h1" size="2xl" color="red.800"> 
          🔴 Puissance 4 🟡
          </Heading>

          {isGameStarted && (
            <Text fontSize="xl" color="red.800" fontWeight="bold"> {/* Texte en rouge foncé et en gras */}
              Joueur actuel: <Text as="span" color={currentPlayer === 'Red' ? 'red.500' : 'yellow.400'}>{currentPlayer}</Text>
            </Text>
          )}
        </VStack>

        <Box
          position="relative"
          p={4}
          bg="blue.500" // Couleur de la grille en bleu vif
          rounded="md"
          mt={5}
          boxShadow="lg"
          filter={isGameStarted ? 'none' : 'blur(5px)'} // Flou sur la grille avant que le jeu ne commence
          transition="filter 0.5s ease"
        >
          <Board board={board} onCellClick={handleCellClick} />
        </Box>

        {!isGameStarted && (
          <Flex
            align="center"
            justify="center"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex={2} // Assurer que le bouton est au-dessus de la grille
            pointerEvents="none" // Désactiver les événements pointer sur le conteneur
          >
            <Button
              colorScheme="red"
              bg="red.700"
              size="lg"
              fontSize="2xl" // Bouton plus gros
              padding="2rem 4rem" // Augmenter la taille du bouton
              style={{ textTransform: 'uppercase' }} // Mettre le texte en majuscule
              onClick={startGame}
              zIndex={3}
              pointerEvents="auto" // Activer les événements pointer sur le bouton
            >
              Démarrer le jeu
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

export default App;
