import { Title } from "../styles/Common";
import {
  Wrapper,
  ImagesWrapper,
  ImageLink,
  Image
} from "../styles/ProjectsStyles";
import construct from "../assets/construct.png";
import safety from "../assets/safety.png";
import church from "../assets/church.png";
import hrm from "../assets/hrm.png";
import quiz from "../assets/quiz.png";
import words from "../assets/words.png";

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <ImagesWrapper>
        <ImageLink
          href="https://vikhulei.github.io/safety/index.html"
          target="_blank"
        >
          <Image src={safety} alt="safety" />
        </ImageLink>
        <ImageLink
          href="http://bethanynivki.surge.sh/pages/home"
          target="_blank"
        >
          <Image src={church} alt="church" />
        </ImageLink>
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
