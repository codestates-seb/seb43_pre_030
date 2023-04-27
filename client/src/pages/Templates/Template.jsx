import styled from "styled-components";
import { Outlet } from "react-router-dom";
import withPageWrapper from "./withPageWrapper";
import withFooter from "./withFooter";
import withNav from "./withNav";

const StyledBodyContainer = styled.div`
  background-color: #f8f9f9;
`;

const OutletWithComponents = withFooter(withPageWrapper(withNav(Outlet)));

function Template() {
  return (
    <StyledBodyContainer>
      <OutletWithComponents />
    </StyledBodyContainer>
  );
}

export default Template;
