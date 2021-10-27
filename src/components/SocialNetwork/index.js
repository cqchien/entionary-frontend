import React from "react";
import { useDispatch } from "react-redux";
import { loginWithFacebook, loginWithGoogle } from "../../apis/account";
import { setLoading, setMessage } from "../../redux/reducers/message.reducer";
import { setToken } from "../../apis/authority";
import Facebook from "./Facebook";
import Google from "./Google";

function SocialNetworkLogin({ loading }) {
  const dispatch = useDispatch();

  const handleLoginSocialNetwork = async (response) => {
    const { accessToken } = response;
    dispatch(setLoading(true));
    const apiUrl = response.googleId ? loginWithGoogle : loginWithFacebook;

    const apiResponse = await apiUrl({
      access_token: accessToken,
    });

    const success = apiResponse?.success;
    const data = apiResponse?.data;
    if (success) {
      setToken(data.token);
      window.location.href = "/";
    } else {
      dispatch(setMessage(apiResponse));
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
