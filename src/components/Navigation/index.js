import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navStyle } from "./style";
import logoUrl from "../../assets/images/logo.png";

const useStyle = makeStyles(navStyle);

const Navigation = () => {
  const classes = useStyle();
  
  return (
    <div className={`${classes.navWrapper} w-100w`}>
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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
