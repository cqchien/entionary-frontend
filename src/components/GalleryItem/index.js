import { makeStyles } from "@material-ui/core";
import React from "react";
import flashcardItemStyle from "./style";

const useStyle = makeStyles(flashcardItemStyle);

const GalleryItem = ({
  name,
  picture,
  topic,
  isPublic,
  stars,
  _id,
  handleGetDetail,
}) => {
  const classes = useStyle({ picture });
  return (
    <div
      className={`${classes.root} flex-center cur-pointer position-rel`}
      onClick={() => handleGetDetail(_id)}
    >
      <div className="background" />
      <div className={classes.content}>
        <h2 className={classes.title}>{name}</h2>
        <h2 className={classes.name}>{topic.title}</h2>
        <p className={classes.option}>/{isPublic ? "Public" : "Private"}/</p>
        <p className={classes.option}>Stars: {stars.length} </p>
      </div>
    </div>
  );
};

export default GalleryItem;
