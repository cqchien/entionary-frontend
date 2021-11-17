import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllFlashcards } from "../apis/flashcard";
import BoxChooseTopic from "../components/BoxChooseTopic";
import { setMessage } from "../redux/reducers/message.reducer";

const TopicChosenGame = ({ playGameWithTopic }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [topics, updateTopics] = useState([]);

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
            (topic) => topic._id === flashcard.topic._id
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

  return (
    <BoxChooseTopic
      loading={loading}
      topics={topics}
      playGameWithTopic={playGameWithTopic}
    />
  );
};

export default TopicChosenGame;
