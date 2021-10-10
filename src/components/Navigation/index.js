import {
  Avatar,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navStyle } from "./style";
import logoUrl from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { ROUTES } from "../../constant/routePath";

const useStyle = makeStyles(navStyle);

const Navigation = () => {
  const { isLogin, avatar } = useSelector((state) => state.user);
  console.log(isLogin);

  const classes = useStyle();

  return (
    // id is used to close nav
    <div className={`${classes.navWrapper} w-100vw`} id="entionaryNav">
      <div className={`${classes.nav} w-100`}>
        <div className="container h-100 flex-center--ver">
          {/* Logo */}
          <Link to="/">
            <img
              className={`${classes.imgSize} ${classes.logo}`}
              src={logoUrl}
              alt="Logo"
            />
          </Link>

          <div className={`${classes.control} flex-center--ver`}>
            {/* Search */}

            {/* Avatar */}
            {isLogin ? (
              <Avatar
                className={`${classes.imgSize} ${classes.avt} cur-pointer`}
                alt="Username"
                src={avatar}
              />
            ) : (
              <Link to={ROUTES.LOGIN}>
                <Button
                  className="_btn _btn-primary"
                  classes={{
                    root: classes.loginBtn,
                    label: classes.loginLabel,
                  }}
                  variant="contained"
                  size="small"
                >
                  Log In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
