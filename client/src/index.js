import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components'
import theme from "./assets/css/theme";
import GlobalStyle from "./assets/css/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
