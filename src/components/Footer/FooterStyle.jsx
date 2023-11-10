import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #2773ff;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 0 auto;
    padding:32px;
    gap: 128px;


    @media (max-width: 600px){
        flex-direction: column;
        gap: 32px;
    }
`;

export const FooterSections = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    gap:16px;

    @media (max-width: 600px){
        width: ${({ size }) => size == null ? '100px' : size};
        flex-direction: row;
        justify-content: center;
    }
`;

export const ContainerImg = styled.img`
`;

export const Icon = styled.span`
    display: flex;
    font-size: 32px;

`;

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media (max-width: 600px){
        text-align: center;
    }
`;

export const Link = styled.a`
    font-weight: 600;
    text-decoration: none;
    color: white;
    font-size: 20px;
    &:hover{
        text-decoration: underline;
    }
`;