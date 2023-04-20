import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";
import Template from "./pages/Templates/Template";
import Header from "./layouts/Header/Header";
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
        {routerData.map(route =>
          route.needTemplate ? (
            <Route path="/" element={<Template currentUser={currentUser} />}>
              <Route key={route.path} path={route.path} element={route.element} />
            </Route>
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </Provider>
  );
}
export default App;
