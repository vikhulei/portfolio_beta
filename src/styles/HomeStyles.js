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

const MainSection = styled.div`
  position: absolute;
`;

const LogoWrapper = styled.div`
  position: absolute;
  margin-top: 13vh;
  margin-left: 50%;
  transform: translate(-50%);
  text-align: center;
  height: 140px;
  width: 100%;
  /* background-color: lightcoral; */
`;

const TitleHome = styled(Title)`
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 6vw;
  font-style: italic;
  color: white;
`;

const ReactImg = styled.img`
  position: relative;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  object-fit: contain;
  height: 150%;
`;

const PhotoWrapper = styled.div`
  position: absolute;
  bottom: 40vh;
  margin-left: 50%;
  transform: translate(-50%);
  width: 150px;
  height: 150px;
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
`;

const HomeButton = styled(Button)`
  width: 90px;
  height: 30px;
`;

export {
  Wrapper,
  MainSection,
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
