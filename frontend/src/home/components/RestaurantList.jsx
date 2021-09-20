import React from "react";
import Masonry from "react-masonry-css";

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
      {/* <Masonry
        breakpointCols={breakpoints}
        className="custom-masonry"
        columnClassName="custom-masonry-column"
      > */}
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      {/* </Masonry> */}
    </ContainerList>
  );
};

export default RestaurantList;
