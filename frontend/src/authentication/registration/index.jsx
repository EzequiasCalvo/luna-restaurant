import React, { useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/navbar/footer";

import {
  BigButton,
  Container,
  Form,
  Input,
  InputWrapper,
  Title,
  TitleContainer,
} from "../style";

const Registration = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    email: "",
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
        <Title>Registration</Title>
      </TitleContainer>
      <Form>
        <InputWrapper>
          <Input
            type="email"
            placeholder="E-mail address"
            onChange={(e) => handleChange("email", e)}
          />
        </InputWrapper>
        <BigButton primaryDarken>Register</BigButton>
      </Form>
      <Footer></Footer>
    </Container>
  );
};

export default Registration;
