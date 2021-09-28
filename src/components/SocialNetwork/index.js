import React from "react";
import { useHistory } from "react-router";
import { loginWithFacebook, loginWithGoogle } from "../../apis/account";
import { ROUTES } from "../../constant/routePath";
import Facebook from "./Facebook";
import Google from "./Google";

function SocialNetworkLogin() {
  const history = useHistory();

  const handleLoginSocialNetwork = async (response) => {
    const { accessToken } = response;

    const apiUrl = response.googleId ? loginWithGoogle : loginWithGoogle;

    const apiResponse = await apiUrl({
      access_token: accessToken,
    });

    const success = apiResponse?.success;
    if (success) {
      history.push(ROUTES.HOME);
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
