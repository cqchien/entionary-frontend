import { makeStyles } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import React from "react";
import IconWrap from "../IconWrap";
import SpeakerIcon from "../Speaker";
import gameStyle from "./style";

const useStyle = makeStyles(gameStyle);

const toolTips = [
  {
    title:
      "Choose the correct picture with the meaning of the word. Wrong choice -5pt, correct +7d. Points will be added to your remaining time.",
    icon: <Info />,
  },
];

const TitleGame = ({ wordQuestion, numberQuestions, statusPlayer }) => {
  const classes = useStyle();
  return (
    <div className={classes.title}>
      <div className={`${classes.nTotal} flex-center`}>
        <p>
          Question&nbsp;<span>{statusPlayer.currentQuestion}</span>&nbsp;/&nbsp;
          <span>{numberQuestions}</span>
          <span>{` - Score: ${statusPlayer.currentScore}`}</span>
        </p>
        <IconWrap className="ml-5 cur-pointer" toolTips={toolTips} />
      </div>
      <h1 className="flex-center">
        <span className="mr-8">{wordQuestion.word}</span>{" "}
        <SpeakerIcon text={wordQuestion.word} />
      </h1>
    </div>
  );
};

export default TitleGame;
