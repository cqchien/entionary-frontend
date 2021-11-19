import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import GameContent from "../components/Game/GameContent";
import { getAllFlashcards } from "../apis/flashcard";
import { setMessage } from "../redux/reducers/message.reducer";

const Game = ({ topicTitle, setPlayGame }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const words = useRef([]);

  useEffect(() => {
    setLoading(true);

    const getFlashcards = async () => {
      const apiResponse = await getAllFlashcards();
      const success = apiResponse?.success;

      if (success) {
        const { flashcards } = apiResponse.data;
        const wordsWithTopic = [];
        flashcards.forEach((flashcard) => {
          if (flashcard.topic.title === topicTitle) {
            wordsWithTopic.push(...flashcard.words);
          }
        });
        if (wordsWithTopic.length > 0) {
          words.current = wordsWithTopic;
        } else {
          setPlayGame(false);
          const failPayload = {
            message: "No words in this topic. Please, choose again",
            type: "warning",
          };
          dispatch(setMessage(failPayload));
        }
      } else {
        dispatch(setMessage(apiResponse));
      }
      setLoading(false);
    };

    getFlashcards();

    return () => {};
  }, [dispatch, setPlayGame, topicTitle]);

  return <GameContent loading={loading} words={words.current} />;
};

export default Game;
