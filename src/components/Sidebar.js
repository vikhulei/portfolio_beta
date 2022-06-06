import styled from "styled-components";
import Hamburger from "hamburger-react";

const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  left: 5vw;
  width: fit-content;
  height: 100vh;
  padding: 15% 0;
  z-index: 98;
  
  @media screen and (max-width: 800px) {
    transition: 500ms;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    padding: 0;
    width: 100%;
    background-color: grey;
  }
`

const NavLink = styled.a`
position: relative;
text-decoration: none;
color: white;
border-bottom: none;
font-size: 2rem;
&:active {
  transform: translate(3px, 3px);
  color: lightgrey;
}

@media screen and (max-width: 800px) {
  font-size: 1.5rem;
  border-bottom: solid 2px black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const HamWrapper = styled.div`
display: none;
@media screen and (max-width: 800px) {
  position: fixed;
  width: 95%;
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 99;
  }
`

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
