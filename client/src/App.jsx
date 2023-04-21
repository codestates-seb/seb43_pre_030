import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Templates/Template";
import Header from "./layouts/Header/Header";
import LandingPage from "./pages/Landing/LandingPage";
import { routerData } from "./data/routerData";
import store from "./app/store";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const logIn = () => {
    setCurrentUser(prev => !prev);
  };

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header logIn={logIn} currentUser={currentUser} />
      <Routes>
        {!currentUser ? (
          <Route path="/" element={<LandingPage />} />
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
    </Provider>
  );
}
export default App;
