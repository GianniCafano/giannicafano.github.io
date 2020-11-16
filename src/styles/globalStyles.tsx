import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }

    html, 
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Varela Round', sans-serif;
        background-color: #1d2d50;
        color: white;
    }

    main {
        padding: 0 15px;
    }

    a {
        color: white;
    }
`;

export default GlobalStyles;