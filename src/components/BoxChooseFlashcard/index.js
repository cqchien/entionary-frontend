import { makeStyles } from "@material-ui/core";
import React from "react";
import boxChooseFlashcardStyle from "./style";
import logoUrl from "../../assets/images/logo-entionary.png";

const useStyle = makeStyles(boxChooseFlashcardStyle);

const BoxChooseFlashcard = () => {
  const classes = useStyle();

  return (
    <div>
      <div className={classes.title}>
        <h1>Choose Flashcard </h1>
      </div>
      <div className={classes.flashcards}>
        <div
          className={classes.flashcardItem}
          onClick={() => console.log("flashcard")}
        >
          <img
            src={logoUrl}
            className={classes.flashcardImg}
            alt={"flashcard"}
          />
          <h3 className={classes.flashcardTitle}>Flashcard Title</h3>
        </div>
        <div
          className={classes.flashcardItem}
          onClick={() => console.log("flashcard")}
        >
          <img
            src={logoUrl}
            className={classes.flashcardImg}
            alt={"flashcard"}
          />
          <h3 className={classes.flashcardTitle}>Flashcard Title</h3>
        </div>
        <div
          className={classes.flashcardItem}
          onClick={() => console.log("flashcard")}
        >
          <img
            src={logoUrl}
            className={classes.flashcardImg}
            alt={"flashcard"}
          />
          <h3 className={classes.flashcardTitle}>Flashcard Title</h3>
        </div>
      </div>
    </div>
  );
};

export default BoxChooseFlashcard;
