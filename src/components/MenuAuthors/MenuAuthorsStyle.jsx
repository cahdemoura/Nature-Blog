import styled from "styled-components";

export const AuthorSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;
    margin-top: 86px;
    margin-bottom: 32px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 84px;
}
`;

export const CardAuthor = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: white;
    width: 286px;
    height: 300px;
    border-radius: 8px;
    box-shadow:3px 5px 16px #919191;
`;

export const CardTitle = styled.h2`
    font-weight: 800;
    margin-top:92px;
    color: orange;
`;

export const CardSubTitle = styled.h3`
    font-size: 18px;
    color: gray;
`;

export const CardText = styled.p`
    margin-top: 18px;
    font-size: 16px;
    font-weight: 500;
    color: #4b4b4b;
    text-align: center;
`;

export const CardPhoto = styled.img`
    position: absolute;
    top: -16%;
    width: 150px;
    height: 150px;
    border:2px solid orange ;
    border-radius: 50%;
    background-image: url(${({fonte})=>(fonte)});
    background-size: 100% ;
    background-position: 50% 30%;
`;