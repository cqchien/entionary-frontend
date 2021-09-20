import React, { useState } from "react";
import LoginForm from "../../components/Login";
import SocialNetworkLogin from "../../components/SocialNetwork";
import * as yup from "yup";
import { loginWithEmail } from "../../apis/account";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/reducers/message.reducer";

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
  const dispatch = useDispatch();

  const handleLogin = async (account) => {
    const { email, password } = account;
    try {
      setLoading(true);
      const apiResponse = await loginWithEmail({ email, password });
      const { data, success } = apiResponse;
      if (success) {
        const payloadSuccess = {
          message: "Register Successfully",
          type: "success",
        };

        dispatch(setMessage(payloadSuccess));
        setLoading(false);
      }
    } catch (error) {
      const payloadFail = {
        message: error.response?.data?.message || " Error, Please try again!",
        type: "error",
      };
      setLoading(false);
      dispatch(setMessage(payloadFail));
    }
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
