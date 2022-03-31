import { useState } from "react";
import {
  Wrapper,
  TitleProjects,
  ImagesWrapper,
  ImageLink,
  Image,
  Safety,
  Church,
  Front,
  Back
} from "../styles/ProjectsStyles";
import construct from "../assets/construct.png";
import safety from "../assets/safety.png";
import church from "../assets/church.png";
import hrm from "../assets/hrm.png";
import quiz from "../assets/quiz.png";
import words from "../assets/words.png";

const Projects = () => {
  const [flip, setFlip] = useState(new Set)

  const flipCard = (id) => {
    if (flip.has(id)) {
      flip.delete(id)
    } else {
      flip.add(id)
    }
    // console.log(flip)
    // setFlip(flip)
  }

  return (
    <Wrapper>
      <TitleProjects>Projects</TitleProjects>
      <ImagesWrapper>
        <Safety onClick={flipCard(1)}
              flip={flip.has(1)}
        >
          <Front>
        {/* <ImageLink
          href="#"
          href="https://vikhulei.github.io/safety/index.html"
          target="_blank"
        > */}
          <Image src={safety} alt="safety" />
        {/* </ImageLink> */}
        </Front>
        <Back>
         <h2>This is some text to be shown at the back of the SAFETY</h2> 
        </Back>
        </Safety>

        <Church onClick={flipCard(2)}
              flip={flip.has(2)}
        >
          <Front>
        {/* <ImageLink
          href="http://bethanynivki.surge.sh/pages/home"
          target="_blank"
        > */}
          <Image src={church} alt="church" />
        {/* </ImageLink> */}
        </Front>
        <Back>
         <h2>This is some text to be shown at the back of the CHURCH</h2> 
        </Back>
        </Church>

        <ImageLink href="#">
          <Image src={words} alt="words" />
        </ImageLink>
        <ImageLink href="#">
          <Image src={construct} alt="construct" />
        </ImageLink>
        <ImageLink href="#">
          <Image src={hrm} alt="hrm" />
        </ImageLink>
        <ImageLink href="#">
          <Image src={quiz} alt="quiz" />
        </ImageLink>
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Projects;
