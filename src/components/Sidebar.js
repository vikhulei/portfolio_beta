import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 50%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
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
