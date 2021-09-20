import React from "react";
import { ROUTES } from "../constant/routePath";
const LoginPage = React.lazy(() => import('../pages/login'));
const RegisterPage = React.lazy(() => import('../pages/register'));

export const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: () => <h1>Hello World</h1>,
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
