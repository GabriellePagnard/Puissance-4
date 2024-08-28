import React from 'react';
import { Box, Button, Flex, Heading, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import Header from './components/Header';
import Board from './components/Board';
import { useGameLogic } from './hooks/useGameLogic';

function App() {
  const {
    board,
    currentPlayer,
    isGameStarted,
    winner,
    winningCells,
    showWinnerPopup,
    applyBlur,
    handleCellClick,
    startGame,
    resetGame
  } = useGameLogic();

  return (
    <Flex
    direction="column"
    align="center"
    justify="center"
    minHeight="100vh"
    position="relative"
    p={4}
    maxWidth="100%"  // Limite la largeur maximale à 100%
    _before={{
      content: '""',
      position: 'absolute',
      top: '-5%',
      left: '-5%',
      right: '-5%',
      bottom: '-5%',
      bgImage: "url('/assets/background.jpg')",
      bgSize: 'cover',
      bgPosition: 'center',
      bgRepeat: 'no-repeat',
      filter: 'blur(3px)',
      zIndex: -2,
    }}
  >
      
<Box
  position="relative"
  bg="rgba(255, 255, 255, 0.7)"  // Fond blanc transparent
  rounded="md"
  p={4}
  boxShadow="lg"
  zIndex={1}
  textAlign="center"
>
  <Heading as="h1" size="2xl" color="red.800" mb={5} fontWeight="bold" textAlign="center">
    Puissance 4
  </Heading>

  <VStack spacing={5} textAlign="center">
    {isGameStarted && !showWinnerPopup && (
      <Text fontSize="xl" color="red.800" fontWeight="bold" textAlign="center">
        Joueur actuel: <Text as="span" color={currentPlayer === 'Red' ? 'red.600' : 'yellow.500'}>{currentPlayer}</Text>
      </Text>
    )}
  </VStack>

  <Box
    position="relative"
    p={4}
    bg="blue.500"  // Couleur de la grille et de la pop-up
    rounded="md"
    mt={5}
    boxShadow="lg"
    filter={isGameStarted && !winner ? 'none' : applyBlur ? 'blur(5px)' : 'none'} // Appliquer le flou après un délai
    transition="filter 0.5s ease"
  >
    <Board board={board} onCellClick={handleCellClick} winningCells={winningCells} />
  </Box>
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
    zIndex={2}
  >
    <Button
      colorScheme="red"
      bg="red.700"  // Couleur rouge foncé
      size="lg"
      fontSize="2xl" 
      padding="2rem 4rem"  // Bouton plus gros
      style={{ textTransform: 'uppercase' }}  // Texte en majuscules
      onClick={startGame}
      zIndex={3}
    >
      Démarrer le jeu
    </Button>
  </Flex>
)}

{showWinnerPopup && (
  <Modal isOpen={true} onClose={resetGame} isCentered>
    <ModalOverlay />
    <ModalContent bg="blue.500">
      <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
        Le gagnant est <Text as="span" color={winner === 'Red' ? 'red.600' : 'yellow.500'}>{winner}</Text>
      </ModalHeader>
      <ModalBody>
        <Text fontSize="lg" textAlign="center">
          Félicitations ! <Text as="span" color={winner === 'Red' ? 'red.600' : 'yellow.500'}>{winner}</Text> a gagné la partie.
        </Text>
      </ModalBody>
      <ModalFooter justifyContent="center">
        <Button
          colorScheme="red"
          bg="red.700"  // Couleur rouge foncé
          size="lg"
          fontSize="xl"
          style={{ textTransform: 'uppercase' }}  // Texte en majuscules
          padding="2rem 4rem"  // Bouton plus gros
          onClick={resetGame}
        >
          Rejouer
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
      )}
    </Flex>
  );
}

export default App;
