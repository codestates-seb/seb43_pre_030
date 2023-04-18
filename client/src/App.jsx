import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Template";
import Header from "./layouts/Header";
import Register from "./pages/Register";
import { routerData } from "./data/routerData";
import Main from "./layouts/Main";


function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const logIn = () => {
    setCurrentUser(prev => !prev);
  };

  return (
    <>
      <GlobalStyles />
      <Header logIn={logIn} currentUser={currentUser} />
      <Routes>
        <Route path="/login" element={<Template />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/ask" element={<Template />} />
        <Route path="/" element={<Template currentUser={currentUser} />}>
          {routerData.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element ? route.element : <Main>{route.path}</Main>}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}
export default App;
