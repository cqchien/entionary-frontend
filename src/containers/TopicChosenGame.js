import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFlashcards } from "../apis/flashcard";
import BoxChooseTopic from "../components/BoxChooseTopic";
import { setMessage } from "../redux/reducers/message.reducer";

const TopicChosenGame = ({ playGameWithTopic }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [topics, updateTopics] = useState([]);
  const bestResultTopics = useRef([]);

  useEffect(() => {
    setLoading(true);

    const getFlashcards = async () => {
      const apiResponse = await getAllFlashcards();
      const success = apiResponse?.success;
      if (success) {
        const flashcards = apiResponse.data?.flashcards;
        let topicsInFLashcards = [];
        flashcards.forEach((flashcard) => {
          const isTopicExist = topicsInFLashcards.some(
            (topic) => topic.title === flashcard.topic.title
          );
          if (!isTopicExist) {
            topicsInFLashcards.push(flashcard.topic);
          }
        });
        updateTopics(topicsInFLashcards);
      } else {
        dispatch(setMessage(apiResponse));
      }
      setLoading(false);
    };

    getFlashcards();

    return () => {};
  }, [dispatch]);

  useEffect(() => {
    const scoresGame = JSON.parse(localStorage.getItem("gameResult"));
    if (scoresGame?.user === email) {
      bestResultTopics.current = scoresGame.result;
    }

    return () => {};
  }, [email]);

  return (
    <BoxChooseTopic
      loading={loading}
      topics={topics}
      bestResultTopics={bestResultTopics.current}
      playGameWithTopic={playGameWithTopic}
    />
  );
};

export default TopicChosenGame;
