import styled from "styled-components";
import { StyledTitle } from "../styles/StyledTItle";
import { ButtonMain } from "./ButtonMain";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
`;
const StyledTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const StyledBottomSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 0.1rem;
`;
function HeaderContentSection({ title, children }) {
  return (
    <StyledContainer>
      <StyledTopSection>
        <StyledTitle>{title}</StyledTitle>
        <ButtonMain>Ask Question</ButtonMain>
      </StyledTopSection>
      <StyledBottomSection>{children}</StyledBottomSection>
    </StyledContainer>
  );
}

export default HeaderContentSection;
