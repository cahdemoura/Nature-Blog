import styled from "styled-components";

export const Section = styled.section`
    background-color: #dddddd;
    padding: 32px 8px;
`;

export const Title= styled.h1`
    text-align: center;
    margin-bottom: 24px;
`;

export const ContainerLetter = styled.div`

    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    
    @media (max-width: 600px){
        flex-direction: column;

    }
`;

export const Input = styled.input`
    border: 1px solid transparent;
    padding: 8px 16px;
    border-radius: 50px;
    width: 256px;
    outline: none;

    &:focus{
        border: 1px solid black;
        transition: all 0.3s ease-in-out;
    }
`;
