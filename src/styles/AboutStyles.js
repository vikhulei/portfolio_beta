import styled from "styled-components";


const Wrapper = styled.div`
  position: relative;
  padding-top: 30px;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 71, 81);
`;

const TextWrapper = styled.div`
position: relative;
background-color: lightgrey;
box-shadow: 0 0 40px lightgrey;
width: 60vw;
height: 60vh;
margin: 0 7vw 0 auto;
padding: 30px;
line-height: 1.2;

@media screen and (max-width: 830px) {
  height: 65vh;
  width: 80vw;
  top: 5%;
  margin: 0 auto;
  padding: 8px;
}

 @media screen and (max-height: 400px) {
    line-height: 1;
    height: 55vh;
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
  @media screen and (max-height: 400px) {
    font-size: 4vh;
  }
`;

const CurrentStack = styled.div `
@media screen and (min-width: 800px), (max-height: 400px) {
  position: absolute;
  left: 4vw;
  width: fit-content;
}
`
const NowLearning = styled.div `
@media screen and (min-width: 800px), (max-height: 400px) {
  position: absolute;
  right: 4vw;
  width: fit-content;
}
`

const Heading = styled.h2`
  font-size: 2.6vh;
  margin: 15px 0 0 20px;
  @media screen and (max-height: 400px) {
    font-size: 3.2vh;
  }
`;

const Bullet = styled.li`
  font-size: 2.4vh;
  margin: 5px 0 0 40px;
  @media screen and (max-height: 400px) {
    font-size: 3.2vh;
  }
`;

export { Wrapper, TextWrapper, PreText, CurrentStack, NowLearning, Heading, Bullet };
