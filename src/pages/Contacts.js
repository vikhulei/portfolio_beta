import { Title } from "../styles/Common";
import {
  Wrapper,
  ContentWrapper,
  Image,
  Icon,
  IconsWrapper,
  ContactWrapper,
  EmailAddressWrapper,
  PhoneNumber,
  EmailAddress,
  ContactsWrapper
} from "../styles/ContactsStyles";
import contacts from "../assets/contacts.png";
import * as Fa from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contacts</Title>

      <ContentWrapper>
        <Image src={contacts} alt="contacts" />
        <ContactsWrapper>
          <AiOutlinePhone fontSize="2.2rem" color="#31BE11" />
          <PhoneNumber>+380637931590</PhoneNumber>

          <AiOutlineMail fontSize="2.2rem" color="lightcoral" />
          <EmailAddress href="mailto:vikhulei@gmail.com">
            vikhulei@gmail.com
          </EmailAddress>
        </ContactsWrapper>
        <IconsWrapper>
          <Icon href="http://m.me/victor.guley" target="_blank"> <Fa.FaFacebookMessenger color="#0037FD" /> </Icon>

          

          <Fa.FaWhatsapp fontSize="2.5rem" color="#31BE11" />
          <Fa.FaLinkedin fontSize="2.5rem" color="#3C65F3" />
          <Fa.FaGithub fontSize="2.5rem" color="white" />
          <Fa.FaTelegram fontSize="2.5rem" color="#4BB6F2" />
          <Fa.FaViber fontSize="2.5rem" color="#B017C4" />
        </IconsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contacts;
