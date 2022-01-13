import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  object-fit: contain;
`;

const ContactsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 15vh;
  width: 70vw;
`;

const PhoneNumber = styled.p``;

const EmailAddress = styled.p``;

const IconsWrapper = styled.div``;

const WhApp = styled(WhatsAppIcon)`
  fill: green;
  width: 50px;
`;

export { Wrapper, ContentWrapper, Image, IconsWrapper, WhApp };
