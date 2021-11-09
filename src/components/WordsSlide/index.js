import { makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import SlideItem from "../SlideItem";
import wordsSlideStyle from "./style";

const useStyle = makeStyles(wordsSlideStyle);

const WordsSlide = ({ words, loading }) => {
  const classes = useStyle();
  return (
    <div className={`${classes.wrapper} flex-center--ver position-rel`}>
      {!loading ? (
        words?.map((word) => <SlideItem {...word} key={word._id} />)
      ) : (
        <Skeleton
          variant="rect"
          className={`${classes.skeleton} w-100`}
          animation="wave"
          style={{ height: "576px" }}
        />
      )}
    </div>
  );
};

export default WordsSlide;
