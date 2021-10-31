import { Avatar, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navStyle } from "./style";
import logoUrl from "../../assets/images/logo-entionary.png";
import { useSelector } from "react-redux";
import { ROUTES } from "../../constant/routePath";
import SearchInputCustom from "../Custom/SearchInput";
import { Search } from "@material-ui/icons";
import MenuSettingUser from "../MenuSettingUser";

const useStyle = makeStyles(navStyle);

const Navigation = () => {
  const classes = useStyle();

  const { isLogin, avatar } = useSelector((state) => state.user);

  const [anchorMenu, setAnchorMenu] = useState(null);

  const onOpenMenu = (e) => setAnchorMenu(e.currentTarget);
  const onCloseMenu = () => setAnchorMenu(null);

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
            <div className="mr-5">
              <SearchInputCustom
                placeholder="Input keyword..."
                prefixIcon={<Search className={classes.searchIcon} />}
              />
            </div>
            {/* Avatar */}
            {isLogin ? (
              <Avatar
                className={`${classes.imgSize} ${classes.avt} cur-pointer`}
                alt="Username"
                src={avatar}
                onClick={onOpenMenu}
                onMouseEnter={onOpenMenu}
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

            {/* Setting Menu */}
            <MenuSettingUser anchorEl={anchorMenu} onClose={onCloseMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
