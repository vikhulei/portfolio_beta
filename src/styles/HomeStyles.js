import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Title } from "../styles/Common";

const Wrapper = styled.div`
  /* @media screen and (min-width: 600px) {
    display: flex;
  } */
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 69, 71);
  z-index: 10;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 13vh;
  text-align: center;
  width: 100%;
  // background-color: lightcoral;
  @media screen and (min-width: 800px) {
    padding-top: 20px;
    width: fit-content;
    left: 55vw;
    height: 60%;
  }
`;

const TitleHome = styled(Title)` margin-bottom: 10px;
  font-size: min(14vw, 400%);
`;

const Subtitle = styled.p`
font-size: min(12vw, 220%);
  font-style: italic;
  color: white;
`;

const ReactImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-47%);
  object-fit: contain;
  height: 150%;
  @media screen and (min-width: 800px) {
    height: 30vw;
    min-height: 400px;
    top: 0;
    transform: translate(-47%);
  }
`;

const PhotoWrapper = styled.div`
  position: absolute;
  bottom: 40vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
  @media screen and (min-width: 800px) {
    top: 20vh;
    margin-left: 0;
    transform: translate(0);
    right: 60vw;
    min-width: 230px;
    min-height: 230px;
    width: 20vw;
    height: 20vw;
    max-width: 300px;
    max-height: 300px;
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
  bottom: 20vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 70vw;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    top: calc(20vh + 20vw + 70px);
    margin-left: 0;
    transform: translate(0);
    min-width: 230px;
    width: 20vw;
    max-width: 300px;
    right: 60vw;
  }
`;

const HomeButton = styled(Button)`
  width: 90px;
  height: 30px;
  @media screen and (min-width: 800px) {
    height: 40px;
    width: 110px;
  }

`;

export {
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
};
