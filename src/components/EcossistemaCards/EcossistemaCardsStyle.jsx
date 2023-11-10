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

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;   
    }
`;

export const ContainerCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    box-shadow:3px 5px 16px #919191;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
`;

export const CardImage = styled.img`
    width :100% ;
    height: 200px;
    object-fit:cover;
`;

export const CardContent = styled.div`
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
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
    padding: 16px;
    bottom: 0;
    right: 0;

`;

export const CardButton = styled.button`
    border: none;
    font-weight: 600;
    border-radius: 50px;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 24px;
        transition: all 0.3s ease-in-out;
    }
    
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
    }

    &:hover{
        color:white;
        cursor: pointer;    

        svg{
            padding-left: 20px;  
            
        }    
        transition: all 0.3s ease-in-out;     
    } 
`;