import { makeStyles, Tooltip } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import SlideItem from "../SlideItem";
import wordsSlideStyle from "./style";

const useStyle = makeStyles(wordsSlideStyle);

const WordsSlide = ({
  words,
  loading,
  pagination,
  handleNextPage,
  handlePrevPage,
}) => {
  const classes = useStyle();
  return (
    <div className={`${classes.wrapper} flex-center--ver position-rel`}>
      {loading ? (
        <Skeleton
          variant="rect"
          className={`${classes.skeleton} w-100`}
          animation="wave"
          style={{ height: "576px" }}
        />
      ) : words.length === 0 ? (
        <p className="entionary-title m-auto">No Data</p>
      ) : (
        <>
          {words.map((word) => (
            <SlideItem {...word} key={word._id} />
          ))}
          {pagination.hasPreviousPage && (
            <Tooltip title="Back">
              <span className="nav-arrow prev" onClick={handlePrevPage} />
            </Tooltip>
          )}
          {pagination.hasNextPage && (
            <Tooltip title="Next">
              <span className="nav-arrow next" onClick={handleNextPage} />
            </Tooltip>
          )}
        </>
      )}
    </div>
  );
};

export default WordsSlide;
