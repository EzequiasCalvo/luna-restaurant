import styled from "styled-components";
import styledProps from "styled-props";
import { darken } from "polished";

const background = {
  primary: "#e47d31",
  placeholder: "#979797",
  primaryDarken: darken(0.1, "#e47d31"),
  placeholderDarken: darken(0.3, "#979797"),
};

export const Container = styled.div`
  background: #f2f2f2;
  padding-bottom: 10%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  border-bottom: 2px solid #e47d31;
  font-style: normal;
  font: 1.2rem Helvetica;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #4c4c4c;
  font-weight: 600;
  margin-top: 13%;
  padding: 5px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  padding-bottom: 10%;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormVerification = styled.div`
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
  width: 10%;
  height: 40px;
  color: white;
  font-size: 1.2rem;
  margin-top: 3%;
  :hover {
    cursor: pointer;
    background-color: ${styledProps(background)};
  }
`;

export const VerificationButton = styled(BigButton)`
  width: 22%;
  margin-top: 8%;
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
  padding-left: 10px;
  margin: 1.5%;
  color: ${background.placeholderDarken};

  ::placeholder {
    color: #979797;
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

export const InputWrapper = styled.div`
  display: flex;
  padding: 0.5%;
`;

export const MessageParagraph = styled.p`
  width: 35%;
  font-family: Helvetica;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: center;
  color: #4c4c4c;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15%;
`;
