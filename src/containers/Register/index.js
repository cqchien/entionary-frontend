import * as yup from "yup";
import { useState } from "react";
import { registerUser } from "../../apis/account";
import RegisterForm from "../../components/Register";

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

  const handleRegister = async (account) => {
    setLoading(true);
    try {
      const response = await registerUser(account);
      console.log(response);
      // create new user so status code = 201
      if (response.success) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
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
