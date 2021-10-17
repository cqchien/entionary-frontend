import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constant/routePath";
import ForgetPassword from "../containers/ForgetPassword";
import { useCloseNav } from "../Hook/useCloseNav";
import { useTitle } from "../Hook/useTitle";
import "./styles/login-signup.scss";

const ForgetPasswordPage = () => {
  useTitle("Forget Password");
  useCloseNav();

  return (
    <div className="pos-rel w-100vw h-100vh">
      <div className="transform-center">
        <ForgetPassword />

        <div className="has-account">
          You Have Account?&nbsp;
          <Link to={ROUTES.LOGIN} className="account-link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
