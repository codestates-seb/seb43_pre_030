import styled from "styled-components";
import { Outlet } from "react-router-dom";
import withPageWrapper from "./withPageWrapper";
import withSidebar from "./withSidebar";
import withFooter from "./withFooter";

const StyledBodyContainer = styled.div`
  background-color: #f8f9f9;
`;

const OutletWithComponents = withFooter(withPageWrapper(withSidebar(Outlet)));

function Template() {
  return (
    <StyledBodyContainer>
      <OutletWithComponents />
    </StyledBodyContainer>
  );
}

export default Template;
