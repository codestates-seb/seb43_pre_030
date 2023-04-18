import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "../layouts/Nav";
import Aside from "../layouts/Aside";
import Footer from "../layouts/Footer";

const StyledBodyContainer = styled.div`
  background-color: #f8f9f9;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledMainSection = styled.div`
  padding-top: 53px;
  display: flex;
  min-width: 85vw;
  max-width: 85vw;
  @media screen and (max-width: 780px) {
    min-width: 95vw;
    max-width: 95vw;
  }
`;

function Template() {
  return (
    <StyledBodyContainer>
      <StyledWrapper>
        <StyledMainSection>
          <Nav />
          <Outlet />
          <Aside />
        </StyledMainSection>
      </StyledWrapper>
      <Footer />
    </StyledBodyContainer>
  );
}

export default Template;
