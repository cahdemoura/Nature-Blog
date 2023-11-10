import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 8px;

  .titleColor {
    color: orange;
  }
`;

export const NavSection = styled.div`
  display: flex;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 50px;
  z-index: 50;

  @media screen and (max-width: 960px) {
    gap: 0;
    background-color: orange;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visibily" : "hidden")};
    transition: opacity 0.3s ease-in-out;
  }
`;

export const NavLinks = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;

  a {
    display: block;

    color: black;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
  }

  a:hover {
    color: orange;
  }
`;

export const MobileIcon = styled.div`
  font-size: 26px;
  z-index: 50;
  cursor: pointer;
  &:hover {
    transform: scale(90%);
    transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
