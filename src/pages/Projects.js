import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  Wrapper,
  TitleProjects,
  ImagesWrapper,
  ImageLink,
  Image,
  Card,
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
  const [flip, setFlip] = useState(false)

  // const tst = (idd) => {
  //   let flip = new Set()
  //   flip.add(45);
  //   setFlip(flip);
  //   console.log(flip)
  // }


  const flipCard = () => {
    return (e) => {
    e.preventDefault();
    setFlip(!flip)
    // let flip = new Set(flip)
    // if (flip.has(id)) {
    //   flip.delete(id)
    // } else {
    //   flip.add(id)
    // }
    // setFlip(flip)
    // console.log(flip)
  }
}

  return (
    <Wrapper>
      <TitleProjects>Projects</TitleProjects>
      <ImagesWrapper>
        <ReactCardFlip
          flip={flip}
          flipDirection="vertical"
          >
          <Front
            onClick={flipCard}
            >
            
        {/* <ImageLink
          href="#"
          href="https://vikhulei.github.io/safety/index.html"
          target="_blank"
        > */}
          <Image src={safety} alt="safety" />
        {/* </ImageLink> */}
        </Front>
        <Back
        onClick={flipCard(1)}
        >
         <h2>This is some text to be shown at the back of the SAFETY</h2> 
        </Back>
        </ReactCardFlip>

        <ReactCardFlip
        >
          <Front
          >
        {/* <ImageLink
          href="http://bethanynivki.surge.sh/pages/home"
          target="_blank"
        > */}
          <Image src={church} alt="church" />
        {/* </ImageLink> */}
        </Front>
        <Back
        >
         <h2>This is some text to be shown at the back of the CHURCH</h2> 
        </Back>
        </ReactCardFlip>

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
