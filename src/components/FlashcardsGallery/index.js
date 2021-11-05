import { makeStyles } from "@material-ui/core";
import React from "react";
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

const FlashcardsGallery = ({ flashcardArr }) => {
  const classes = useStyle();
  const groups = groupFlashcard(flashcardArr, 7);
  return (
    <>
      {groups.map((groupFlashcard, indexGroup) => (
        <div className={`${classes.root} entionary-container`} key={indexGroup}>
          {groupFlashcard.map((flashcard, index) => (
            <GalleryItem key={index} {...flashcard} />
          ))}
        </div>
      ))}
    </>
  );
};

export default FlashcardsGallery;
