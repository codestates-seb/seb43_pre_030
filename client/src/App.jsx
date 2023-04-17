import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import Footer from './layouts/Footer';
import Aside from "./layouts/Aside";

import Nav from "./layouts/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">test</div>

        <Aside/>
      <Nav className="App">test</Nav>
      <Footer />
    </>
  );
  }
export default App;