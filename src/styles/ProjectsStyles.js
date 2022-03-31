import styled from "styled-components";
import {Title} from "../styles/Common"

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 71, 81);
`;

const TitleProjects = styled(Title) `
  @media screen and (min-width: 800px) {
    position: relative;
    width: 60vw;
    margin-left: 32vw;
  }
`

const ImagesWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 8%;
  width: 80vw;
  max-width: 500px;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.2vw;
  row-gap: 2.2vw;
  @media screen and (max-height: 400px) {
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
  }
  @media screen and (min-width: 800px) {
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
    max-width: 60vw;
    margin: 0 7vw 0 auto;
  }
`;

const ImageLink = styled.a`
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Card = styled.div `
  position: relative;
  transform-style: preserve-3d;
  transition: 500ms;
    transform: ${({flip}) => (flip ? "perspective(2000px) rotateY(180deg)" : "rotateY(0deg)") };
  height: 100%;
`;

const Safety = styled(Card) ``;
const Church = styled(Safety) ``;

const Front = styled.div `
  position: absolute;
  backface-visibility: hidden;
`
const Back = styled.div `
  position: absolute;
  background-color: rgba(35,25,126,0.6);
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`

export { Wrapper, TitleProjects, ImagesWrapper, ImageLink, Image, Safety, Church, Front, Back };
