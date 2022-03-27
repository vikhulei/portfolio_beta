import styled from "styled-components";
import {Title} from "../styles/Common"

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(57, 71, 81);
`;

const TitleContacts = styled(Title) `
@media screen and (min-width: 800px) {
  position: relative;
  width: 60vw;
  margin-left: 32vw;
  text-align: left;
}
`
const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 5vh;
  width: 70vw;
  height: 60vh;
  @media screen and (min-width: 800px) {
    position: relative;
    width: 60vw;
    margin: 0 7vw 0 auto;
    top: 5%;
    // left: 25vw;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const ContactsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
  height: 30%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-column-gap: 10px;
  align-items: center;
`;

const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EmailAddressWrapper = styled.div`
  display: flex;
`;

const PhoneNumber = styled.a`
  text-decoration: none;
  font-size: max(1.3rem, 2vw);
  color: white;
`;

const EmailAddress = styled.a`
  font-size: max(1.3rem, 2vw);
  color: white;
`;

const Icon = styled.a`
  font-size: max(3.5vw, 2.5rem);
`;

const IconsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  padding-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  @media screen and (max-height: 400px) {
    padding-top: 0;
    height: 60%;
    margin-top: 5%;
  }
`;

export {
  Wrapper,
  TitleContacts,
  ContentWrapper,
  Image,
  Icon,
  IconsWrapper,
  ContactsWrapper,
  ContactWrapper,
  EmailAddressWrapper,
  PhoneNumber,
  EmailAddress
};
