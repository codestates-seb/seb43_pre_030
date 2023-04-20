import NotFound from "../pages/404/NotFound";
import MainPage from "../pages/Main/MainPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AskPage from "../pages/Ask/AskPage";
import withFooter from "../pages/Templates/withFooter";
import QuestionPage from "../pages/Questions/QuestionPage";
import LandingPage from "../pages/Landing/LandingPage";

const AskPageWithFooter = withFooter(AskPage);

export const routerData = [
  {
    path: "/",
    element: <MainPage />,
    needTemplate: true,
  },
  {
    path: "/questions",
    element: <QuestionPage />,
    needTemplate: true,
  },
  {
    path: "/login",
    element: <Login />,
    needTemplate: false,
  },
  {
    path: "/register",
    element: <Register />,
    needTemplate: false,
  },
  {
    path: "/ask",
    element: <AskPageWithFooter />,
    needTemplate: false,
  },
  {
    path: "*",
    element: <NotFound />,
    needTemplate: false,
  },
];
