import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 71, 81);
`;

const ImagesWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80vw;
  height: 70vh;
  background-color: lightblue;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export { Wrapper, ImagesWrapper, Image };
