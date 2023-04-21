import NotFound from "../pages/404/NotFound";
import MainPage from "../pages/Main/MainPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AskPage from "../pages/Ask/AskPage";
import withFooter from "../pages/Templates/withFooter";
import QuestionPage from "../pages/Questions/QuestionPage";
import User from "../pages/User/User";
import QuestionDetailPage from "../pages/QuestionDetail/QuestionDetailPage";
import withAside from "../pages/Templates/withAside";

const AskPageWithFooter = withFooter(AskPage);
const MainWithAside = withAside(MainPage);
const QuestionWithAside = withAside(QuestionPage);
const DetailPageWithAside = withAside(QuestionDetailPage);

export const routerData = [
  {
    path: "/",
    element: <MainWithAside />,
    needTemplate: true,
  },
  {
    path: "/questions",
    element: <QuestionWithAside />,
    needTemplate: true,
  },
  {
    path: "/questions/:id",
    element: <DetailPageWithAside />,
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
    element: <User />,
    needTemplate: true,
  },
  {
    path: "*",
    element: <NotFound />,
    needTemplate: false,
  },
];
