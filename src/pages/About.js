import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 69, 71);
  z-index: 20;
`;

const Button = styled.button`
  position: absolute;
  background-color: lightgreen;
  height: 100px;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translate(10px 10px);
  }
`;

const About = () => {
  const click = () => {
    alert();
  };
  return (
    <Wrapper>
      <p>Hello from About</p>
      <Button onClick={click}>Press me please</Button>
    </Wrapper>
  );
};

export default About;
