import { Title } from "../styles/Common";
import { Wrapper, ImageWrapper, Image } from "../styles/ContactsStyles";
import contacts from "../assets/contacts.png";

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <ImageWrapper>
        <Image src={contacts} alt="contacts" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Contacts;
