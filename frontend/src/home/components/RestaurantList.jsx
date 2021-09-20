import React from "react";

import RestaurantCard from "./RestaurantCard";

import styled from "styled-components";

export const ContainerList = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 8rem;
`;

const RestaurantList = () => {
  return (
    <ContainerList>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </ContainerList>
  );
};

export default RestaurantList;
