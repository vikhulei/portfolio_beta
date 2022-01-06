import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightblue;
`;

const Home = () => {
  return (
    <Wrapper>
      <p>Hello from Home</p>
    </Wrapper>
  );
};

export default Home;
