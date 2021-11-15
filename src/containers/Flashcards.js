import React, { useEffect, useRef, useState } from "react";
import FlashcardsGallery from "../components/FlashcardsGallery";
import { useDispatch } from "react-redux";
import FlashcardItem from "./FlashcardItem";
import { getAllFlashcards } from "../apis/flashcard";
import { setMessage } from "../redux/reducers/message.reducer";

const Flashcards = ({ isRerender }) => {
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
          pagination: apiResponse.pagination,
        };
      } else {
        dispatch(setMessage(apiResponse));
      }
      setLoading(false);
    };

    getFlashcards(paginateOptions);

    return () => {};
  }, [dispatch, currentPage, isRerender]);

  const handleNextPage = () => {
    return setCurrentPage((prevPage) => (prevPage = prevPage + 1));
  };

  const handlePrevPage = () => {
    return setCurrentPage((prevPage) => (prevPage = prevPage - 1));
  };

  return (
    <FlashcardsGallery
      loading={loading}
      pagination={listFlashcard.current.pagination}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    >
      {listFlashcard.current.flashcards?.map((flashcard, index) => (
        <FlashcardItem key={index} {...flashcard} />
      ))}
    </FlashcardsGallery>
  );
};

export default Flashcards;
