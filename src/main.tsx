import React from 'react';
import ReactDOM from 'react-dom/client';  
import './styles/index.css'; // Import TailwindCSS styles
import App from './App';
import { MovieProvider } from './contexts/MovieContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);

