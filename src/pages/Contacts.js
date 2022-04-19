import {useState, useEffect} from "react";
import {
  Wrapper,
  ContentWrapper,
  TitleContacts,
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
import contactsDesk from "../assets/contacts_desk.png";
import * as Fa from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { WindowSharp } from "@mui/icons-material";

const Contacts = () => {
const [desktopSize, setDesktopSize] = useState(false);

const switchSize = () => {
  if(window.innerWidth > 800) {
    setDesktopSize(true)
  } else {
      setDesktopSize(false)
    }
  }

  useEffect(() => {
    switchSize();
    window.addEventListener("resize", switchSize);
    return () => window.removeEventListener("resize", switchSize)
  }, [])


  return (
    <Wrapper>
      <TitleContacts>Contacts</TitleContacts>

      <ContentWrapper>
        {desktopSize ?
        <Image src={contactsDesk} alt="contacts" /> :
        <Image src={contacts} alt="contacts" /> }
        <ContactsWrapper>
          <AiOutlinePhone fontSize="2.2rem" color="#31BE11" />
          <PhoneNumber href="tel:+447706`204681">+447706 204681</PhoneNumber>

          <AiOutlineMail fontSize="2.2rem" color="lightcoral" />
          <EmailAddress href="mailto:vikhulei@gmail.com">
            vikhulei@gmail.com
          </EmailAddress>
        </ContactsWrapper>
        <IconsWrapper>
          <Icon href="sms:+447706204681">
            <Fa.FaSms  color="darkgrey" />
          </Icon>
          <Icon href="http://m.me/victor.guley" target="_blank">
            {" "}
            <Fa.FaFacebookMessenger color="#0037FD" />{" "}
          </Icon>
          <Icon href="https://wa.me/+380637931590" target="_blank">
            <Fa.FaWhatsapp color="#31BE11" />{" "}
          </Icon>
          <Icon href="https://telegram.me/vikhulei" target="_blank">
            <Fa.FaTelegram color="#4BB6F2" />
          </Icon>
          <Icon href="https://github.com/vikhulei" target="_blank">
            <Fa.FaGithub color="white" />
          </Icon>
          <Icon href="https://www.linkedin.com/in/vikhulei" target="_blank">
            <Fa.FaLinkedin  color="#3C65F3" />
          </Icon>
        </IconsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contacts;