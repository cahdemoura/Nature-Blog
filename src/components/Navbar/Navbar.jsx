import { useState } from "react";
import { Container } from "../../styles/GlobalSyle";
import { MobileIcon, Nav, NavLinks, NavMenu, NavSection } from "./NavbarStyle";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { navData } from "../../data/NavbarData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }
    return (
        <Container>
            <Nav>
                <div>
                    <h1>Eco<span className="titleColor">Mundo</span> </h1>
                </div>

                <NavSection>
                    <NavMenu show={show}>
                        {navData.map((menu,index)=>(
                            <NavLinks key={index}><a href={menu.rota}>{menu.text}</a></NavLinks>
                        ))}

                        {/*
                                                <NavLinks><a href="">Home</a></NavLinks>
                        <NavLinks><a href="">Ecossistemas</a></NavLinks>
                        <NavLinks><a href="">Soluções</a></NavLinks>
                        <NavLinks><a href="">Sobre</a></NavLinks>
                        */}
                    </NavMenu>

                    <MobileIcon onClick={handleClick}>
                        {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    </MobileIcon>


                </NavSection>
            </Nav>
        </Container>
    )
}

export default Navbar;