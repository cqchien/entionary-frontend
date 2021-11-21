import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [words, updateWords] = useState([]);
  const [isFinish, setFinishGame] = useState(false);
  const [restTime, setRestTime] = useState(GAME.TOTAL_TIME);
  const [question, updateQuestion] = useState({
    wordQuestion: {},
    answerList: [],
    numberQuestions: 0,
  });

  const [statusPlayer, updateStatusPlayer] = useState({
    currentQuestion: 1,
    currentScore: 0,
  });

  // Call Api to set word
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
    };

    getFlashcards();

    setLoading(false);
    return () => {
      onBack();
    };
  }, [dispatch, onBack, topicTitle]);

  // Update question
  useEffect(() => {
    updateQuestion({
      wordQuestion: words[0],
      answerList: getAnswers(words, words[0]),
      numberQuestions: words.length,
    });
    return () => {};
  }, [words]);

  // set time
  useEffect(() => {
    const intervalTime = setInterval(() => {
      const newRestTime = restTime - GAME.RESET_TIME;
      if (newRestTime <= 0) {
        setRestTime(0);
        return setFinishGame(true);
      }
      setRestTime(newRestTime);
    }, GAME.RESET_TIME);

    return () => {
      if (intervalTime) clearInterval(intervalTime);
    };
  }, [restTime]);

  useEffect(() => {
    const scoresGame = JSON.parse(localStorage.getItem("gameResult"));

    const initialValue = {
      user: email,
      result: [
        {
          topic: topicTitle ? topicTitle : "",
          score: statusPlayer.currentScore,
        },
      ],
    };

    if (!scoresGame) {
      return localStorage.setItem("gameResult", JSON.stringify(initialValue));
    }
    if (isFinish) {
      const result = scoresGame?.result;
      const topicIndex = result?.findIndex(({ topic }) => topic === topicTitle);
      const newResult = {
        topic: topicTitle ? topicTitle : "",
        score: statusPlayer.currentScore,
      };

      if (topicIndex < 0) {
        scoresGame.result.push(newResult);
        return localStorage.setItem("gameResult", JSON.stringify(scoresGame));
      }

      const score = result ? result[topicIndex]?.score : 0;

      if (score <= statusPlayer.currentScore) {
        result[topicIndex] = newResult;
        return localStorage.setItem("gameResult", JSON.stringify(scoresGame));
      }
    }

    return () => {};
  }, [email, isFinish, statusPlayer, topicTitle]);

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
      restTime={restTime}
      onBack={onBack}
      statusPlayer={statusPlayer}
      handleAnswer={handleAnswer}
    />
  );
};

export default Game;
