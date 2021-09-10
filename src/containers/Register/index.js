import * as yup from "yup";
import { useState } from "react";
import { registerUser } from "../../apis/account";
import RegisterForm from "../../components/Register";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/reducers/message.reducer";

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
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = async (account) => {
    setLoading(true);
    try {
      const response = await registerUser(account);
      console.log(response);
      // create new user so status code = 201
      if (response.success) {
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
    <RegisterForm
      validationSchema={schema}
      handleRegister={handleRegister}
      loading={loading}
    />
  );
}

export default Register;
