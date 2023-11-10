import styled from "styled-components";
import { Container } from "../../styles/GlobalSyle"

export const ContainerBlog = styled(Container)`
    padding: 0 ;

`;

export const Grid = styled.section`  
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap:32px;
    margin: 0 auto;
    padding: 0 32px;
    margin-bottom: 32px;

    @media screen and (max-width: 1128px) {
        grid-template-columns: 1fr;   
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    background-color: white;
    box-shadow:3px 5px 16px #919191;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const CardImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit:cover;
    @media screen and (max-width: 600px) {

        width :100% ;
    }
`;

export const CardContent = styled.div`
    width: 100%;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 600px) {
        width: auto;
    }
`;

export const CardTitle = styled.h1`
    font-size: 22px;
    margin-top: 16px;

`;

export const CardText = styled.p`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const Border = styled.div`
    margin: 16px auto;
    width: 100%;
    border: 1px solid black;
    border-radius: 25px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;

`;

export const CardButton = styled.button`
    border: none;
    width:50px;
    height: 50px;
    border-radius: 50px;
    background-color: orange;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 24px;
    }

    &:hover{
        color:white;
        cursor: pointer;
        transform: scale(0.9);
        transition: all 0.2s ease-in-out;
    }
    
`;