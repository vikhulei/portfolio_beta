import { Title } from "../styles/Common";
import { Wrapper, ImagesWrapper, Image } from "../styles/ProjectsStyles";
import construct from "../assets/construct.png";
import safety from "../assets/safety.png";

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <ImagesWrapper>
        <Image src={construct} alt="construct" />
        <Image src={safety} alt="safetz" />
        <Image src={safety} alt="safetz" />
        <Image src={construct} alt="construct" />
        <Image src={construct} alt="construct" />
        <Image src={safety} alt="safetz" />
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Projects;
