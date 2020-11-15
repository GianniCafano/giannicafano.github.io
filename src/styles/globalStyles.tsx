import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Varela Round', sans-serif;
    background-color: #5CDB95;
    color: white;
  }

  main {
      padding: 0 15px;
  }

  a {
      color: #05386B;
  }
`;

export default GlobalStyles;