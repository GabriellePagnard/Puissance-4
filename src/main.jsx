import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.jsx';
import './index.css';

const theme = extendTheme({
  colors: {
    red: {
      500: '#E53E3E',
    },
    yellow: {
      500: '#D69E2E',
    },
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
