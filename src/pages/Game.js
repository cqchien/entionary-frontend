import React from "react";
import Game from "../containers/Game";
import "./styles/game.scss";

const GamePage = () => {
  return (
    <div className={"flex-center wrapper"}>
      <div className={"background w-100 h-100"}></div>
      <Game />
    </div>
  );
};

export default GamePage;
