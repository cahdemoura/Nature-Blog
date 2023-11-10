
import { ContainerBlog, Border, ButtonContainer, CardButton, CardContent, CardImage, CardText, CardTitle, ContainerCard, Grid } from "./EcossistemaCardsStyle";
import { IoIosArrowForward } from "react-icons/io"


const EcossistemaCards = ({Edata}) => {
    return (
        <ContainerBlog>
            <Grid>
                {Edata.map((data, index) => (
                    <ContainerCard key={index}>
                        <CardImage src={data.photo} ></CardImage>
                        <CardContent>
                            <CardTitle>{data.title}</CardTitle>
                            <Border />
                            <CardText>{data.text}</CardText>
                        </CardContent>
                        <ButtonContainer>
                            <CardButton>
                                <span>
                                    Leia mais
                                    <IoIosArrowForward />
                                </span>
                            </CardButton>
                        </ButtonContainer>
                    </ContainerCard>

                ))}
                {/*
                <ContainerCard>
                    <CardImage src="amazonia.jpeg"></CardImage>
                    <CardContent>
                        <CardTitle>Segredos da Amazônia</CardTitle>
                        <Border />
                        <CardText>Descubra os mistérios da maior floresta tropical do mundo.</CardText>
                        <ButtonContainer>
                            <CardButton>d</CardButton>
                        </ButtonContainer>
                    </CardContent>
                </ContainerCard>
                */}
            </Grid>
        </ContainerBlog>
    )
}

export default EcossistemaCards;
