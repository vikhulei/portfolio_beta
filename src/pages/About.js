import { Title } from "../styles/Common";

import {
  Wrapper,
  TextWrapper,
  PreText,
  Heading,
  Bullet
} from "../styles/AboutStyles";

const About = () => {
  return (
    <Wrapper>
      <Title>About me</Title>
      <TextWrapper>
        <PreText>
          Open for a part-time work at the position of front-end developer.
        </PreText>
        <Heading>Current stack:</Heading>
        <Bullet>HTML/CSS/JS</Bullet>
        <Bullet>React</Bullet>
        <Bullet>React Router</Bullet>
        <Bullet>Styled Components</Bullet>
        <Bullet>Material UI</Bullet>
        <Bullet>Figma</Bullet>
        <Bullet>VS Code/CodeSandbox</Bullet>
        <Bullet>Git, GitHub</Bullet>
        <Heading>Now learning:</Heading>
        <Bullet>Redux</Bullet>
        <Bullet>Express for Node.js</Bullet>
        <Bullet>MongoDB</Bullet>
        <Bullet>MySQL</Bullet>
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
