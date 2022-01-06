import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 69, 71);
  z-index: 30;
`;

const Projects = ({ myref }) => {
  return (
    <Wrapper ref={myref}>
      <p>Hello from Projects</p>
    </Wrapper>
  );
};

export default Projects;
