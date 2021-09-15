import React, { useState } from "react";
import Navbar from "../../layout/navbar";

import {
  Container,
  Form,
  Input,
  Title,
  TitleContainer,
  InputWrapper,
  BigButton,
} from "../style";

const Login = () => {
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
        <Title>Login</Title>
      </TitleContainer>
      <Form>
        <InputWrapper>
          <Input
            type="email"
            // defaultValue="Email"
            placeholder="Email"
            onChange={(e) => handleChange("email", e)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange("password", e)}
          />
        </InputWrapper>
        <BigButton primaryDarken>Login</BigButton>
      </Form>
    </Container>
  );
};

export default Login;
