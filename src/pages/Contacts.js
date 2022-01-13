import { Title } from "../styles/Common";
import {
  Wrapper,
  ContentWrapper,
  Image,
  IconsWrapper,
  PhoneNumberWrapper,
  EmailAddressWrapper,
  PhoneNumber,
  EmailAddress
} from "../styles/ContactsStyles";
import contacts from "../assets/contacts.png";
import * as Fa from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <AiOutlineMail fontSize="3rem" color="#31BE11" />
      <PhoneNumber>383837373</PhoneNumber>
      <AiOutlinePhone fontSize="3rem" color="#31BE11" />
      <ContentWrapper>
        <Image src={contacts} alt="contacts" />
        <IconsWrapper>
          <Fa.FaViber fontSize="3rem" color="#AD35DE" />
          <Fa.FaWhatsapp fontSize="3rem" color="#31BE11" />
          <Fa.FaLinkedin fontSize="3rem" color="#31BE11" />
          <Fa.FaGithub fontSize="3rem" color="#31BE11" />
          <Fa.FaTelegram fontSize="3rem" color="#31BE11" />
          <Fa.FaFacebookMessenger fontSize="3rem" color="#31BE11" />
        </IconsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contacts;
