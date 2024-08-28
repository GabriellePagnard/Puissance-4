import React from 'react';
import { Grid } from '@chakra-ui/react';
import Cell from './Cell.jsx';

function Board({ board, onCellClick }) {
  return (
    <Grid templateColumns="repeat(7, 60px)" templateRows="repeat(6, 60px)" gap={2}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} value={cell} onClick={() => onCellClick(rowIndex, colIndex)} />
        ))
      )}
    </Grid>
  );
}

export default Board;
