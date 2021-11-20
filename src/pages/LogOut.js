import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { removeToken } from "../apis/authority";
import Loading from "../components/Custom/Loading";

const LogOut = () => {
  const { isLogin } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.goBack();
      return;
    }

    removeToken();
    window.location.href = history.location.pathname;

    return () => {};
  }, [history, isLogin]);

  return <> {isLogin && <Loading />} </>;
};

export default LogOut;
