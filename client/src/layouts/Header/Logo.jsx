import styled from "styled-components";
import { BsStackOverflow } from "react-icons/bs";
import { Link } from "react-router-dom";
import LogoImg from "./ui/LogoImg";

const StyledLogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.7rem 0;
`;

const StyledLogoText = styled.div`
  display: flex;
  font-weight: 200;
  font-size: 1.5rem;
  align-items: center;
  font-family: "Libre Franklin", sans-serif;
  & strong {
    font-weight: bold;
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <StyledLogoContainer>
        <LogoImg itemColor="#F48024" containerColor="#BCBBBB" />
        <StyledLogoText>
          stack <strong>overflow</strong>
        </StyledLogoText>
      </StyledLogoContainer>
    </Link>
  );
}

export default Logo;
