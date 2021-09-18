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
import {Motion, spring} from "react-motion";

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
        <Motion defaultStyle={{x: -200, opacity: 0}} style={{x:spring(0), opacity: spring(1, { stiffness: 23, damping: 39 })}}>
          {(style) => (
            <LeftLogo src={Logo} style={{
              transform: `translateX(${style.x}px)`, 
              opacity: style.opacity}}>
              </LeftLogo>
          )}
        </Motion>
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
