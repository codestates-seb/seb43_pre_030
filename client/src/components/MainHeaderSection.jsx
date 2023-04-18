import styled from "styled-components";
import { StyledTitle } from "../styles/StyledTItle";
import { ButtonMain } from "./ButtonMain";
import Button from "./Button";

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

const MainButton = Button({
  bg: "#fff",
  fontColor: "var(--font-color-light)",
  border: "1px solid #BABFC4",
  hoverBg: "#E3E5E8",
});
function MainHeaderSection() {
  return (
    <StyledContainer>
      <StyledTopSection>
        <StyledTitle>All Questions</StyledTitle>
        <ButtonMain>Ask Question</ButtonMain>
      </StyledTopSection>
      <StyledBottomSection>
        <MainButton>hottest</MainButton>
        <MainButton>newest</MainButton>
        <MainButton>oldest</MainButton>
      </StyledBottomSection>
    </StyledContainer>
  );
}

export default MainHeaderSection;
