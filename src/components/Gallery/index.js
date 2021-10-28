import { makeStyles } from "@material-ui/core";
import React from "react";
import GalleryItem from "../GalleryItem";
import galleryStyle from "./style";

const useStyle = makeStyles(galleryStyle);

const wordList = [
  {
    mean: 'Mean',
    phonetic: 'phonetic',
    word: 'word',
    type: 'n',
    picture: '',
  },
  {
    mean: 'Mean',
    phonetic: 'phonetic',
    word: 'word',
    type: 'n',
    picture: '',
  }
];

const GalleryList = () => {
  const classes = useStyle();

  return (
    <div className={`${classes.root} entionary-container`}>
      {wordList.slice(0, 7).map((word, index) => (
        <GalleryItem key={index} {...word} />
      ))}
    </div>
  );
};

export default GalleryList;
