import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 69, 71);
  z-index: 10;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 10vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 50vw;
  height: 100px;
  background-color: lightcoral;
  &:hover {
    cursor: pointer;
  }
`;

const PhotoWrapper = styled.div`
  position: absolute;
  top: 40vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 50vw;
  height: 100px;
  background-color: lightblue;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  top: 70vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 70vw;
  height: 100px;
  background-color: lightblue;
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

const Home = ({ goTo }) => {
  return (
    <>
      <Wrapper>
        <Button onClick={goTo}>Press me please</Button>
        <LogoWrapper />
        <PhotoWrapper />
        <ButtonsWrapper />
      </Wrapper>
    </>
  );
};

export default Home;
