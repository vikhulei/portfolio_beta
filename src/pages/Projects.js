import { Title } from "../styles/Common";
import { Wrapper, ImagesWrapper, Image } from "../styles/ProjectsStyles";
import me from "../assets/me.png";

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <ImagesWrapper>
        <Image src={me} alt="me" />
        <Image src={me} alt="me" />
        <Image src={me} alt="me" />
        <Image src={me} alt="me" />
        <Image src={me} alt="me" />
        <Image src={me} alt="me" />
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Projects;
