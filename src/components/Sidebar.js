import styled from "styled-components";
import Hamburger from "hamburger-react";

const NavWrapper = styled.div`

  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 300ms;
  height: 100vh;
  width: 100%;
  background-color: grey;
  z-index: 89;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 800px) {
    left: 5vw;
    transition: 0ms;
    width: fit-content;
    height: 500px;
    top: 40%;
    transform: translateY(-50%);
    background-color: rgba(30, 30, 30, 0);
  }
`;

const NavLink = styled.a`
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px black;
  &:active {
    transform: translate(3px, 3px);
    color: lightgrey;
  }
  @media screen and (min-width: 800px) {
    border-bottom: none;
    justify-content: left;
    font-size: 2rem;
  }
`;

const HamWrapper = styled.div`
  position: fixed;
  width: 95%;
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 99;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const SideBar = ({ isOpen, setOpen, toggleHam }) => {
  return (
    <>
      <HamWrapper>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamWrapper>
      <NavWrapper isOpen={isOpen} onClick={toggleHam}>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contacts">Contacts</NavLink>
      </NavWrapper>
    </>
  );
};

export default SideBar;
