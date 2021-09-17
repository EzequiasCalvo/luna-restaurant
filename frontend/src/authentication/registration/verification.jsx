import React, { useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/navbar/footer";
import {
  Container,
  FormContainer,
  FormVerification,
  Input,
  InputWrapper,
  Title,
  TitleContainer,
  VerificationButton,
} from "../style";

const Verification = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (type, e) => {
    const currentVal = e.currentTarget.value;
    setState((state) => ({
      ...state,
      email: type === "email" ? currentVal : state.email,
      password: type === "password" ? currentVal : state.password,
    }));
  };
  return (
    <Container>
      <Navbar></Navbar>
      <TitleContainer>
        <Title>Verification</Title>
      </TitleContainer>
      <FormContainer>
        <FormVerification>
          <InputWrapper>
            <Input
              type="email"
              placeholder="E-mail address"
              onChange={(e) => handleChange("email", e)}
            />
            <Input type="text" placeholder="Validation code" />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Username" />

            <Input type="text" defaultValue="Location" />
          </InputWrapper>
          <InputWrapper>
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Password repeat" />
          </InputWrapper>
          <VerificationButton>Register</VerificationButton>
        </FormVerification>
      </FormContainer>
      <Footer></Footer>
    </Container>
  );
};

export default Verification;
