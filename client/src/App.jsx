import styled from "styled-components";
import Header from "./layouts/Header";
import { GlobalStyles } from "./styles/GlobalStyles";

const StyledBodyContainer = styled.div`
  background-color: #f8f9f9;
`;

function App() {
  return (
    <StyledBodyContainer>
      <GlobalStyles />
      <Header />
      <div className="App">test</div>
    </StyledBodyContainer>
  );
}

export default App;
