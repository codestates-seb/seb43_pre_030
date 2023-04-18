import Aside from "../layouts/Aside/Aside";
import Nav from "../layouts/Nav/Nav";
import NotFound from "../pages/404/NotFound";
import MainPage from "../pages/Main/MainPage";

export const routerData = [
  {
    path: "/",
    element: (
      <>
        <Nav />
        <MainPage />
        <Aside />
      </>
    ),
  },
  {
    path: "/questions",
    element: (
      <>
        <Nav />
        <MainPage />
        <Aside />
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
