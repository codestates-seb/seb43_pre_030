import NotFound from "../pages/404/NotFound";
import MainPage from "../pages/Main/MainPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AskPage from "../pages/Ask/AskPage";
import withFooter from "../pages/Templates/withFooter";
import withPageWrapper from "../pages/Templates/withPageWrapper";
import withSidebar from "../pages/Templates/withSidebar";

const MainPageComponent = withFooter(withPageWrapper(withSidebar(MainPage)));
const AskPageWithFooter = withFooter(AskPage);

export const routerData = [
  {
    path: "/",
    element: <MainPageComponent />,
  },
  {
    path: "/questions",
    element: <MainPageComponent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/ask",
    element: <AskPageWithFooter />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
