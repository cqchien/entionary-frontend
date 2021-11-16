import { makeStyles } from "@material-ui/core";
import React from "react";
import ResultGame from "./ResultGame";
import gameStyle from "./style";
import TimeBar from "./TimeBar";
import TitleGame from "./TitleGame";

const useStyle = makeStyles(gameStyle);

const GameContent = () => {
  const classes = useStyle();

  return (
    <div className="container">
      <div className={classes.root}>
        <div className="d-flex flex-dir-col h-100">
          {/* Title */}
          <TitleGame />

          {/* Content */}
          <TimeBar />
          <ResultGame />
        </div>
      </div>
    </div>
  );
};

export default GameContent;
