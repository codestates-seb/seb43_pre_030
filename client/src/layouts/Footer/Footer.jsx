import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../../components/ui/LogoImg";
import FooterNavContent from "./FooterNavContent";
import FooterSNSButtons from "./FooterSNSButtons";

const FooterEl = styled.footer`
  background-color: hsl(210, 8%, 15%); // 홈페이지 꺼 따라함
  color: hsl(210, 8%, 60%); // 홈페이지 꺼 따라함
`;

const StyledFooterContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 97.2307692rem;
  margin: 0 auto;
  padding: 2rem 0.75rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 5rem;
  @media screen and (max-width: 768px) {
    gap: 0;
  }
`;

const StyledLogo = styled.div`
  /* flex: 0 0 4rem; */
  margin: -0.75rem 0 2.25rem 0;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 5rem;
  @media screen and (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
    gap: 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 0;
  }
`;

const StyledCopyrightContainer = styled.div`
  flex: 1 1 9.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCopyright = styled.p`
  width: 20rem;
  margin: auto 0 1.5rem;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterEl>
      <StyledFooterContainer>
        <StyledLogo>
          <Link to="/">
            <LogoImg itemColor="#F48024" containerColor="#BCBBBB" />
          </Link>
        </StyledLogo>
        <StyledNav>
          <FooterNavContent title="Stack Overflow" items={["Questions", "Help"]} />
          <FooterNavContent title="Products" items={["Teams", "Advertising", "Collectives", "Talent"]} />
          <FooterNavContent
            title="Company"
            items={[
              "About",
              "Press",
              "Work Here",
              "Legal",
              "Privacy Policy",
              "Terms of Service",
              "Contact Us",
              "Cookie Settings",
              "Cookie Policy",
            ]}
          />
          <FooterNavContent
            title="Stack Exchange Network"
            items={[
              "Technology",
              "Culture & recreation",
              "Life & arts",
              "Science",
              "Professional",
              "Business",
              " ",
              "API",
              "Data",
            ]}
          />
        </StyledNav>
        <StyledCopyrightContainer>
          <FooterSNSButtons />
          <StyledCopyright>
            Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under{" "}
            <Link to="https://stackoverflow.com/help/licensing">CC BY-SA</Link>. <span>rev 2023.4.14.43390</span>
          </StyledCopyright>
        </StyledCopyrightContainer>
      </StyledFooterContainer>
    </FooterEl>
  );
}

export default Footer;
