import React from "react";
import Navbar from "../layout/navbar";

import { Motion, spring } from "react-motion";

import styled from "styled-components";
import { lighten } from "polished";
import Footer from "../layout/navbar/footer";

import foodImage from "../assets/background/bg1.jpg";

import RestaurantList from "./components/RestaurantList";

const background = {
  primary: "#e47d31",
  lighter: lighten(0.4, "#e47d31"),
};

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background: #f2f2f2;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  background-image: url(${foodImage});
  background-size: cover;
`;

export const InputWrapper = styled.input`
  width: 30%;
  height: 2rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: #4c4c4c;
  background-color: ${background.primaryDarken};
  padding-left: 20px;
  border-radius: 3px;
  border: none;
  margin-right: 26px;
`;

export const ButtonSearchbar = styled.button`
  height: 2.2rem;
  min-width: 8%;
  border-radius: 1rem;
  border: none;
  background-color: ${background.primary};
  cursor: pointer;
  font-family: Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1rem;
  color: #ffffff;
  &:hover {
    background-color: #e87520;
  }
  &:focus {
    outline: none;
  }

  a {
    font-family: Helvetica, Arial, serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export const RestaurantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 60vh;
  padding-top: 2.5%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  max-height: 50px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  color: #4c4c4c;
  margin-bottom: 2%;
`;

export const Underline = styled.div`
  max-width: 80%;
  margin: 3% 0 0 10%;
  height: 2rem;
  border-top: 2px solid ${background.primary};
`;

// export const CardWrapper = styled.div`
//   /* width: 100%; */
//   border: 1px solid salmon;
// `;

const Home = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Motion
        defaultStyle={{ x: -200, opacity: 0 }}
        style={{
          x: spring(0),
          opacity: spring(1, { stiffness: 23, damping: 39 }),
        }}
      >
        {(style) => (
          <ImgContainer
            style={{
              transform: `translateX(${style.x}px)`,
              opacity: style.opacity,
            }}
          >
            <InputWrapper placeholder="Search..."></InputWrapper>
            <ButtonSearchbar>Search</ButtonSearchbar>
          </ImgContainer>
        )}
      </Motion>
      <RestaurantsWrapper>
        <TitleWrapper>
          <Title>
            Best rated restaurants
            <Underline></Underline>
          </Title>
        </TitleWrapper>
        <RestaurantList></RestaurantList>
      </RestaurantsWrapper>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
