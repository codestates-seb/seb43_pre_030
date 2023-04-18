import styled from "styled-components";
import { StyledTitle } from "../styles/StyledTItle";
import { ButtonMain } from "./ButtonMain";

const StyledContainer = styled.div`
  display: flex;
  background-color: gray;
  padding: 1.5rem;
`;
const StyledTopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const StyledBottomSection = styled.div``;
function MainHeaderSection() {
  return (
    <StyledContainer>
      <StyledTopSection>
        <StyledTitle>All Questions</StyledTitle>
        <ButtonMain>Ask Question</ButtonMain>
      </StyledTopSection>
    </StyledContainer>
  );
}

export default MainHeaderSection;
