import { makeStyles } from "@material-ui/core";
import React from "react";
import SlideItem from "../SlideItem";
import wordsSlideStyle from "./style";

const useStyle = makeStyles(wordsSlideStyle);

const WordsSlide = ({ words }) => {
  const classes = useStyle();
  return (
    <div className={`${classes.wrapper} flex-center--ver position-rel`}>
      {words.map((word) => (
        <SlideItem {...word} key={word._id} />
      ))}
    </div>
  );
};

export default WordsSlide;
