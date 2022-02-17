import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 71, 81);
`;

const TextWrapper = styled.div`
  position: relative;
  background-color: lightgrey;
  box-shadow: 0 0 40px lightgrey;
  height: 70vh;
  width: 80vw;
  top: 5%;
  margin: 0 auto;
  padding: 8px;
`;

const PreText = styled.div`
  font-size: 2.4vh;
  text-align: center;
  line-height: 1.5;
`;

const Heading = styled.h2`
  font-size: 2.6vh;
  margin: 15px 0 0 20px;
`;

const Bullet = styled.li`
  font-size: 2.4vh;
  margin: 5px 0 0 40px;
`;

export { Wrapper, TextWrapper, PreText, Heading, Bullet };
