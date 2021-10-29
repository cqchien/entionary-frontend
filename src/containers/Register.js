import * as yup from "yup";
import { registerUser } from "../apis/account";
import RegisterForm from "../components/Register";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setMessage } from "../redux/reducers/message.reducer";
import SocialNetworkLogin from "../components/SocialNetwork";
import { useHistory } from "react-router";
import { ROUTES } from "../constant/routePath";

const schema = yup.object().shape({
  email: yup.string().trim().required("Input Email").email("Email is invalid"),
  name: yup
    .string()
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Input Name"),
  password: yup
    .string()
    .trim()
    .required("Input Password")
    .min(8, "Password has at least 8 characteristic"),
});

function Register() {
  // state to set loading when call api
  const { loading } = useSelector((state) => state.message);
  const { email } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  // Check if user logged in, user cannot access register page
  if (email) {
    history.push("/");
  }

  const handleRegister = async (account) => {
    dispatch(setLoading(true));
    const apiResponse = await registerUser(account);
    const success = apiResponse?.success;
    // create new user so status code = 201
    if (success) {
      const payloadSuccess = {
        message: "Register Successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));
      // Because 1000s for show message
      setTimeout(() => {
        setLoading(false);
        history.push(ROUTES.LOGIN);
      }, 1000);
    } else {
      dispatch(setMessage(apiResponse));
    }
    dispatch(setLoading(false));
  };
  return (
    <RegisterForm
      validationSchema={schema}
      handleRegister={handleRegister}
      loading={loading}
    >
      <SocialNetworkLogin loading={loading} />
    </RegisterForm>
  );
}

export default Register;
