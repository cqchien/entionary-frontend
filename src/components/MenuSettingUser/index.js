import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle, ExitToApp, Help, Settings } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { LINKS, ROUTES } from "../../constant/routePath";
import menuSettingStyle from "./style";

const useStyle = makeStyles(menuSettingStyle);

function MenuSettingUser({ anchorEl, onClose }) {
  const classes = useStyle();

  return (
    <Menu
      classes={{ paper: classes.root }}
      disableScrollLock={true}
      getContentAnchorEl={null}
      anchorOrigin={{
        horizontal: "right",
        vertical: "bottom",
      }}
      anchorEl={anchorEl}
      onClose={onClose}
      open={Boolean(anchorEl)}
    >
      <Link to={ROUTES.PROFILE}>
        <MenuItem className={classes.menuItem}>
          <AccountCircle className={classes.icon} fontSize="small" />
          <p className={classes.text}>Profile</p>
        </MenuItem>
      </Link>

      <MenuItem
        onClick={() => console.log("open setting")}
        className={classes.menuItem}
      >
        <Settings className={classes.icon} fontSize="small" />
        <p className={classes.text}>Setting</p>
      </MenuItem>

      <a href={LINKS.FACEBOOK} target="_blank" rel="noreferrer">
        <MenuItem className={classes.menuItem}>
          <Help className={classes.icon} fontSize="small" />
          <p className={classes.text}>Contact</p>
        </MenuItem>
      </a>

      <Link to={ROUTES.LOGOUT}>
        <MenuItem className={classes.menuItem}>
          <ExitToApp className={classes.icon} fontSize="small" />
          <p className={classes.text}>Log Out</p>
        </MenuItem>
      </Link>
    </Menu>
  );
}

export default MenuSettingUser;
