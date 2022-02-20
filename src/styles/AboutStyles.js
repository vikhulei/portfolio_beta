import styled from "styled-components";
import {Title} from "../styles/Common";

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 71, 81);
`;

const TitleAbout = styled(Title) `
@media screen and (min-width: 800px) {
  text-align: right;
  margin-right: 7vw;
}
`

const TextWrapper = styled.div`
  position: relative;
  background-color: lightgrey;
  box-shadow: 0 0 40px lightgrey;
  height: 70vh;
  width: 80vw;
  top: 5%;
  margin: 0 auto;
  padding: 8px;
  @media screen and (min-width: 800px) {
    width: 60vw;
    height: 55vh;
    margin: 0 7vw 0 auto;

  }
`;

const PreText = styled.div`
  font-size: 2.4vh;
  text-align: center;
  line-height: 1.5;
  @media screen and (min-width: 800px) {
    font-size: min(3vh, 3vw);
    margin-bottom: 2vh;
  }
`;

const CurrentStack = styled.div `
@media screen and (min-width: 800px) {
  position: absolute;
  left: 4vw;
  width: fit-content;
}
`
const NowLearning = styled.div `
@media screen and (min-width: 800px) {
  position: absolute;
  right: 4vw;
  width: fit-content;
}
`

const Heading = styled.h2`
  font-size: 2.6vh;
  margin: 15px 0 0 20px;
`;

const Bullet = styled.li`
  font-size: 2.4vh;
  margin: 5px 0 0 40px;

`;

export { Wrapper, TitleAbout, TextWrapper, PreText, CurrentStack, NowLearning, Heading, Bullet };
