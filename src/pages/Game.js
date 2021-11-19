import React, { useState } from "react";
import TopicChosenGame from "../containers/TopicChosenGame";
import Game from "../containers/Game";
import { useTitle } from "../Hook/useTitle";

const GamePage = () => {
  useTitle("Game");
  const [isPlayGame, setPlayGame] = useState(false);
  const [topicTitle, updateTopicTitle] = useState("");

  const playGameWithTopic = (title) => {
    setPlayGame(true);
    updateTopicTitle(title);
  };

  return (
    <div className={"flex-center"}>
      {isPlayGame ? (
        <Game topicTitle={topicTitle} setPlayGame={setPlayGame} />
      ) : (
        <TopicChosenGame playGameWithTopic={playGameWithTopic} />
      )}
    </div>
  );
};

export default GamePage;
