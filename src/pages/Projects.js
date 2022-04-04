import { useState } from "react";
import {
  Wrapper,
  TitleProjects,
  ImagesWrapper,
  ImageLink,
  Image,
  Card,
  Front,
  Back,
  BackText,
  ButtonsWrapper,
  Button
} from "../styles/ProjectsStyles";
import construct from "../assets/construct.png";
import safety from "../assets/safety.png";
import church from "../assets/church.png";
import hrm from "../assets/hrm.png";
import quiz from "../assets/quiz.png";
import words from "../assets/words.png";

const Projects = () => {
  const [flip, setFlip] = useState(new Set());

  const [odd, setOdd] = useState(false);

  const flipCard = (id) => {
    return (e) => {
    e.preventDefault();
    let flipp = new Set(flip)
    if (flipp.has(id)) {
      flipp.delete(id)
    } else {
      flipp.add(id)
    }
    setFlip(flipp)
    if((id===3) || (id===1) || (id===5)) {
      setOdd(true)
    } else {
      setOdd(false)
    }
  }
}

  return (
    <Wrapper>
      <TitleProjects>Projects</TitleProjects>
      <ImagesWrapper>
        <Card
          flip={flip.has(1)}
          onClick={flipCard(1)}
          >
          <Front><Image src={safety} alt="safety" /></Front>
        <Back
        odd="true"
        >
         <BackText>This is one of my first projects, made with pure HTML/CSS/JS. Created for my work in Peace Corps. </BackText> 
         <ButtonsWrapper>
         <Button onClick={() => window.open("https://vikhulei.github.io/safety/index.html")}> Open</Button>
         <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
         </ButtonsWrapper>
        </Back>
        </Card>

        <Card
        flip={flip.has(2)}
        onClick={flipCard(2)}
        >
          <Front
        >
          <Image src={church} alt="church" />
        </Front>
        <Back
        >
         <BackText>This small website was created with React and React Router for an existing church in Kyiv. </BackText> 
         <ButtonsWrapper>
         <Button onClick={() => window.open("https://vikhulei.github.io/safety/index.html")}> Open</Button>
         <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
         </ButtonsWrapper>
        </Back>
        </Card>
        <Card
        flip={flip.has(3)}
        onClick={flipCard(3)}
        >
        <Front>
          <Image src={words} alt="words" />
        </Front>
        <Back
          odd="true"
        >
         <BackText>I did this game as part of React course on Udemy, with some adjustments. </BackText> 
         <ButtonsWrapper>
         <Button onClick={() => window.open("https://vikhulei.github.io/safety/index.html")}> Open</Button>
         <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
         </ButtonsWrapper>
        </Back>
        </Card>
        <Card
        flip={flip.has(4)}
        onClick={flipCard(4)}
        >
        <Front>
          <Image src={construct} alt="construct" />
        </Front>
        <Back>
         <BackText>The portal helps with construction costs calculations. JS is used. </BackText> 
         <ButtonsWrapper>
         <Button onClick={() => window.open("https://vikhulei.github.io/safety/index.html")}> Open</Button>
         <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
         </ButtonsWrapper>
        </Back>
        </Card>
        <Card
        flip={flip.has(5)}
        onClick={flipCard(5)}
        >
        <Front>
          <Image src={hrm} alt="hrm" />
        </Front>
        <Back
          odd="true"        
        >
         <BackText>You are viewing it now. Styled Components, React Icons and MUI have been used.  </BackText> 
         <ButtonsWrapper>
         <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
         </ButtonsWrapper>
        </Back>
        </Card>
        <Card
        flip={flip.has(6)}
        onClick={flipCard(6)}
        >
        <Front>
          <Image src={quiz} alt="quiz" />
        </Front>
        <Back>
         <BackText>Questions are shuffled randomly. Press R to repeat a question. </BackText> 
         <ButtonsWrapper>
         <Button onClick={() => window.open("https://vikhulei.github.io/safety/index.html")}> Open</Button>
         <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
         </ButtonsWrapper>
        </Back>
        </Card>
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Projects;
