import Banner from "../components/Banner/Banner";
import EcossistemaCards from "../components/EcossistemaCards/EcossistemaCards"
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import { MainTitle, MainTitleContainer } from "../styles/GlobalSyle";
import { SolucoesData } from "../data/SolucoesData";

const Solucoes = () => {
    return (
        <>
            <Navbar />
            <Banner photo={"./solucoesBanner.jpg"} title={"Tecnologia a favor do"} boldTitle={"Futuro Sustentável"} paragraph={"Com a tecnologia como aliada, estamos moldando um futuro sustentável. Inovações e soluções eco-amigáveis lideram o caminho. Junte-se a nós!"} />
            <MainTitleContainer>
                <MainTitle>Soluções</MainTitle>
            </MainTitleContainer>
            <EcossistemaCards Edata={SolucoesData}/>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Solucoes;