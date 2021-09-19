import React, { useState } from "react";
import LoginForm from "../../components/Login";
import SocialNetworkLogin from "../../components/SocialNetwork";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().trim().required("Input Email").email("Email is invalid"),
  password: yup
    .string()
    .trim()
    .required("Input Password")
    .min(8, "Password has at least 8 characteristic"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const handleLogin = (account) => {
    console.log(account);
  };
  return (
    <LoginForm
      validationSchema={schema}
      loading={loading}
      handleLogin={handleLogin}
    >
      <SocialNetworkLogin />
    </LoginForm>
  );
};

export default Login;
