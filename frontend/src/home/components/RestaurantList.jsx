import React from "react";

import RestaurantCard from "./RestaurantCard";

import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
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
