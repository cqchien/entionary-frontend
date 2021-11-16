import { makeStyles } from "@material-ui/core";
import React from "react";
import gameStyle from "./style";
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
        </div>
      </div>
    </div>
  );
};

export default GameContent;
