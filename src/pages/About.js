import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightcoral;
`;

const About = () => {
  return (
    <Wrapper>
      <p>Hello from About</p>
    </Wrapper>
  );
};

export default About;
