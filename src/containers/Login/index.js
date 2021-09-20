import React, { useState } from "react";
import LoginForm from "../../components/Login";
import SocialNetworkLogin from "../../components/SocialNetwork";
import * as yup from "yup";
import { loginWithEmail } from "../../apis/account";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/reducers/message.reducer";
import { ROUTES } from "../../constant/routePath";
import { useHistory } from "react-router";

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
  const history = useHistory();

  const handleLogin = async (account) => {
    const { email, password } = account;
    try {
      setLoading(true);
      const apiResponse = await loginWithEmail({ email, password });
      const { success } = apiResponse;
      if (success) {
        const payloadSuccess = {
          message: "Register Successfully",
          type: "success",
        };

        dispatch(setMessage(payloadSuccess));
        // Because 3000s for show message
        setTimeout(() => {
          setLoading(false);
          history.push(ROUTES.HOME);
        }, 3000);
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
