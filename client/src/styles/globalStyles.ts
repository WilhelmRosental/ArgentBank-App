import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    scroll-behavior: smooth;
  }

  *:active,
  *:focus {
    -webkit-tap-highlight-color: transparent;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    display: block;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.secondary};
  }

  /* Style spécifique pour la page de login */
  body.login-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.surface}; /* Tu peux définir une couleur spécifique pour la page de login */
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  button {
    padding: 0;
    background-color: transparent;
  }

  figure {
    margin: 0;
  }

  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  input[type='search']::-ms-clear,
  input[type='search']::-ms-reveal,
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }
`;