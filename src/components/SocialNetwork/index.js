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

  const handleLoginSocialNetwork = async (response) => {
    const { accessToken } = response;
    try {
      const apiResponse = await loginWithSocialNetwork({
        access_token: accessToken,
      });
      const { success } = apiResponse;
      if (success) {
        history.push(ROUTES.HOME);
      }
    } catch (error) {
      const payloadFail = {
        message: error.response?.data?.message || " Error, Please try again!",
        type: "error",
      };
      dispatch(setMessage(payloadFail));
    }
  };

  return (
    <div className="d-flex" style={{ margin: "0 -0.8rem" }}>
      <Google loginGoogle={handleLoginSocialNetwork} />
      <Facebook loginFacebook={handleLoginSocialNetwork} />
    </div>
  );
}

export default SocialNetworkLogin;
