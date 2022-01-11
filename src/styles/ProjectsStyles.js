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
  top: 10%;
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export { Wrapper, ImagesWrapper, Image };
