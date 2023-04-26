import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Templates/Template";
import Header from "./layouts/Header/Header";
import LandingPage from "./pages/Landing/LandingPage";
import { routerData } from "./data/routerData";
import Loading from "./components/ui/Loading";

// axios.defaults.headers.common['Athorization'] = localStorage.getItem('token');

function App() {
  const currentUser = useSelector(s => s.user);
  const navigation = useNavigate();
  useEffect(() => {
    if (!currentUser) navigation("/");
  }, []);
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
