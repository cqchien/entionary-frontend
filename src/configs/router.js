import React from "react";
import { ROUTES } from "../constant/routePath";
const LoginPage = React.lazy(() => import("../pages/Login"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const HomePage = React.lazy(() => import("../pages/Home.js"));
export const routes = [
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
];
