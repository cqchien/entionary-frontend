import { makeStyles } from "@material-ui/core";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import socialNetworkStyle from "./style";
import facebookIcon from "../../../assets/icons/fb-icon.png";

const useStyle = makeStyles(socialNetworkStyle);
function Facebook() {
  const classes = useStyle();
  return (
    <FacebookLogin
      render={() => (
        <div className={classes.socialBtn}>
          <img
            className={classes.socialImg}
            src={facebookIcon}
            alt="Facebook Icon"
          />
          <span className={classes.socialName}>Facebook</span>
        </div>
      )}
    />
  );
}

export default Facebook;
