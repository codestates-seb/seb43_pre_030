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
      <AiOutlineUser size="30" />
      <BsMenuUp size="30" />
    </StyledMenuContainer>
  );
}

export default HeaderMenu;
