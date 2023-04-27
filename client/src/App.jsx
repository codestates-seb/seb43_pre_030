import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Templates/Template";
import Header from "./layouts/Header/Header";
import LandingPage from "./pages/Landing/LandingPage";
import { routerData } from "./data/routerData";
import { setUser } from "./features/userSlice";

function App() {
  const currentUser = useSelector(s => s.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) navigation("/");
    axios(`${process.env.REACT_APP_API_URL}/user/userinfo`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then(res => {
      dispatch(setUser({ ...res.data }));
    });
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
              .filter(a => a.path === "/login" || a.path === "/register" || a.path === "/search")
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
