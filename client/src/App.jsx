import styled from "styled-components";
import Header from "./layouts/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from "./layouts/Footer";
import Aside from "./layouts/Aside";
import Nav from "./layouts/Nav";

const StyledBodyContainer = styled.div`
  background-color: #f8f9f9;
`;

function App() {
  return (
    <StyledBodyContainer>
      <GlobalStyles />
      <Header />
      <Aside />
      <div>test</div>
      <Nav className="App">test</Nav>
      <Footer />
    </StyledBodyContainer>
  );
}
export default App;
