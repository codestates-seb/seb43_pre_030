import styled from "styled-components";
import FooterItem from "./FooterItem";

const StyledSnsLinkContainer = styled.ul`
  display: flex;
  gap: 1rem;
`;

function FooterSNSButtons() {
  const links = [
    { link: "https://stackoverflow.blog?blb=1", text: "Blog" },
    { link: "https://www.facebook.com/officialstackoverflow/", text: "Facebook" },
    { link: "https://twitter.com/stackoverflow", text: "Twitter" },
    { link: "https://linkedin.com/company/stack-overflow", text: "LinkedIn" },
    { link: "https://www.instagram.com/thestackoverflow", text: "Instagram" },
  ];
  return (
    <StyledSnsLinkContainer>
      {links.map(link => (
        <FooterItem {...link} />
      ))}
    </StyledSnsLinkContainer>
  );
}

export default FooterSNSButtons;
