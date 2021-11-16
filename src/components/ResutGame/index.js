import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import resultGameStyle from "./style";

const useStyle = makeStyles(resultGameStyle);

const ResultGame = () => {
  const classes = useStyle();

  return (
    <div className="w-100 h-100 flex-center flex-dir-col">
      <h2 className={classes.doneTitle}>Finish</h2>
      <div className={classes.doneResult}>Score: 10</div>
      <div className="mt-10">
        <Button
          className="_btn _btn-outlined-stand mr-5"
          variant="outlined"
          onClick={() => console.log("back")}
        >
          Back
        </Button>
        <Button
          className="_btn _btn-primary"
          onClick={() => console.log("play again")}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default ResultGame;
