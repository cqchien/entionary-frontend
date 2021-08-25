import { makeStyles } from "@material-ui/core";
import React from "react";
import googleIcon from "../../../assets/icons/gg-icon.png";
import GoogleLogin from "react-google-login";
import socialNetworkStyle from "./style";

const useStyle = makeStyles(socialNetworkStyle);

function Google() {
  const classes = useStyle();
  return (
    <GoogleLogin
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
    />
  );
}

export default Google;
