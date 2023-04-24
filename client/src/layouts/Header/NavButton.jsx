import styled from "styled-components";

const StyledNavButton = styled.div`
  cursor: pointer;
  position: relative;
  display: none;
  flex-direction: column;
  gap: 4px;
  & div:nth-child(1) {
    width: 25px;
    height: 3px;
    background-color: var(--font-color-light);
  }
  & div:nth-child(2) {
    width: 25px;
    height: 3px;
    background-color: var(--font-color-light);
  }
  & div:nth-child(3) {
    width: 25px;
    height: 3px;
    background-color: var(--font-color-light);
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default function NavButton({ onNavBtnClick }) {
  return (
    <StyledNavButton onClick={onNavBtnClick}>
      <div />
      <div />
      <div />
    </StyledNavButton>
  );
}
