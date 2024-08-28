import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root'); // Sélectionne l'élément HTML avec l'ID 'root'
const root = createRoot(rootElement); // Utilise createRoot pour initialiser le rendu de l'application

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);