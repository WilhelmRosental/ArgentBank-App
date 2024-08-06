import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
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
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    background-color: ${({ theme }) => theme.colors.surface};
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