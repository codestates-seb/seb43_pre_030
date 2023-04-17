import { AiOutlineUser } from "react-icons/ai";
import { BsMenuUp } from "react-icons/bs";
import styled from "styled-components";

const StyledMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  > * {
    cursor: pointer;
  }
`;

function HeaderMenu() {
  return (
    <StyledMenuContainer>
      <AiOutlineUser size="30" color="var(--font-color-light)" />
      <BsMenuUp size="30" color="var(--font-color-light)" />
    </StyledMenuContainer>
  );
}

export default HeaderMenu;
