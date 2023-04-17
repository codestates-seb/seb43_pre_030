import { AiOutlineUser } from "react-icons/ai";
import { BsMenuUp } from "react-icons/bs";
import styled from "styled-components";
import { StyledDropDown } from "../styles/StyledDropDown";
import { useDropDown } from "../hooks/useDropDown";

const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  > * {
    cursor: pointer;
  }
`;

const StyledUserDropDown = styled(StyledDropDown)`
  top: 100%;
  right: -1rem;
  &::after {
    position: absolute;
    right: 10%;
  }
`;
const StyledMenuDropDown = styled(StyledUserDropDown)`
  right: -0.5rem;
  &::after {
    right: 5%;
  }
`;
const StyledWrapper = styled.div`
  position: relative;
`;

function HeaderMenu() {
  const [menuDropDown, closeMenu, onMenuClick] = useDropDown(false);
  return (
    <StyledMenuContainer>
      <AiOutlineUser size="2rem" color="var(--font-color-light)" />
      <StyledWrapper>
        <BsMenuUp size="2rem" color="var(--font-color-light)" onClick={onMenuClick()} />
        {menuDropDown && <StyledMenuDropDown>text</StyledMenuDropDown>}
      </StyledWrapper>
    </StyledMenuContainer>
  );
}

export default HeaderMenu;
