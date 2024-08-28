import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import Board from './Board.jsx';

function App() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill('')));
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showWinnerPopup, setShowWinnerPopup] = useState(false);
  const [applyBlur, setApplyBlur] = useState(true); // Le flou est activé au départ

  useEffect(() => {
    const startingPlayer = Math.random() > 0.5 ? 'Red' : 'Yellow';
    setCurrentPlayer(startingPlayer);
  }, []);

  const checkWinner = (board) => {
    // Vérifier les lignes
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

    // Vérifier les colonnes
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

    // Vérifier les diagonales (haut-gauche à bas-droite)
    for (let row = 0;row < 3; row++) {
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

    // Vérifier les diagonales (bas-gauche à haut-droite)
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

  const handleCellClick = (row, col) => {
    if (!isGameStarted || winner || board[row][col] !== '') return;

    const newBoard = board.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col && cell === '') {
          return currentPlayer;
        }
        return cell;
      })
    );

    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningCells(result.cells);

      // Appliquer un délai pour montrer la surbrillance avant d'afficher la pop-up et l'effet de flou
      setTimeout(() => {
        setApplyBlur(true); // Appliquer le flou après la victoire
        setShowWinnerPopup(true); // Afficher la pop-up après la surbrillance
      }, 1000); // Délai de 1000ms pour l'effet de surbrillance
    } else {
      switchPlayer();
    }
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
  };

  const startGame = () => {
    setIsGameStarted(true);
    setApplyBlur(false); // Enlever le flou initial
  };

  const resetGame = () => {
    setBoard(Array(6).fill(Array(7).fill('')));
    setWinner(null);
    setWinningCells([]);
    setShowWinnerPopup(false); // Réinitialiser la pop-up
    setApplyBlur(false); // Réinitialiser l'effet de flou
    const startingPlayer = Math.random() > 0.5 ? 'Red' : 'Yellow';
    setCurrentPlayer(startingPlayer);
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
        top: '-5%', 
        left: '-5%', 
        right: '-5%', 
        bottom: '-5%', 
        bgImage: "url('assets/background.jpg')", 
        bgSize: 'cover', 
        bgPosition: 'center', 
        bgRepeat: 'no-repeat',
        filter: 'blur(3px)', 
        zIndex: -2, // Assurez-vous que l'image d'arrière-plan est derrière tout
      }}
    >
      {/* Conteneur pour le titre et la grille avec fond blanc transparent */}
      <Box
        position="relative"
        bg="rgba(255, 255, 255, 0.7)" 
        rounded="md"
        p={4}
        boxShadow="lg"
        zIndex={1}
        textAlign="center"
      >
        <Heading as="h1" size="2xl" color="red.800" mb={5}>
          Puissance 4
        </Heading>

        <VStack spacing={5} textAlign="center">
          {isGameStarted && !showWinnerPopup && (
            <Text fontSize="xl" color="red.800" fontWeight="bold"> 
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

      {/* Bouton de démarrage au-dessus de tout */}
      {!isGameStarted && (
        <Flex
          align="center"
          justify="center"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex={2} // Assurez-vous que le bouton est au-dessus de la grille floue
        >
          <Button
            colorScheme="red"
            bg="red.700"
            size="lg"
            fontSize="2xl" 
            padding="2rem 4rem" 
            style={{ textTransform: 'uppercase' }} 
            onClick={startGame}  
            zIndex={3} // Assurez-vous que le bouton est au-dessus de la grille floue
          >
            Démarrer le jeu
          </Button>
        </Flex>
      )}

      {/* Modal pour annoncer le gagnant */}
      {showWinnerPopup && (
        <Modal isOpen={true} onClose={resetGame} isCentered>
          <ModalOverlay />
          <ModalContent bg="blue.500">  {/* Couleur de la pop-up */}
            <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
              {/* Styliser le texte du gagnant avec la couleur correspondante */}
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
                bg="red.700"
                size="lg"
                fontSize="xl"
                style={{ textTransform: 'uppercase' }}
                padding="2rem 4rem"
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
