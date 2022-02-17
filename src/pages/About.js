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
      <Title>About</Title>
      <TextWrapper>
        <PreText>
          My coding jorney started in July 2020 with the completion of HTM/CSS/JS
          course.
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
