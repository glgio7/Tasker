import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    scroll-behavior: smooth;
    text-decoration: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
}

html, body{
    width: 100%;
}



`;
