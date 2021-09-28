import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginWithFacebook, loginWithGoogle } from "../../apis/account";
import { ROUTES } from "../../constant/routePath";
import { setLoading } from "../../redux/reducers/message.reducer";
import Facebook from "./Facebook";
import Google from "./Google";

function SocialNetworkLogin({ loading }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLoginSocialNetwork = async (response) => {
    const { accessToken } = response;
    dispatch(setLoading(true));
    const apiUrl = response.googleId ? loginWithGoogle : loginWithFacebook;

    const apiResponse = await apiUrl({
      access_token: accessToken,
    });

    const success = apiResponse?.success;
    if (success) {
      history.push(ROUTES.HOME);
    }
    dispatch(setLoading(false));
  };

  return (
    <div className="d-flex" style={{ margin: "0 -0.8rem" }}>
      <Google loginGoogle={handleLoginSocialNetwork} loading={loading} />
      <Facebook loginFacebook={handleLoginSocialNetwork} loading={loading} />
    </div>
  );
}

export default SocialNetworkLogin;
