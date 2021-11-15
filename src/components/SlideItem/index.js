import { makeStyles } from "@material-ui/core";
import React from "react";
import SpeakerIcon from "../Speaker";
import slideItemStyle from "./style";

const useStyle = makeStyles(slideItemStyle);

const SlideItem = ({
  definition,
  word,
  type,
  pronunciation,
  example,
  picture,
}) => {
  const classes = useStyle({ picture });

  return (
    <div className={`${classes.root} ani-fade`}>
      <div className={classes.picture} />
      <div className={`${classes.content} flex-center-col`}>
        <h3 className={`${classes.word} flex-center--ver`}>
          <span>{word}</span>
          <SpeakerIcon text={word} />
        </h3>
        <h2 className={classes.mean}>Definition: {definition}</h2>
        {type && <p className={classes.type}>({type})</p>}
        {pronunciation && <p className={classes.phonetic}>/{pronunciation}/</p>}
        {example && <p className={classes.example}>Example: {example}</p>}
      </div>
    </div>
  );
};

export default SlideItem;
