import styled from "styled-components";
import { Container } from "../../styles/GlobalSyle";

export const ContentContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardSobre = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    width: 1024px;
    background-color: white;
    border-radius: 8px;
    box-shadow:3px 5px 16px #919191;
    margin: 64px 0; 
`;

export const LogoImg = styled.img`
    margin-top: 32px;
    height: auto;
    width: auto;
    object-fit: cover;
`;

export const Title = styled.h1`
    font-size: 24px;
    .titleColor{
        color:  orange;
    }
`;

export const TextSobre = styled.p`
    margin-top: 32px;
    margin-bottom: 64px;
    padding: 0 32px;
    text-align: justify;
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;

    .textChange{
        font-size: 24px;
        font-weight: 700;
        color: orange;
    }

    .title{
        font-size: 18px;
        font-weight: 700;
    }

    .titleCor{
        color: orange;
    }
`;