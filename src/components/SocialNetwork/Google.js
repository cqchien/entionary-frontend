import { makeStyles } from "@material-ui/core";
import React from "react";
import googleIcon from "../../assets/icons/gg-icon.png";
import GoogleLogin from "react-google-login";
import socialNetworkStyle from "./style";

const useStyle = makeStyles(socialNetworkStyle);

const authenWithGoogle = (response) => {
  console.log(response);
};

function Google() {
  const classes = useStyle();
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      autoLoad={false}
      // Render prop to use a custom element, use renderProps.onClick
      render={() => (
        <div className={classes.socialBtn}>
          <img
            className={classes.socialImg}
            src={googleIcon}
            alt="Google Icon"
          />
          <span className={classes.socialName}>Google</span>
        </div>
      )}
      onSuccess={authenWithGoogle}
      onFailure={authenWithGoogle}
      // isSignedIn={true} attribute will call onSuccess callback on load to keep the user signed in.
      isSignedIn={true}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Google;
