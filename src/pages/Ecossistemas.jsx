import Banner from "../components/Banner/Banner";
import EcossistemaCards from "../components/EcossistemaCards/EcossistemaCards"
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import { MainTitle, MainTitleContainer } from "../styles/GlobalSyle";
import {EcossistemaData} from '../data/EcossistemaData'

const Ecossistemas = () => {
    return (
        <>
            <Navbar />
            <Banner photo={"./Ecossistema_banner.avif"} title={"Você sabe o que é "} boldTitle={"Um Ecossistema?"} paragraph={"Descubra a complexidade e a importância dos ecossistemas. Saiba como preservá-los para um futuro sustentável"} />
            <MainTitleContainer>
                <MainTitle>Ecossistemas</MainTitle>
            </MainTitleContainer>
            <EcossistemaCards Edata={EcossistemaData}/>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Ecossistemas;