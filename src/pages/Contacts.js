import { Title } from "../styles/Common";
import {
  Wrapper,
  ContentWrapper,
  Image,
  IconsWrapper
} from "../styles/ContactsStyles";
import contacts from "../assets/contacts.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as Fa from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <ContentWrapper>
        <Image src={contacts} alt="contacts" />
        <IconsWrapper>
          <Fa.FaViber fontSize="3rem" color="#AD35DE" />
          <Fa.FaWhatsapp fontSize="3rem" color="#31BE11" />
          <Fa.FaLinkedin fontSize="3rem" color="#31BE11" />
          <Fa.FaGithub fontSize="3rem" color="#31BE11" />
          <Fa.FaTelegram fontSize="3rem" color="#31BE11" />
          <Fa.FaFacebookMessenger fontSize="3rem" color="#31BE11" />
          <AiOutlineMail fontSize="3rem" color="#31BE11" />
          <AiOutlinePhone fontSize="3rem" color="#31BE11" />
        </IconsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contacts;
