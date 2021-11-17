import React, { useState } from "react";
import TopicChosenGame from "../containers/TopicChosenGame";
import Game from "../containers/Game";
import { useTitle } from "../Hook/useTitle";

const GamePage = () => {
  useTitle("Game");
  const [isPlayGame, setPlayGame] = useState(false);
  const [topicId, updateTopicId] = useState("");

  const playGameWithTopic = (topicId) => {
    setPlayGame(true);
    updateTopicId(topicId);
  };

  return (
    <div className={"flex-center"}>
      {isPlayGame ? (
        <Game topicId={topicId} />
      ) : (
        <TopicChosenGame playGameWithTopic={playGameWithTopic} />
      )}
    </div>
  );
};

export default GamePage;
