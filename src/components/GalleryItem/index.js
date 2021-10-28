import { makeStyles } from "@material-ui/core";
import React from "react";
import galleryItemStyle from "./style";

const useStyle = makeStyles(galleryItemStyle);

const GalleryItem = ({ word, mean, phonetic, type, picture }) => {
  const classes = useStyle({ picture });

  return (
    <div
      className={`${classes.root} flex-center cur-pointer position-rel`}
      onClick={() => console.log("speak")}
    >
      <div className="background" />
      <div className={classes.content}>
        <h2 className={classes.word}>{word}</h2>
        <p>({type})</p>
        <h2 className={classes.mean}>{mean}</h2>
        <p className={classes.phonetic}>/{phonetic}/</p>
      </div>
    </div>
  );
};

export default GalleryItem;
