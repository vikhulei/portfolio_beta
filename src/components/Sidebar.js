import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
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
`;

const SideBar = () => {
  return (
    <Wrapper>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contacts">Contacts</NavLink>
    </Wrapper>
  );
};

export default SideBar;
