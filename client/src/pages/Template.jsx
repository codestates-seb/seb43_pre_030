import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Nav from "../layouts/Nav/Nav";
import Aside from "../layouts/Aside/Aside";
import Footer from "../layouts/Footer/Footer";

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
  width: 97.2307692rem;
  max-width: auto;
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
