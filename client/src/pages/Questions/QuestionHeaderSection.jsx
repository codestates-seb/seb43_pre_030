import styled from "styled-components";
import Button from "../../components/ui/Button";
import HeaderContentSection from "../../components/HeaderContentSection";

const MainButton = Button({
  bg: "#fff",
  fontColor: "var(--font-color-light)",
  border: "1px solid #BABFC4",
  hoverBg: "#E3E5E8",
});

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
function QuestionHeaderSection() {
  return (
    <HeaderContentSection title="All Questions">
      <StyledButtonContainer>
        <MainButton>hottest</MainButton>
        <MainButton>newest</MainButton>
        <MainButton>oldest</MainButton>
      </StyledButtonContainer>
    </HeaderContentSection>
  );
}

export default QuestionHeaderSection;
