import { ContainerLinks, FooterContainer, FooterSections, Icon, Link } from "./FooterStyle";
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { navData } from "../../data/NavbarData";
import { FooterData } from "../../data/FooterData";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSections size='fit-content'>
                <Icon>
                    <BsFacebook />
                </Icon>

                <Icon>
                    <BsInstagram />
                </Icon>

                <Icon>
                    <AiFillTwitterCircle />
                </Icon>

                <Icon>
                    <AiFillYoutube />
                </Icon>
            </FooterSections>

            <FooterSections>
                <ContainerLinks>
                    {navData.map((data, index) => (

                        <Link key={index} href={data.rota}>{data.text}</Link>

                    ))}
                </ContainerLinks>

            </FooterSections>

            <FooterSections>
                <ContainerLinks>
                    {FooterData.map((data, index) => (

                        <Link key={index} href={data.rota}>{data.texto}</Link>

                    ))}
                </ContainerLinks>
            </FooterSections>
        </FooterContainer>
    )
}

export default Footer;