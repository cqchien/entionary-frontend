import { makeStyles } from "@material-ui/core";
import React from "react";
import GalleryList from "../Gallery";
import flashCardStyle from "./style";

const useStyle = makeStyles(flashCardStyle);

const FlashCard = () => {
  const classes = useStyle();

  return (
    <div>
      <GalleryList />
    </div>
  );
};

export default FlashCard;
