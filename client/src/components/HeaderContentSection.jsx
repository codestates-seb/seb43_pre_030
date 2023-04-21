import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledTitle } from "../styles/StyledTItle";
import { ButtonMain } from "./ui/ButtonMain";

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
`;
function HeaderContentSection({ title, children }) {
  return (
    <StyledContainer>
      <StyledTopSection>
        <StyledTitle>{title}</StyledTitle>
        <Link to="/ask">
          <ButtonMain>Ask Question</ButtonMain>
        </Link>
      </StyledTopSection>
      <StyledBottomSection>{children}</StyledBottomSection>
    </StyledContainer>
  );
}

export default HeaderContentSection;
