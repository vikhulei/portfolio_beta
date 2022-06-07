import styled from "styled-components";
import {Title} from "../styles/Common"
import contacts_desk from "../assets/contacts_desk.png"
import contacts from "../assets/contacts.png"

const Wrapper = styled.div`
position: relative;
padding-top: 50px;
width: 100%;
height: 100vh;
background-color: rgb(57, 71, 81);
@media screen and (max-height: 400px) {
  padding-top: 10px;
}
`

const TitleContacts = styled(Title) `
margin: 0 7vw 0 auto;
text-align: right;
@media screen and (max-width: 800px) {
  margin: 0;
  text-align: center;
}
`
const ContentWrapper = styled.div`
position: relative;
top: 5%;
margin: 0 7vw 0 auto;
width: 60vw;
height: 60vh;
@media screen and (max-width: 800px) {
  top: 5vh;
  width: 70vw;
  margin: 0 auto;
}
`

const Image = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-image: url(${contacts_desk});
background-size: cover;
@media screen and (max-width: 800px) {
  background-image: url(${contacts});
}
`

const ContactsWrapper = styled.div`
position: relative;
width: fit-content;
height: 30%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 5fr;
grid-column-gap: 10px;
align-items: center;
`

const PhoneNumber = styled.a`
text-decoration: none;
font-size: max(1.3rem, 2vw);
color: white;
`

const EmailAddress = styled.a`
font-size: max(1.1rem, 2vw);
color: white;
`

const Icon = styled.a`
font-size: max(3.5vw, 2.5rem);
`

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
  margin-top: 5%;
  padding-top: 0;
  height: 60%;
}
`

export {
  Wrapper,
  TitleContacts,
  ContentWrapper,
  Image,
  Icon,
  IconsWrapper,
  ContactsWrapper,
  PhoneNumber,
  EmailAddress
}
