import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components'
import theme from "./assets/css/theme";
import GlobalStyle from "./assets/css/global";

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle/>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
