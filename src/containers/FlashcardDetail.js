import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getOneFlashcards } from "../apis/flashcard";
import WordsSlide from "../components/WordsSlide";
import { setMessage } from "../redux/reducers/message.reducer";

const FlashcardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [words, updateWords] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getDetailFlashcard = async () => {
      const apiResponse = await getOneFlashcards(id);
      console.log(apiResponse);
      const success = apiResponse?.success;
      const flashcard = apiResponse?.data?.flashcard;
      if (success) {
        updateWords(flashcard.words);
      } else {
        dispatch(setMessage(apiResponse));
      }
    };

    getDetailFlashcard();
    setLoading(false);

    return () => {};
  }, [dispatch, id]);

  return <WordsSlide loading={loading} words={words} />;
};

export default FlashcardDetail;
