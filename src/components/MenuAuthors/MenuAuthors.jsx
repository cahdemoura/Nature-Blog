import { Container, MainTitle, MainTitleContainer } from "../../styles/GlobalSyle";
import { AuthorSection, CardAuthor, CardPhoto, CardSubTitle, CardText, CardTitle } from "./MenuAuthorsStyle";
import { AuthorData } from '../../data/AuthorData'

const MenuAuthors = () => {
    return (
        <Container>
            <MainTitleContainer>
                <MainTitle>Autores</MainTitle>
            </MainTitleContainer>

            <AuthorSection>
                {AuthorData.map((data, index) => (
                    <CardAuthor key={index}>
                        <CardPhoto fonte={data.foto}></CardPhoto>
                        <CardTitle>{data.titulo}</CardTitle>
                        <CardSubTitle>{data.subtitulo}</CardSubTitle>
                        <CardText>{data.text}</CardText>
                    </CardAuthor>

                ))}

            </AuthorSection>

        </Container>
    )
}

export default MenuAuthors;