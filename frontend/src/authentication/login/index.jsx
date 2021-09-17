import React, { useState } from "react";
import Navbar from "../../layout/navbar";

<<<<<<< HEAD
import styled from "styled-components";
import styledProps from 'styled-props';
import { darken } from 'polished'
import Footer from "../../layout/navbar/footer";

const background = {
  primary: '#e47d31',
  primaryDarken: darken(0.1, '#e47d31'),
};

export const Container = styled.div`
  padding-bottom: 20%;
  background: #f2f2f2;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  width: 80px;
  border-bottom: 2px solid #e47d31;
  font-style: normal;
  font-weight: 800;
  font: 1.2rem Helvetica;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #4c4c4c;
  margin-top: 14%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
`;

export const BigButton = styled.button`
  background-color: ${background.primary};
  border: none;
  border-radius: 1.6rem;
  width: 12%;
  height: 40px;
  color: white;
  font-size: 1.2rem;
  margin-top: 3%;
  :hover {
    cursor: pointer;
    background-color: ${styledProps(background)};
  }
`;

export const Input = styled.input`
  height: 2rem;
  width: 100%;
  border: none;
  border-radius: 3px;
  background: white;
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1rem;
  color: #979797;
  padding-left: 10px;

  ::placeholder {
    color: black;
    font-size: 1.2rem;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:active,
  :-webkit-autofill:focus {
    background-color: #ffffff !important;
    color: #555 !important;
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    box-shadow: inset 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #555555 !important;
  }
`;

const InputWrapper = styled.div`
  padding: 0.5%;
`;
=======
import {
  Container,
  Form,
  Input,
  Title,
  TitleContainer,
  InputWrapper,
  BigButton,
} from "../style";
>>>>>>> 65072ceba2f6637151a37f25f7d146d034418c47

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
<<<<<<< HEAD
        <TitleContainer>
          <Title>Login</Title>
        </TitleContainer>
        <Form autocomplete="off">
          <InputWrapper>
            <Input
              type="email"
              defaultValue="Email"
              onChange={(e) => handleChange("email", e)}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              defaultValue="Password"
              onChange={(e) => handleChange("password", e)}
            />
          </InputWrapper>
          <BigButton primaryDarken>Login</BigButton>
        </Form>
        <Footer></Footer>
      </Container>
=======
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
>>>>>>> 65072ceba2f6637151a37f25f7d146d034418c47
  );
};

export default Login;
