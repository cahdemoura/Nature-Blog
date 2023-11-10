
import {ContainerBlog, Border, ButtonContainer, CardButton, CardContent, CardImage, CardText, CardTitle, ContainerCard, Grid } from "./BlogNoticesStyle";
import {IoIosArrowForward} from "react-icons/io"
import { BlogData } from "../../data/BlogData";

const BlogNotices = () => {
    return (
        <ContainerBlog>
            <Grid>
                {BlogData.map((data, index) => (
                    <ContainerCard key={index}>
                        <CardImage src={data.foto} ></CardImage>
                        <CardContent>
                            <CardTitle>{data.titulo}</CardTitle>
                            <Border />
                            <CardText>{data.texto}</CardText>
                            <ButtonContainer>
                                <CardButton><IoIosArrowForward/></CardButton>
                            </ButtonContainer>
                        </CardContent>
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

export default BlogNotices;
