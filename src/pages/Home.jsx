import Banner from "../components/Banner/Banner";
import BlogNotices from "../components/BlogNotices/BlogNotices";
import Footer from "../components/Footer/Footer";
import MenuAuthors from "../components/MenuAuthors/MenuAuthors";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import { MainTitle, MainTitleContainer } from "../styles/GlobalSyle";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner photo={"./ES.jpg"} title={"Entenda como preservar"} boldTitle={"O Meio Ambiente"} paragraph={"Promovendo a Sustentabilidade Ambiental: Juntos, fazemos a diferença para um mundo mais verde e saudável."} />
            <MainTitleContainer>
                <MainTitle>Notícias do Blog</MainTitle>
            </MainTitleContainer>
            <BlogNotices />
            <MenuAuthors />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;