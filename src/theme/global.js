import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *, *:after, *:before { 
        -webkit-box-sizing: border-box; 
        -moz-box-sizing: border-box; 
        box-sizing: border-box; 
    }
    body {
        background: #fbc73b;
        font-family: 'Lato', Arial, sans-serif;
        color: #fff;
    }
`;

export default GlobalStyle;