import me from "../assets/me.png";
import react from "../assets/react.png";
import { StylesProvider } from "@material-ui/core";
import FileIcon from "@material-ui/icons/FileCopy";
import SendIcon from "@material-ui/icons/Send";
import {
  Wrapper,
  LogoWrapper,
  TitleWrapper,
  TitleHome,
  Subtitle,
  ReactImg,
  Action,
  PhotoWrapper,
  Photo,
  ButtonsWrapper,
  HomeButton
} from "../styles/HomeStyles";

const Home = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <TitleWrapper>
            <TitleHome>Victor Hulei</TitleHome>
            <Subtitle>Front-End Developer</Subtitle>
          </TitleWrapper>
          <ReactImg src={react} loading="lazy" alt="react_image" />
        </LogoWrapper>
        <Action>
          <PhotoWrapper>
            <Photo src={me} loading="lazy" alt="me" />
          </PhotoWrapper>
          <ButtonsWrapper>
            <StylesProvider injectFirst>
              <HomeButton
                variant="contained"
                style={{ backgroundColor: "#8c0d2d", color: "white" }}
                endIcon={<FileIcon />}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/vikhulei")
                }
              >
                CV
              </HomeButton>
              <HomeButton
                variant="contained"
                style={{ backgroundColor: "#0d5b8c", color: "white" }}
                endIcon={<SendIcon />}
                onClick={() => window.open("mailto:vikhulei@gmail.com")}
              >
                Email
              </HomeButton>
            </StylesProvider>
          </ButtonsWrapper>
        </Action>
      </Wrapper>
    </>
  );
};

export default Home;
