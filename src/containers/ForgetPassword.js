import React, { useState } from "react";
import ForgetPasswordForm from "../components/ForgetPassword";
import * as yup from "yup";
import { resetPassword, sendVerifyCode } from "../apis/user";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/reducers/message.reducer";
import { useHistory } from "react-router";

const validationSchema = yup.object().shape({
  email: yup.string().trim().required("Input Email").email("Email is invalid"),
  codeToVerify: yup
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
  const history = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loadingSendCode, setLoadingSendCode] = useState(false);

  const handleForgetPassword = async ({ email, password, codeToVerify }) => {
    setLoading(true);
    const apiResponse = await resetPassword({ email, password, codeToVerify });
    const success = apiResponse?.success;

    setLoading(false);

    if (success) {
      const payloadSuccess = {
        message: "You have reset password successfully. Try login again.",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));
      setTimeout(() => {
        history.push("/login");
      }, 2000)
    } else {
      dispatch(setMessage(apiResponse));
    }
  };

  const handleSendCode = async ({ email }) => {
    setLoadingSendCode(true);
    const apiResponse = await sendVerifyCode({ email });
    const success = apiResponse?.success;

    setLoadingSendCode(false);

    if (success) {
      const payloadSuccess = {
        message: "Send Verify Code Successfully. Check mail, pls",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));
    } else {
      dispatch(setMessage(apiResponse));
    }
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
