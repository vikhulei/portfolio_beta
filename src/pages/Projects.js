import { Title } from "../styles/Common";
import { Wrapper, ImagesWrapper, Image } from "../styles/ProjectsStyles";
import construct from "../assets/construct.png";
import safety from "../assets/safety.png";
import church from "../assets/church.png";
import hrm from "../assets/hrm.png"
import quiz from "../assets/quiz.png"
import words from "../assets/words.png"

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <ImagesWrapper>
        <Image src={safety} alt="safety" />
        <Image src={church} alt="church" />
        <Image src={words} alt="words" />
        <Image src={construct} alt="construct" />
        <Image src={hrm} alt="hrm" />
        <Image src={quiz} alt="quiz" />
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Projects;
