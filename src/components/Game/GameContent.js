import { makeStyles } from "@material-ui/core";
import React from "react";
import ResultGame from "./ResultGame";
import gameStyle from "./style";
import TimeBar from "./TimeBar";
import TitleGame from "./TitleGame";
import logoUrl from "../../assets/images/logo-entionary.png";

const useStyle = makeStyles(gameStyle);

const GameContent = () => {
  const classes = useStyle();

  return (
    <div className="container">
      <div className={classes.root}>
        <div className="d-flex flex-dir-col h-100">
          {/* Title */}
          <TitleGame />

          {/* Time bar */}
          <TimeBar />

          {/* Answer List */}
          <div className={`flex-grow-1 ${classes.answerList}`}>
            <div
              className={classes.answerItem}
              onClick={() => console.log("answer")}
            >
              <img src={logoUrl} alt={"answer"} />
            </div>
            <div
              className={classes.answerItem}
              onClick={() => console.log("answer")}
            >
              <img src={logoUrl} alt={"answer"} />
            </div>
            <div
              className={classes.answerItem}
              onClick={() => console.log("answer")}
            >
              <img src={logoUrl} alt={"answer"} />
            </div>
            <div
              className={classes.answerItem}
              onClick={() => console.log("answer")}
            >
              <img src={logoUrl} alt={"answer"} />
            </div>

            {/* <div className={classes.answerItem}></div>; */}
          </div>

          {/* Result */}
          {/* <ResultGame /> */}
        </div>
      </div>
    </div>
  );
};

export default GameContent;
