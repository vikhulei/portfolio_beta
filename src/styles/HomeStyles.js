import styled from "styled-components"
import { Button } from "@material-ui/core"
import { Title } from "../styles/Common"

const Wrapper = styled.div`
position: relative;
height: 100vh;
width: 100vw;
background-color: rgb(67, 69, 71);
`

const LogoWrapper = styled.div`
position: absolute;
top: 8%;
right: 5%;
height: 65%;
width: 35%;
@media screen and (max-width: 800px) {
  right: 0;
  height: 35%;
  width: 100%;
};
@media screen and (max-height: 400px) {
  width: fit-content;
  height: 60%;
  top: 20%;
  right: 10%;
  };
`

const TitleWrapper = styled.div`
margin-top: min(200px, 20%);
`

const TitleHome = styled(Title)`
font-size: max(6vw, 320%);
`

const Subtitle = styled(Title)`
font-size: max(3vw, 170%);
font-style: italic;
line-height: 0.1;
`

const ReactImg = styled.img`
position: absolute;
width: 100%;
top: 0;
@media screen and (max-width: 800px) {
  left: 50%;
  transform: translateX(-48%);
  width: auto;
  height: 100%;
  };
`

const Action = styled.div`
position: absolute;
margin-top: min(15%, 150px);
left: 30%;
width: 20%;
max-width: 300px;
min-width: 200px;
height: min(60%, 30vw);
min-height: 350px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 800px) {
  margin-top: 50vh;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 37%;
  min-height: 37%;
};
@media screen and (max-height: 400px) {
  margin-top: 8%;
  left: 10%;
  width: 25%;
  min-width: 20%;
  height: 70%;
};
`

const PhotoWrapper = styled.div`
position: relative;
width: 100%;
background-color: grey;
@media screen and (max-width: 800px) {
  width: 40vw;
  height: 40vw;
  max-width: 150px;
  max-height: 150px;
};
@media screen and (max-height: 400px) {
  width: 19vw;
};
`

const Photo = styled.img`
width: 100%;
margin-bottom: -2%;
margin-top: -20%;
`

const ButtonsWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
@media screen and (max-width: 800px) {
  width: 70vw;
  max-width: 300px;
};
@media screen and (max-height: 400px) {
  width: 100%;
};
`

const HomeButton = styled(Button)`
width: 40%;
height: 4vh;
@media screen and (max-width: 800px) {
  width: 90px;
  height: 30px;
};
@media screen and (max-height: 400px) {
  width: 45%;
  height: 8vh;
`

export {
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
};
