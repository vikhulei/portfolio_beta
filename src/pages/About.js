import { Title } from "../styles/Common";

import {
  Wrapper,
  TextWrapper,
  PreText,
  CurrentStack,
  NowLearning,
  Heading,
  Bullet
} from "../styles/AboutStyles";

const About = () => {
  return (
    <Wrapper>
      <Title>About me</Title>
      <TextWrapper>
        <PreText>
          My coding jorney started in July 2020 with the completion of HTM/CSS/JS
          course.
        </PreText>
        <CurrentStack>
        <Heading>Current stack:</Heading>
        <Bullet>HTML/CSS/JS</Bullet>
        <Bullet>React, React Router</Bullet>
        <Bullet>Styled Components</Bullet>
        <Bullet>Figma</Bullet>
        <Bullet>VS Code/CodeSandbox</Bullet>
        <Bullet>Git, GitHub</Bullet>
        <Bullet>SASS</Bullet>
        </CurrentStack>
        <NowLearning>
        <Heading>Now learning:</Heading>
        <Bullet>Python</Bullet>
        <Bullet>MongoDB</Bullet>
        <Bullet>mySQL</Bullet>
        </NowLearning>
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
