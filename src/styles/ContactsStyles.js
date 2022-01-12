import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(57, 71, 81);
`;

const ImageWrapper = styled.div `
  position: relative;
  margin: 0 auto;
  top: 5vh;
  width: 70vw;
`;

const Image = styled.img `
  width: 100%;
  object-fit: contain;
`;

const ContactsWrapper = styled.div `
  position: relative;
  margin: 0 auto;
  top: 15vh;
  width: 70vw;
`;

const PhoneNumber = styled.p `

`;

const EmailAddress = styled.p `

`;

const IconsWrapper = styled.div `

`;



export { Wrapper, ImageWrapper, Image };
