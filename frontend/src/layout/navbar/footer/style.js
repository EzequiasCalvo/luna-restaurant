import styled from "styled-components";

export const NavRightWrapper = styled.div`
  display: flex;
  min-width: 40%;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 91px;
  background-color: white;
  z-index: 3;
`;

export const FooterFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 550px;
  justify-content: space-between;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  border-bottom: solid 2px #f2f2f2;
  align-items: center;
  padding: 0.7rem 0 0.7rem 0;
`;

export const FooterLeftWrapper = styled(NavRightWrapper)``;

export const SocialMediaWrapper = styled.div`
  min-width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
`;

export const HeaderSpan = styled.span`
  vertical-align: middle;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const CopyRightSpan = styled.span`
  font-size: 0.8rem;
  margin-left: 1rem;
`;

export const SocialMediaIcon = styled.div`
  border-radius: 50%;
  border: solid 1.8px #979797;
  color: #979797;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5rem;
`;