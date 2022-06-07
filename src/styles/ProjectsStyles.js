import styled from "styled-components";
import {Title} from "../styles/Common";

const Wrapper = styled.div`
position: relative;
padding-top: 50px;
height: 100vh;
width: 100%;
background-color: rgb(67, 71, 81);
`

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
};
@media screen and (min-width: 800px) {
  grid-template-columns: repeat(3, 1fr);
  width: 60vw;
  height: 30vw;
  max-width: 60vw;
  margin: 0 7vw 0 auto;
};
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Card = styled.div `
position: relative;
height: 100%;
`

const Front = styled.div `
position: absolute;
width: 100%;
height: 100%;
transition: 600ms;
opacity: ${({flip}) => (flip ? "0" : "1")};
@media screen and (max-width: 800px) {
  height: 80%;
}
`
const Back = styled.div `
position: absolute;
padding: 0 7px 7px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
background-color: #617bb0;
z-index: 999;
transition: 600ms;
opacity: ${({flip}) => (flip ? "1" : "0")};
transform: ${({flip}) => (flip ? "scale(1.2)" : "scale(0)")};
@media screen and (max-width: 800px) {
  transition: 600ms;
  transform: translate(-50%, -50%);
  width: 82vw;
  height: 150%;
  transform: ${({flip, odd}) => (flip ? odd ? "translate(51%, 20%) scale(1)" : "translate(1%, 20%) scale(1)" : "scale(0)")};
  bottom: 0;
  right: 0;
};
@media screen and (max-height: 400px) {
  padding: 0px;
  width: 100%;
  height: 100%;
  transform: ${({flip, odd}) => (flip ? odd ? "scale(1.7)" : "scale(1.7)" : "scale(1.7)")};
};
`
const BackText = styled.p `
font-size: 2vh;
line-height: 1.5;
@media screen and (max-width: 1300px) {
  font-size: 1.9vmin;
  line-height: 1.4;
};
@media screen and (max-width: 800px) {
  font-size: 4.7vw;
  line-height: 1.3;
};
@media screen and (max-height: 400px) {
  font-size: 8px;
};
`

const ButtonsWrapper = styled.div `
width: 100%;
min-height: 30%;
@media screen and (max-height: 400px) {
  min-height: 30px;
};
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
};
@media screen and (max-height: 400px) {
  font-size: 6px;
  height: 40%;
  margin-bottom: 1%;
};
`

export { Wrapper, TitleProjects, ImagesWrapper, Image, Card, Front, Back, BackText, ButtonsWrapper, Button };
