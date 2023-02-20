import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {defaultTheme} from "./Themes/Theme";

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: consolas,serif;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);
