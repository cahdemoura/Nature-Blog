import styled from "styled-components";
import { Container } from "../../styles/GlobalSyle";

export const ContainerBanner = styled(Container)`
    position: relative;
    display: flex;
    align-items: center;
    z-index: 0;

    @media (max-width: 1000px) {
        padding: 0;
        width: 100%       
    }
`;

export const ContainerImg = styled.div`
    position: relative;
    width: 100%;
    max-width: 1280px;
    height: 512px;


`;

export const MainImage = styled.img`
    border-radius: 8px;
    width: 100%;
    height: 512px;
    object-fit: cover;

    @media (max-width: 1000px) {
        border-radius: 0;
    }

`;

export const BlackoutImg = styled.div`
    background-color: #00000071;
    border-radius: 8px;
    width: 100%;
    height: 512px;
    position: absolute;
    top: 0;

    @media (max-width: 1000px) {
        border-radius: 0;
    }
`;



export const ContainerText = styled.div`
    position: absolute;
    width: 50%;
    padding: 24px;

    @media (max-width: 600px){
        width: 80%;
    }
`;

export const MainTitle = styled.h1`
    color:white;
    font-size: clamp(1.5rem, 2vw, 2rem);
    line-height: 30px;
    .teste{
        font-size: clamp(1.5rem, 2vw, 1.7rem);
        font-weight: 200;
    }
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: clamp(0.8rem, 1vw, 1.1rem);
    color: white;
    padding: 32px 0;
`;


export const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    background-color: orange;
    padding: 8px 16px;
    border-radius: 50px;
    border:2px solid transparent;
    outline: none;
    cursor: pointer;

    &:hover{
        color:white;
        border:2px solid white;
        transition: all 0.2s ease-in-out;
    }
`;
