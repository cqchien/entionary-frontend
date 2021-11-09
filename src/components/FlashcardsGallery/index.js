import { makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import Loading from "../Custom/Loading";
import GalleryItem from "../GalleryItem";
import galleryStyle from "./style";

const useStyle = makeStyles(galleryStyle);

const FlashcardsGallery = ({
  loading,
  flashcardArr,
  pagination,
  handleNextPage,
  handlePrevPage,
}) => {
  const classes = useStyle();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={`${classes.root} entionary-container`}>
            {flashcardArr.map((flashcard, index) => (
              <GalleryItem key={index} {...flashcard} />
            ))}
          </div>
          ))
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
    </>
  );
};

export default FlashcardsGallery;
