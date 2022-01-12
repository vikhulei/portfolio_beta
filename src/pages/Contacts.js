import { Title } from "../styles/Common";
import { Wrapper, ContentWrapper, Image, IconsWrapper, WhApp } from "../styles/ContactsStyles";
import contacts from "../assets/contacts.png";

const Contacts = () => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      <ContentWrapper>
        <Image src={contacts} alt="contacts" />
        <IconsWrapper>
          <WhApp style={{"fill": "green"}}/>
        </IconsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contacts;
