import React from "react";
import LoginForm from "../../components/Login";
import SocialNetworkLogin from "../../components/SocialNetwork";
import * as yup from "yup";
import { loginWithEmail } from "../../apis/account";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setMessage } from "../../redux/reducers/message.reducer";
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
  const { loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (account) => {
    const { email, password } = account;
    dispatch(setLoading(true));
    const apiResponse = await loginWithEmail({ email, password });
    const success = apiResponse?.success;
    if (success) {
      const payloadSuccess = {
        message: "Login Successfully",
        type: "success",
      };

      dispatch(setMessage(payloadSuccess));
      // Because 3000s for show message
      setTimeout(() => {
        setLoading(false);
        history.push(ROUTES.HOME);
      }, 1000);
    }
    dispatch(setLoading(false));
  };

  return (
    <LoginForm
      validationSchema={schema}
      loading={loading}
      handleLogin={handleLogin}
    >
      <SocialNetworkLogin loading={loading} />
    </LoginForm>
  );
};

export default Login;