import NotFound from "../pages/404/NotFound";
import MainPage from "../pages/Main/MainPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AskPage from "../pages/Ask/AskPage";
import withFooter from "../pages/Templates/withFooter";
import QuestionPage from "../pages/Questions/QuestionPage";
import User from "../pages/User/User";
import withNav from "../pages/Templates/withNav";
import withPageWrapper from "../pages/Templates/withPageWrapper";
import QuestionDetailPage from "../pages/QuestionDetail/QuestionDetailPage";

const AskPageWithFooter = withFooter(AskPage);
const UserPageWithNavFooter = withFooter(withPageWrapper(withNav(User)));

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
    path: "/questions/:id",
    element: <QuestionDetailPage />,
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
    path: "/users",
    element: <UserPageWithNavFooter />,
    needTemplate: false,
  },
  {
    path: "*",
    element: <NotFound />,
    needTemplate: false,
  },
];
