import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginWithSocialNetwork } from "../../apis/account";
import { ROUTES } from "../../constant/routePath";
import { setMessage } from "../../redux/reducers/message.reducer";
import Facebook from "./Facebook";
import Google from "./Google";

function SocialNetworkLogin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginGoogle = async (response) => {
    const { accessToken } = response;
    try {
      const apiResponse = await loginWithSocialNetwork({
        access_token: accessToken,
      });
      const { success } = apiResponse;
      if (success) {
        const payloadSuccess = {
          message: "Register Successfully",
          type: "success",
        };
        dispatch(setMessage(payloadSuccess));
        // Because 3000s for show message
        setTimeout(() => {
          history.push(ROUTES.HOME);
        }, 1000);
      }
    } catch (error) {
      const payloadFail = {
        message: error.response?.data?.message || " Error, Please try again!",
        type: "error",
      };
      dispatch(setMessage(payloadFail));
    }
  };

  const loginFacebook = (response) => {
    console.log("res", response);
  };

  return (
    <div className="d-flex" style={{ margin: "0 -0.8rem" }}>
      <Google loginGoogle={loginGoogle} />
      <Facebook loginFacebook={loginFacebook} />
    </div>
  );
}

export default SocialNetworkLogin;
