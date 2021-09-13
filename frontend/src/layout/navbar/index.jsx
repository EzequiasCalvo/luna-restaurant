import React, { useState } from "react";
import {
  NavContainer,
  LeftWrapper,
  LeftLogo,
  RightWrapper,
  Pages,
  Home,
  Search,
  Profile,
  Registration,
  SignupButton,
  LoginButton,
} from "./style";

import Logo from "../../assets/LUNA.png";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  const handleClick = (page) => {
    setSelectedPage(page);
    console.log(selectedPage);
  };

  return (
    <NavContainer>
      <LeftWrapper>
        <LeftLogo src={Logo}></LeftLogo>
      </LeftWrapper>
      <RightWrapper>
        <Pages>
          <Home selected={selectedPage} onClick={() => handleClick("home")}>
            Home
          </Home>
          <Search selected={selectedPage} onClick={() => handleClick("search")}>
            Search
          </Search>
          <Profile
            selected={selectedPage}
            onClick={() => handleClick("profile")}
          >
            Profile
          </Profile>
          <Registration>
            <SignupButton>Signup</SignupButton>
            <LoginButton>Login</LoginButton>
          </Registration>
        </Pages>
      </RightWrapper>
    </NavContainer>
  );
};

export default Navbar;
