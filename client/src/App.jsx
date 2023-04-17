import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Aside from "./layouts/Aside";

import Nav from "./layouts/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Aside/>
      </div>
      {/* <div className="App">test</div> */}
      <Nav className="App">test</Nav>
    </>
  );
}

export default App;