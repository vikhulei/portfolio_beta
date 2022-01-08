import styled from "styled-components";
import { Title } from "../styles/Common";
import me from "../assets/me.png";
import react from "../assets/react.png";
import Button from "@material-ui/core/Button";

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
  top: 13vh;
  margin-left: 50%;
  transform: translate(-50%);
  text-align: center;
  height: 140px;
  width: 100%;
`;

const TitleHome = styled(Title)`
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 12vw;
`;

const Subtitle = styled.p`
  font-size: 6vw;
  font-style: italic;
  color: white;
`;

const ReactImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  object-fit: contain;
  height: 150%;
`;

const PhotoWrapper = styled.div`
  position: absolute;
  bottom: 30vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Square = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
`;

const Photo = styled.img`
  position: absolute;
  bottom: 0;
  object-fit: contain;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 10vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 60vw;
  display: flex;
  justify-content: space-between;
`;

const CVButton = styled(Button)`
  position: absolute;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <TitleHome>Viktor Hulei</TitleHome>
          <Subtitle>Front-End Developer</Subtitle>
          <ReactImg src={react} alt="react_image" />
        </LogoWrapper>
        <PhotoWrapper>
          <Square />
          <Photo src={me} alt="me" />
        </PhotoWrapper>
        <ButtonsWrapper>
          <CVButton variant="contained">CV</CVButton>
          <Button variant="contained" style={{ width: "100px" }}>
            Email
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
