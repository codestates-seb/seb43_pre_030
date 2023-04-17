import { AiOutlineUser } from "react-icons/ai";
import { BsMenuUp } from "react-icons/bs";
import styled from "styled-components";
import { StyledDropDown } from "../styles/StyledDropDown";

const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  > * {
    cursor: pointer;
  }
`;
const StyledUserDropDown = styled(StyledDropDown)`
  min-width: 250px;
  transform: translateX(-100px);
  &::after {
    transform: translateX(95px) rotate(45deg);
  }
`;

function UserDropDown() {
  return (
    <div style={{ position: "relative" }}>
      <AiOutlineUser size="2rem" color="var(--font-color-light)" />
      <StyledUserDropDown>text</StyledUserDropDown>
    </div>
  );
}

function HeaderMenu() {
  return (
    <StyledMenuContainer>
      {/* <UserDropDown /> */}
      <AiOutlineUser size="2rem" color="var(--font-color-light)" />
      <BsMenuUp size="2rem" color="var(--font-color-light)" />
    </StyledMenuContainer>
  );
}

export default HeaderMenu;
