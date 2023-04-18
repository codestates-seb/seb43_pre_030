import styled from "styled-components";
import { useState } from "react";
import Header from "./layouts/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from "./layouts/Footer";
import Aside from "./layouts/Aside";
import Nav from "./layouts/Nav";
import Main from "./layouts/Main";
import QuestionPage from "./layouts/QuestionPage";

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
  min-width: 80vw;
  gap: 1rem;
  @media screen and (max-width: 780px) {
    min-width: 95vw;
  }
`;

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const logIn = () => {
    setCurrentUser(prev => !prev);
  };
  return (
    // <StyledBodyContainer>
    //   <GlobalStyles />
    //   <Header logIn={logIn} currentUser={currentUser} />
    //   <StyledWrapper>
    //     <StyledMainSection>
    //       {currentUser && <Nav />}
    //       <Main>test</Main>
    //       {currentUser && <Aside />}
    //     </StyledMainSection>
    //   </StyledWrapper>
    //   <Footer />
    // </StyledBodyContainer>
      <StyledBodyContainer>
        <GlobalStyles />
        <Header logIn={logIn} currentUser={currentUser} />
        <StyledWrapper>
          <QuestionPage />
        </StyledWrapper>
        <Footer />
      </StyledBodyContainer>
  );
}
export default App;
