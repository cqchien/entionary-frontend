import React from "react";
import TopicChosenGame from "../containers/TopicChosenGame";
import Game from "../containers/Game";
import { useTitle } from "../Hook/useTitle";

const GamePage = () => {
  useTitle("Game");

  return (
    <div className={"flex-center"}>
      <TopicChosenGame />
    </div>
  );
};

export default GamePage;
