import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Templates/Template";
import Header from "./layouts/Header/Header";
import { routerData } from "./data/routerData";
import LandingPage from "./pages/Landing/LandingPage";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const logIn = () => {
    setCurrentUser(prev => !prev);
  };

  return (
    <>
      <GlobalStyles />
      <Header logIn={logIn} currentUser={currentUser} />
      {/* <Routes>
        {routerData.map(route =>
          route.needTemplate ? (
            <Route path="/" element={<Template currentUser={currentUser} />}>
              <Route key={route.path} path={route.path} element={route.element} />
            </Route>
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        )}
      </Routes> */}
      <LandingPage />
    </>
  );
}
export default App;
