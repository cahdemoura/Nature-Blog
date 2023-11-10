import { ContainerLinks, FooterContainer, FooterSections, Icon, Links } from "./FooterStyle";
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { navData } from "../../data/NavbarData";
import { FooterData } from "../../data/FooterData";
import { Link } from "react-router-dom";

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
                        <Links key={index}><Link className="link" to={data.rota}>{data.text}</Link></Links>
                    ))}
                </ContainerLinks>

            </FooterSections>

            <FooterSections>
                <ContainerLinks>
                    {FooterData.map((data, index) => (
                        <Links key={index}><Link className="link" to={data.rota}>{data.texto}</Link></Links>
                    ))}
                </ContainerLinks>
            </FooterSections>
        </FooterContainer>
    )
}

export default Footer;