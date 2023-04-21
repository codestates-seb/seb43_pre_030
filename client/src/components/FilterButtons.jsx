import styled from "styled-components";
import Button from "./ui/Button";

const FilterButton = Button({
  bg: "#fff",
  fontColor: "var(--font-color-light)",
  border: "1px solid #BABFC4",
  hoverBg: "#E3E5E8",
});
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.1rem;
  width: 100%;
`;
function FilterButtons({ buttons }) {
  return (
    <StyledButtonContainer>
      {buttons.map(btn => (
        <FilterButton>{btn}</FilterButton>
      ))}
    </StyledButtonContainer>
  );
}

export default FilterButtons;
