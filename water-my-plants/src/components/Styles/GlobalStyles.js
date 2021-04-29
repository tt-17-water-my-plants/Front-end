import  { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-family: 'Montserrat Alternates'; 
    }

    body {
        overflow-x: hidden;
        background-color: #E3DCC2;
    }
`