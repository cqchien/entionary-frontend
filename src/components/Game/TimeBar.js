import { makeStyles } from "@material-ui/core";
import React from "react";
import gameStyle from "./style";

const useStyle = makeStyles(gameStyle);

const TimeBar = () => {
  const classes = useStyle();

  return (
    <div className={classes.timerWrap}>
      <span className={classes.timeStr}>05:09</span>
      <div className={classes.timer} style={{ width: `75%` }}></div>
    </div>
  );
};

export default TimeBar;
