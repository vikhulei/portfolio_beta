import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  background-color: rgb(57, 71, 81);
`;

const ContentWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 5vh;
  width: 70vw;
  height: 55vh;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const ContactsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 15vh;
  width: 70vw;
`;

const PhoneNumberWrapper = styled.div`
  display: flex;
`;

const EmailAddressWrapper = styled.div`
  display: flex;
`;

const PhoneNumber = styled.span`
  font-size: 2rem;
`;

const EmailAddress = styled.p``;

const IconsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

export {
  Wrapper,
  ContentWrapper,
  Image,
  IconsWrapper,
  PhoneNumberWrapper,
  EmailAddressWrapper,
  PhoneNumber,
  EmailAddress
};
