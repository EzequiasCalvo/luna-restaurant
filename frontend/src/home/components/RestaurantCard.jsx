import React from "react";
import StarRatingComponent from "react-rating-stars-component";

import defaultImage from "../../assets/background/bg2.jpg";

import styled from "styled-components";
import {  lighten } from "polished";

// .grow { transition: all .2s ease-in-out; }
// .grow:hover { transform: scale(1.1); }

const background = {
  primary: "#e47d31",
  primaryDarken: lighten(0.1, "#e47d31"),
};

export const TopBar = styled.div`
  background: ${background.primary};
  height: 8px;
  width: 100%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const RestaurantMainContainer = styled.div`
  margin: 2%;
  position: relative;
  width: 16rem;
  height: 22rem;
  background: white;
  margin-bottom: 5rem;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover ${TopBar} {
    background-color: ${background.primaryDarken};
  }

  :hover {
    transform: scale(1.1)
  }

  img {
    height: 17rem;
    width: 100%;
    margin-top: 14px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    :hover {
      opacity: 0.8;
    }
  }
`;

export const RestaurantDetailsContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
`;

export const RestaurantName = styled.p`
  height: 23px;
  margin-top: 11px;
  margin-bottom: 0px;

  font-size: 20px;
  font-family: Helvetica, serif;
  color: #4c4c4c;
  text-align: left;
`;

export const RestaurantAddress = styled.p`
  height: 21px;
  margin-top: 6px;
  margin-bottom: 5px;
  font-size: 18px;
  color: #4c4c4c;
  text-align: left;
  font-family: Helvetica, serif;
`;

export const StarsReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 5%;
  p {
    margin-right: 1rem;
    font-family: Helvetica, serif;
    font-stretch: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #4c4c4c;
  }
`;

export const StarsReviewRestaurantPageContainer = styled(StarsReviewContainer)`
  justify-content: flex-start;
`;

const RestaurantCard = () => {
  return (
    <RestaurantMainContainer>
      <TopBar />
      <RestaurantDetailsContainer>
        <RestaurantName>Tikki Masala</RestaurantName>
        <RestaurantAddress>Passatge de Canti 8, Barcelona</RestaurantAddress>
        <StarsReviewContainer>
          <StarRatingComponent
            activeColor="#F8E71C"
            isHalf={true}
            color={"rgba(235, 235, 235, 0.5)"}
            size={27}
            value={4}
          />
          <p>75</p>
        </StarsReviewContainer>
      </RestaurantDetailsContainer>
      <img src={defaultImage} alt="Restaurant" />
    </RestaurantMainContainer>
  );
};

export default RestaurantCard;
