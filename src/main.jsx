import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ResetStyles from './styles/reset.js';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
