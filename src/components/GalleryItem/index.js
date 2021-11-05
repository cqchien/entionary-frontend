import { makeStyles } from "@material-ui/core";
import React from "react";
import flashcardItemStyle from "./style";

const useStyle = makeStyles(flashcardItemStyle);

const GalleryItem = ({ name, picture, topic, mode }) => {
  const classes = useStyle({ picture });
  console.log(picture);
  return (
    <div
      className={`${classes.root} flex-center cur-pointer position-rel`}
      onClick={() => console.log("speak")}
    >
      <div className="background" />
      <div className={classes.content}>
        <h2 className={classes.title}>{name}</h2>
        <h2 className={classes.name}>{topic}</h2>
        <p className={classes.option}>/{mode}/</p>
      </div>
    </div>
  );
};

export default GalleryItem;
