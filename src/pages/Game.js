import React from "react";
import FlashcardChosenGame from "../containers/FlashcardChosenGame";
import Game from "../containers/Game";
import { useTitle } from "../Hook/useTitle";

const GamePage = () => {
  useTitle("Game");

  return (
    <div className={"flex-center"}>
      <FlashcardChosenGame />
    </div>
  );
};

export default GamePage;
