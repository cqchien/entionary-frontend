import React from "react";
import Game from "../containers/Game";
import { useTitle } from "../Hook/useTitle";

const GamePage = () => {
  useTitle("Game");

  return (
    <div className={"flex-center"}>
      <Game />
    </div>
  );
};

export default GamePage;
