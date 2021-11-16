import React from "react";
import { Route } from "react-router";
import { ROUTES } from "../constant/routePath";

const LoginPage = React.lazy(() => import("../pages/Login"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const HomePage = React.lazy(() => import("../pages/Home"));
const ForgetPasswordPage = React.lazy(() => import("../pages/ForgetPassword"));
const FlashcardPage = React.lazy(() => import("../pages/Flashcard.js"));
const FlashcardDetailPage = React.lazy(() =>
  import("../pages/FlashcardDetail")
);
const GamePage = React.lazy(() => import("../pages/Game.js"));

const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: () => <HomePage />,
  },
  {
    path: ROUTES.LOGIN,
    exact: true,
    component: () => <LoginPage />,
  },
  {
    path: ROUTES.REGISTER,
    exact: true,
    component: () => <RegisterPage />,
  },
  {
    path: ROUTES.FORGET_PASSWORD,
    exact: true,
    component: () => <ForgetPasswordPage />,
  },
  {
    path: ROUTES.FLASHCARD,
    exact: true,
    protect: true,
    component: () => <FlashcardPage />,
  },
  {
    path: ROUTES.FLASHCARD_DETAIL,
    exact: true,
    protect: true,
    component: () => <FlashcardDetailPage />,
  },
  {
    path: ROUTES.GAME,
    exact: true,
    protect: true,
    component: () => <GamePage />,
  },
];

const extractRoutes = (routes, isLogin = false) => {
  return routes.map((route, index) => {
    const { path, exact, component, protect } = route;
    let renderComponent = component;

    if (protect && !isLogin) {
      renderComponent = () => <LoginPage />;
    }
    return (
      <Route
        path={path}
        exact={exact}
        key={index}
        component={renderComponent}
      />
    );
  });
};

export { routes, extractRoutes };
