import React from "react";
import Login from "../containers/Login";
import { ROUTES } from "../constant/routePath";
import { Link } from "react-router-dom";
import { useTitle } from "../Hook/useTitle";
import { useCloseNav } from "../Hook/useCloseNav";
import "./styles/login-signup.scss";

const LoginPage = () => {
  useTitle("Login");
  useCloseNav();

  return (
    <div className="w-100vw h-100vh">
      <div className="transform-center">
        <Login />

        <div className="has-account">
          You Don't Have Account?&nbsp;
          <Link to={ROUTES.REGISTER} className="account-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
