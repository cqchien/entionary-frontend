import { makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import Loading from "../Custom/Loading";
import GalleryItem from "../GalleryItem";
import galleryStyle from "./style";

const useStyle = makeStyles(galleryStyle);

const groupFlashcard = (flashcardArr, numberFlashcardInGroup) => {
  let groups = [];
  const numberOfGroup = Math.ceil(flashcardArr.length / numberFlashcardInGroup);
  for (let i = 0; i < numberOfGroup; i++) {
    const flashcardGroup = flashcardArr.slice(
      numberFlashcardInGroup * i,
      numberFlashcardInGroup * (i + 1)
    );
    groups.push(flashcardGroup);
  }
  return groups;
};

const FlashcardsGallery = ({ loading, flashcardArr, pagination }) => {
  const classes = useStyle();
  const groups = groupFlashcard(flashcardArr, 7);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {groups.map((groupFlashcard, indexGroup) => (
            <div
              className={`${classes.root} entionary-container`}
              key={indexGroup}
            >
              {groupFlashcard.map((flashcard, index) => (
                <GalleryItem key={index} {...flashcard} />
              ))}
            </div>
          ))}
          {pagination.hasPreviousPage && (
            <Tooltip title="Back">
              <span
                className="nav-arrow prev"
                onClick={() => console.log("back")}
              />
            </Tooltip>
          )}
          {pagination.hasNextPage && (
            <Tooltip title="Next">
              <span
                className="nav-arrow next"
                onClick={() => console.log("next")}
              />
            </Tooltip>
          )}
        </>
      )}
    </>
  );
};

export default FlashcardsGallery;
