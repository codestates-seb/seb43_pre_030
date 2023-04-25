import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Templates/Template";
import Header from "./layouts/Header/Header";
import LandingPage from "./pages/Landing/LandingPage";
import { routerData } from "./data/routerData";

function App() {
  const currentUser = useSelector(s => s.user);
  console.log(document.location.pathname);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        {!currentUser ? (
          <>
            <Route path="/" element={<LandingPage />} />
            {routerData
              .filter(a => a.path === "/login" || a.path === "/register")
              .map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
          </>
        ) : (
          <>
            (
            <Route path="/" element={<Template />}>
              {routerData
                .filter(route => route.needTemplate)
                .map(route => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Route>
            {routerData
              .filter(route => !route.needTemplate)
              .map(route => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            )
          </>
        )}
      </Routes>
    </>
  );
}
export default App;
