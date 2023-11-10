import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import SobreNos from "../components/SobreNos/SobreNos";
import { MainTitle, MainTitleContainer } from "../styles/GlobalSyle";

const Sobre = () => {
    return (
        <>
            <Navbar />
            <SobreNos></SobreNos>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Sobre;