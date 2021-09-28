import { makeStyles } from "@material-ui/core";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import socialNetworkStyle from "./style";
import facebookIcon from "../../assets/icons/fb-icon.png";

const useStyle = makeStyles(socialNetworkStyle);

function Facebook({ loginFacebook, loading }) {
  const classes = useStyle();
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      autoLoad={false}
      callback={loginFacebook}
      render={(props) => (
        <div
          className={classes.socialBtn}
          onClick={!loading ? props.onClick : undefined}
        >
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
