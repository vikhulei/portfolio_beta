import { useState } from "react";
import {
  Wrapper,
  TitleProjects,
  ImagesWrapper,
  Image,
  Card,
  Front,
  Back,
  BackText,
  ButtonsWrapper,
  Button
} from "../styles/ProjectsStyles";
import construct from "../assets/construct.jpg";
import safety from "../assets/safety.jpg";
import church from "../assets/church.jpg";
import portfolio from "../assets/portfolio.jpg";
import quiz from "../assets/quiz.jpg";
import words from "../assets/words.jpg";

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
      if (id % 2 !== 0) {
        setOdd(true)
      }
      else {
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
          odd={odd}
          onClick={flipCard(1)}
        >
          <Front
            flip={flip.has(1)}
          >
            <Image src={safety} loading="lazy" alt="safety" />
          </Front>
          <Back
            odd={odd}
            flip={flip.has(1)}
          >
            <BackText>This is one of my first projects, made with pure HTML/CSS/JS. Created for my work in Peace Corps.</BackText>
            <ButtonsWrapper>
              <Button onClick={() => window.open("https://vikhulei.github.io/safety/index.html")}> Open</Button>
              <Button onClick={() => window.open("https://github.com/vikhulei/safety")}>View Code</Button>
            </ButtonsWrapper>
          </Back>
        </Card>

        <Card
          flip={flip.has(2)}
          odd={odd}
          onClick={flipCard(2)}
        >
          <Front
            flip={flip.has(2)}
          >
            <Image src={church} loading="lazy" alt="church" />
          </Front>
          <Back
            odd={odd}
            flip={flip.has(2)}
          >
            <BackText>This small website was created with React and React Router for an existing church in Kyiv. </BackText>
            <ButtonsWrapper>
              <Button onClick={() => window.open("https://bethanynivki.surge.sh/")}> Open</Button>
              <Button onClick={() => window.open("https://github.com/vikhulei/bethany_church")}>View Code</Button>
            </ButtonsWrapper>
          </Back>
        </Card>

        <Card
          flip={flip.has(3)}
          odd={odd}
          onClick={flipCard(3)}
        >
          <Front
            flip={flip.has(3)}
          >
            <Image src={words} loading="lazy" alt="words" />
          </Front>
          <Back
            odd={odd}
            flip={flip.has(3)}
          >
            <BackText>I did this game as part of React course on Udemy, with some adjustments. </BackText>
            <ButtonsWrapper>
              <Button onClick={() => window.open("https://vicswordgame.surge.sh/")}> Open</Button>
              <Button onClick={() => window.open("https://github.com/vikhulei/9projects-1wordgame")}>View Code</Button>
            </ButtonsWrapper>
          </Back>
        </Card>

        <Card
          flip={flip.has(4)}
          odd={odd}
          onClick={flipCard(4)}
        >
          <Front
            flip={flip.has(4)}
          >
            <Image src={portfolio} loading="lazy" alt="portfolio" />
          </Front>
          <Back
            odd={odd}
            flip={flip.has(4)}
          >
            <BackText>You are viewing it now. Styled Components, React Icons and MUI have been used.  </BackText>
            <ButtonsWrapper>
              <Button onClick={() => window.open("https://github.com/vikhulei/portfolio")}>View Code</Button>
            </ButtonsWrapper>
          </Back>
        </Card>

        <Card
          flip={flip.has(5)}
          odd={odd}
          onClick={flipCard(5)}
        >
          <Front
            flip={flip.has(5)}
          >
            <Image src={construct} loading="lazy" alt="construct" />
          </Front>
          <Back
            odd={odd}
            flip={flip.has(5)}
          >
            <BackText>The portal helps with construction costs calculations. JS is used. <br />
              SITE UNDER CONSTRUCTION
            </BackText>
          </Back>
        </Card>

        <Card
          flip={flip.has(6)}
          odd={odd}
          onClick={flipCard(6)}
        >
          <Front
            flip={flip.has(6)}
          >
            <Image src={quiz} loading="lazy" alt="quiz" />
          </Front>
          <Back
            odd={odd}
            flip={flip.has(6)}
          >
            <BackText>Questions are shuffled randomly. Press R to repeat a question. </BackText>
            <ButtonsWrapper>
              <Button onClick={() => window.open("https://vicsquiz.surge.sh")}> Open</Button>
              <Button onClick={() => window.open("https://github.com/vikhulei/quiz")}>View Code</Button>
            </ButtonsWrapper>
          </Back>
        </Card>

      </ImagesWrapper>
    </Wrapper>
  );
};

export default Projects;