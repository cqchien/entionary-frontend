import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GameContent from "../components/Game/GameContent";
import { getAllFlashcards } from "../apis/flashcard";
import { setMessage } from "../redux/reducers/message.reducer";
import { GAME } from "../constant/game";

const getAnswers = (words = [], wordAnswer = {}) => {
  const answerIndex = words.findIndex((word) => word._id === wordAnswer._id);
  const listWords = [...words];
  listWords.splice(answerIndex, 1);
  const answerList = listWords.sort(() => Math.random() - 0.5).slice(0, 3);
  answerList.push(words[answerIndex]);
  delete [...listWords];
  return answerList.sort(() => Math.random() - 0.5);
};

const Game = ({ topicTitle, onBack }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [words, updateWords] = useState([]);
  const [isFinish, setFinishGame] = useState(false);
  const [question, updateQuestion] = useState({
    wordQuestion: {},
    answerList: [],
    numberQuestions: 0,
  });

  const [statusPlayer, updateStatusPlayer] = useState({
    currentQuestion: 1,
    currentScore: 0,
  });

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

        if (wordsWithTopic.length > 3) {
          updateWords(wordsWithTopic);
        } else {
          onBack();

          const failPayload = {
            message: "At least 4 words in topic. Please, choose again",
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

    return () => {
      onBack();
    };
  }, [dispatch, onBack, topicTitle]);

  useEffect(() => {
    updateQuestion({
      wordQuestion: words[0],
      answerList: getAnswers(words, words[0]),
      numberQuestions: words.length,
    });
    return () => {};
  }, [words]);

  const handleAnswer = (answerWord) => {
    const isCorrect = answerWord._id === question.wordQuestion._id;
    const checkFinish =
      statusPlayer.currentQuestion === question.numberQuestions;
    updateStatusPlayer((prevState) => ({
      ...prevState,
      currentQuestion: checkFinish
        ? prevState.currentQuestion
        : prevState.currentQuestion + 1,
      currentScore: isCorrect
        ? prevState.currentScore + GAME.CORRECT_SCORE
        : prevState.currentScore === 0
        ? prevState.currentScore
        : prevState.currentScore - GAME.WRONG_SCORE,
    }));

    if (checkFinish) {
      return setFinishGame(true);
    }

    const answerWordIndex = words.findIndex(
      (word) => word._id === question.wordQuestion._id
    );
    const wordQuestion = words[answerWordIndex + 1];

    const answerList = getAnswers(words, wordQuestion);
    updateQuestion((prevState) => ({
      ...prevState,
      wordQuestion,
      answerList,
    }));
  };

  return (
    <GameContent
      loading={loading}
      question={question}
      isFinish={isFinish}
      onBack={onBack}
      statusPlayer={statusPlayer}
      handleAnswer={handleAnswer}
    />
  );
};

export default Game;
