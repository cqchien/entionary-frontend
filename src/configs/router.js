import { ROUTES } from "../constant/routePath";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

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
