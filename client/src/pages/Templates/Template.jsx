import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledBodyContainer = styled.div`
  background-color: #f8f9f9;
`;

function Template() {
  return (
    <StyledBodyContainer>
      <Outlet />
    </StyledBodyContainer>
  );
}

export default Template;
