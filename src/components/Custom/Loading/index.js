import { CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";
import loadingStyle from "./style";

const useStyle = makeStyles(loadingStyle);

const Loading = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.icon} />
      <h2 className={classes.text}>Loading..</h2>
    </div>
  );
};

export default Loading;
