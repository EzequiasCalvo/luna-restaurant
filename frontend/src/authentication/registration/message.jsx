import React from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/navbar/footer";
import {
  Container,
  Title,
  TitleContainer,
  MessageParagraph,
  MessageWrapper,
} from "../style";

const Message = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <TitleContainer>
        <Title>Registration</Title>
      </TitleContainer>
      <MessageWrapper>
        <MessageParagraph>
          Thanks for your registration. Our hard working monkeys are preparing a
          digital message called E-Mail that will be sent to you soon. Since
          monkeys arent good in writing the message could end up in you junk
          folder. Our apologies for any inconvienience.
        </MessageParagraph>
      </MessageWrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Message;
