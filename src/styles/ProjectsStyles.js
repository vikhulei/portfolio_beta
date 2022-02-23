import styled from "styled-components";
import {Title} from "../styles/Common"

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(67, 71, 81);
`;

const TitleProjects = styled(Title) `
  @media screen and (min-width: 800px) {
    position: absolute;
    width: 60vw;
    left: 25vw;
  }
`

const ImagesWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 8%;
  width: 80vw;
  max-width: 500px;
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.2vw;
  row-gap: 2.2vw;
  @media screen and (max-height: 400px) {
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
  }
  @media screen and (min-width: 800px) {
    position: absolute;
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
    max-width: 60vw;
    top: 30vh;
    left: 25vw;
  }
`;

const ImageLink = styled.a`
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export { Wrapper, TitleProjects, ImagesWrapper, ImageLink, Image };
