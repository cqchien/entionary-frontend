import { makeStyles } from "@material-ui/core";
import React from "react";
import googleIcon from "../../assets/icons/gg-icon.png";
import GoogleLogin from "react-google-login";
import socialNetworkStyle from "./style";

const useStyle = makeStyles(socialNetworkStyle);

function Google() {
  const classes = useStyle();

  const authenWithGoogle = (response) => {
    console.log(process.env.REACT_APP_GG_CLIENT_ID)
    console.log("res", response);
  };

  return (
    <GoogleLogin
      clientId="79538994406-136dab2kechleira2d2tu4cn44dht7pg.apps.googleusercontent.com"
      autoLoad={false}
      // Render prop to use a custom element, use renderProps.onClick
      render={(props) => (
        <div
          onClick={props.onClick}
          disabled={props.disabled}
          className={classes.socialBtn}
        >
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
