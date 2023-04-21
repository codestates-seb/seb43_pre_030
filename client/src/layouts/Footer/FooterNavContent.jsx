import styled from "styled-components";
import FooterItem from "./FooterItem";

const StyledNavTitle = styled.h5`
  text-transform: uppercase; //대문자로
  font-weight: bold;
  margin-bottom: var(--su12);
  color: hsl(210, 8%, 75%);
  font-size: 1rem;
  line-height: var(--lh-md);
`;
const StyledList = styled.ul`
  color: hsl(210, 8%, 60%); // 홈페이지 꺼 따라함
  padding: 0.125rem 0;
  vertical-align: top;
  font-size: 0.8125rem;
  padding: 0.25rem 0;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const StyledNavContent = styled.div`
  box-sizing: border-box;
  flex: 1 0 auto;
  padding: 0 0.75rem 1.5rem 0;
`;

function FooterNavContent({ title, items }) {
  return (
    <StyledNavContent>
      <StyledNavTitle>{title}</StyledNavTitle>
      <StyledList>
        {items.map(item => (
          <FooterItem text={item} link={item} />
        ))}
      </StyledList>
    </StyledNavContent>
  );
}

export default FooterNavContent;
