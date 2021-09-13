import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #f8f8f8;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 2%;
`;

export const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  padding-right: 2%;
`;

export const LeftLogo = styled.img`
  max-width: 80px;
  max-height: 50px;
  cursor: pointer;
  opacity: 1;
  filter: alpha(opacity=100);

  :hover {
    opacity: 0.7;
    filter: alpha(opacity=40);
  }
`;

export const Pages = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-right: 2%; */
`;
export const DefaultFonts = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  color: #4a4a4a;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Home = styled(DefaultFonts)`
  border-bottom: ${(props) =>
    props.selected === "home" ? "2px solid #e47d31" : ""};
  font-weight: ${(props) => (props.selected === "home" ? "600" : "normal")};
  padding-bottom: 5px;
`;

export const Search = styled(DefaultFonts)`
  border-bottom: ${(props) =>
    props.selected === "search" ? "2px solid #e47d31" : ""};
  font-weight: ${(props) => (props.selected === "search" ? "600" : "normal")};
  padding-bottom: 5px;
`;

export const Profile = styled(DefaultFonts)`
  border-bottom: ${(props) =>
    props.selected === "profile" ? "2px solid #e47d31" : ""};
  font-weight: ${(props) => (props.selected === "profile" ? "600" : "normal")};
  padding-bottom: 5px;
`;

export const Registration = styled.div`
  padding-right: 5%;
`;

export const NavBarButton = styled.button`
  background-color: #e47d31;
  color: white;
  line-height: 1.2rem;
  font: 1rem Helvetica, sans-serif;
  text-align: center;
  width: 5.5rem;
  height: 2rem;
  border: none;
  margin: 1px;
  :hover {
    cursor: pointer;
    background-color: #e87520;
  }
`;

export const SignupButton = styled(NavBarButton)`
  border-radius: 25px 0 0 25px;
`;
export const LoginButton = styled(NavBarButton)`
  border-radius: 0 25px 25px 0;
`;
