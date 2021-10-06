import { makeStyles } from "@material-ui/core";
import React from "react";
import googleIcon from "../../assets/icons/gg-icon.png";
import GoogleLogin from "react-google-login";
import socialNetworkStyle from "./style";

const useStyle = makeStyles(socialNetworkStyle);

function Google({ loginGoogle, loading }) {
  const classes = useStyle();
  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GG_CLIENT_ID}
        autoLoad={false}
        // Render prop to use a custom element, use renderProps.onClick
        render={(props) => (
          <div
            onClick={!loading ? props.onClick : undefined}
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
        onSuccess={loginGoogle}
        onFailure={loginGoogle}
        // isSignedIn={true} attribute will call onSuccess callback on load to keep the user signed in.
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
}

export default Google;
