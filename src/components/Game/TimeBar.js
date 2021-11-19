import { makeStyles } from "@material-ui/core";
import React from "react";
import { GAME } from "../../constant/game";
import gameStyle from "./style";

const useStyle = makeStyles(gameStyle);

const TimeBar = ({ restTime }) => {
  const classes = useStyle();
  const percent = Math.round((restTime / GAME.TOTAL_TIME) * 100);
  const minute = ~~(restTime / 60000);
  const second = `0${~~(restTime / 1000) % 60}`.slice(-2);

  return (
    <div className={classes.timerWrap}>
      <span className={classes.timeStr}>{`${minute}:${second}`}</span>
      <div className={classes.timer} style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default TimeBar;
