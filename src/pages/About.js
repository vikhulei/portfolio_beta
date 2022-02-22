import { Title } from "../styles/Common";

import {
  Wrapper,
  TitleAbout,
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
      <TitleAbout>About me</TitleAbout>
      <TextWrapper>
        <PreText>
          My coding jorney started in July 2020 with the completion of HTM/CSS/JS
          course.
        </PreText>
        <CurrentStack>
        <Heading>Current stack:</Heading>
        <Bullet>HTML/CSS/JS</Bullet>
        <Bullet>React</Bullet>
        <Bullet>React Router</Bullet>
        <Bullet>Styled Components</Bullet>
        <Bullet>Material UI</Bullet>
        <Bullet>Figma</Bullet>
        <Bullet>VS Code/CodeSandbox</Bullet>
        <Bullet>Git, GitHub</Bullet>
        </CurrentStack>
        <NowLearning>
        <Heading>Now learning:</Heading>
        <Bullet>SASS</Bullet>
        <Bullet>Express for Node.js</Bullet>
        <Bullet>MongoDB</Bullet>
        <Bullet>Redux</Bullet>
        </NowLearning>
      </TextWrapper>
    </Wrapper>
  );
};

export default About;
