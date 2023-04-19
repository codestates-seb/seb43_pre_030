import styled from "styled-components";
import Button from "./Button";

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const PageButton = Button({
  bg: "#fff",
  fontColor: "var(--font-color-light)",
  border: "1px solid #BABFC4",
  hoverBg: "#E3E5E8",
  fontSize: ".8rem",
});
const CurrentPageButton = Button({
  bg: "var(--primary-color)",
  fontColor: "#fff",
  border: "1px solid #BABFC4",
  fontSize: ".8rem",
});

function Pagination() {
  return (
    <StyledWrapper>
      <StyledContainer>
        {[1, 2, 3, 4, 5].map(a =>
          a === 1 ? <CurrentPageButton>{a}</CurrentPageButton> : <PageButton>{a}</PageButton>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Pagination;
