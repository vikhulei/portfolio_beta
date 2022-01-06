import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightsalmon;
`;

const Contacts = ({ myref }) => {
  return (
    <Wrapper ref={myref}>
      <p>Hello from Contacts</p>
    </Wrapper>
  );
};

export default Contacts;
