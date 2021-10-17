import React, { useState } from "react";
import ForgetPasswordForm from "../../components/ForgetPassword";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const validationSchema = yup.object().shape({
  email: yup.string().trim().required("Input Email").email("Email is invalid"),
  verifyCode: yup
    .string()
    .required("Input Verify Code")
    .length(6, "Verify Code must have 6 characters"),
  password: yup
    .string()
    .trim()
    .required("Input Password")
    .min(8, "Password has at least 8 characteristic"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Input Password To Confirm")
    .oneOf(
      [yup.ref("password")],
      "Confirm Password does not match with password"
    ),
});

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [loadingSendCode, setLoadingSendCodeloadingSendCode] = useState(false);

  const dispatch = useDispatch();

  const handleForgetPassword = (data) => {
    console.log(data);
  };

  const handleSendCode = ({ email }) => {
    console.log(email);
  };

  return (
    <ForgetPasswordForm
      validationSchema={validationSchema}
      loading={loading}
      handleForgetPassword={handleForgetPassword}
      handleSendCode={handleSendCode}
      loadingSendCode={loadingSendCode}
    />
  );
};

export default ForgetPassword;
