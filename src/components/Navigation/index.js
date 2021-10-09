import { Avatar, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navStyle } from "./style";
import logoUrl from "../../assets/images/logo.png";

const useStyle = makeStyles(navStyle);

const Navigation = () => {
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
            <Avatar
              className={`${classes.imgSize} ${classes.avt} cur-pointer`}
              alt="Username"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
