import styled from "styled-components";
import {Title} from "../styles/Common";


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
  height: 100%;
  max-height: 50vh;
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
    height: 30vw;
    max-width: 60vw;
    margin: 0 7vw 0 auto;
  }
`;

const ImageLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = styled.div `
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
  transition: 500ms;
  transform: ${({flip}) => (flip ? "perspective(2000px) rotateY(180deg) scale(1.2)" : "rotateY(0deg)") };
  z-index: ${({flip}) => (flip ? "99" : "") };
  @media screen and (max-width: 800px) {
    transform: ${({flip}) => (flip ? "perspective(2000px) rotateY(180deg)" : "rotateY(0deg)") };
  }
  `;

const Front = styled.div `
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 800px) {
    height: 80%;
  }
`
const Back = styled.div `
  position: absolute;
  padding: 0 7px 7px;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: 
  #617bb0;
  @media screen and (max-width: 800px) {
    bottom: 0;
    height: 150%;
    width: 82vw;
    right: 0;
    transition: 500ms;
    transform: ${({flip, odd}) => (flip ? odd ? "rotateY(180deg) translateX(-1%)" : "rotateY(180deg) translateX(-51%)" : "")};

  }
`
const BackText = styled.p `
  font-size: 2vh;
  line-height: 1.5;
  @media screen and (max-width: 1300px) {
    font-size: 1.9vmin;
    line-height: 1.4;
  }
  @media screen and (max-width: 800px) {
    font-size: 4.7vw;
    line-height: 1.3;
  }
`

const ButtonsWrapper = styled.div `
width: 100%;
min-height: 30%;
`

const Button = styled.button `
width: 80%;
height: 45%;
margin-bottom: 4%;
background-color: #757575;
color: white;
font-size: 1.5vh;
@media screen and (max-width: 1200px) {
  font-size: 12px;
}
`

export { Wrapper, TitleProjects, ImagesWrapper, ImageLink, Image, Card, Front, Back, BackText, ButtonsWrapper, Button };
