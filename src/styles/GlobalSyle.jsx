import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
    }
    
    body{
        background-color: whitesmoke;
    }
`;

export const Container = styled.div`
    max-width: 1280px;
    padding: 0 16px;
    margin: 0 auto;
`;


export const MainTitleContainer = styled.div`
    margin: 36px auto;
    width: fit-content;

    background: linear-gradient(to right, #51e1fa, #2773ff);
    display: block;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
`;

export const MainTitle = styled.h1`
  /* Ajuste o tamanho da fonte conforme necessário */
`;

export const Button = styled.button`

    font-weight: 600;
    background-color: orange;
    padding: 8px 32px;
    border-radius: 50px;
    border:2px solid transparent;
    outline: none;
    cursor: pointer;

    &:hover{
        color: white;
        border:2px solid white;
        transition:  all 0.3s ease-in-out;
    }
`;
