import React from "react";
import LoginForm from "../../components/Login";
import SocialNetworkLogin from "../../components/SocialNetwork";
import * as yup from "yup";
import { loginWithEmail } from "../../apis/account";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setMessage } from "../../redux/reducers/message.reducer";
import { ROUTES } from "../../constant/routePath";
import { useHistory } from "react-router";
import { setToken } from "../../utils/authority";

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
    const data = apiResponse?.data;
    if (success) {
      const payloadSuccess = {
        message: "Login Successfully",
        type: "success",
      };
      setToken(data.token);
      dispatch(setMessage(payloadSuccess));
      // Because 3000s for show message
      setTimeout(() => {
        setLoading(false);
        // Neu dung history.push thi useEffect o file App.js se khong chay lai. De useEffect do chay lai thi can load lai trang.
        // history.push(ROUTES.HOME);
        window.location.href = '/';
      }, 1000);
    }
    else {
      dispatch(setMessage(apiResponse));
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
