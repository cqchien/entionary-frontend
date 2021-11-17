import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllFlashcards } from "../apis/flashcard";
import BoxChooseTopic from "../components/BoxChooseTopic";
import { setMessage } from "../redux/reducers/message.reducer";

const TopicChosenGame = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const listFlashcard = useRef({ flashcard: [], pagination: {} });

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    const paginateOptions = {
      page: currentPage,
      take: 7,
      sortBy: "",
    };

    const getFlashcards = async (paginateOptions) => {
      const apiResponse = await getAllFlashcards(paginateOptions);
      const success = apiResponse?.success;
      if (success) {
        listFlashcard.current = {
          flashcards: apiResponse.data.flashcards,
        };
      } else {
        dispatch(setMessage(apiResponse));
      }
      setLoading(false);
    };

    getFlashcards(paginateOptions);

    return () => {};
  }, [currentPage, dispatch]);

  const handleNextPage = () => {
    return setCurrentPage((prevPage) => (prevPage = prevPage + 1));
  };

  const handlePrevPage = () => {
    return setCurrentPage((prevPage) => (prevPage = prevPage - 1));
  };

  return (
    <BoxChooseTopic
      flashcards={listFlashcard.current.flashcards}
      loading={loading}
      pagination={listFlashcard.current.pagination}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default TopicChosenGame;
