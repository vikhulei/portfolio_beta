import me from "../assets/me.png";
import react from "../assets/react.png";

import { StylesProvider } from "@material-ui/core";
import FileIcon from "@material-ui/icons/FileCopy";
import SendIcon from "@material-ui/icons/Send";
import {
  Wrapper,
  LogoWrapper,
  TitleHome,
  Subtitle,
  ReactImg,
  PhotoWrapper,
  Square,
  Photo,
  ButtonsWrapper,
  HomeButton
} from "../styles/HomeStyles";

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
        <StylesProvider injectFirst>
          <ButtonsWrapper>
            <HomeButton
              variant="contained"
              style={{ backgroundColor: "#770000", color: "white" }}
              endIcon={<FileIcon />}
              onClick={() =>
                window.open("https://www.linkedin.com/in/vikhulei")
              }
            >
              CV
            </HomeButton>
            <HomeButton
              variant="contained"
              style={{ backgroundColor: "#001c77", color: "white" }}
              endIcon={<SendIcon />}
              onClick={() => window.open("mailto:vikhulei@gmail.com")}
            >
              Email
            </HomeButton>
          </ButtonsWrapper>
        </StylesProvider>
      </Wrapper>
    </>
  );
};

export default Home;
