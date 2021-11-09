import React, { useEffect, useState } from "react";
import FlashcardsGallery from "../components/FlashcardsGallery";
import { useDispatch, useSelector } from "react-redux";
import { getFlashcards } from "../redux/reducers/flashcard.reducer";
import FlashcardDetail from "./FlashcardDetail";

const Flashcards = ({ isRerender }) => {
  const dispatch = useDispatch();
  const { loading, flashcards, pagination } = useSelector(
    (state) => state.flashcard
  );

  const [paginateOptions, setPaginateOption] = useState({
    page: 1,
    take: 7,
    sortBy: "",
  });

  useEffect(() => {
    dispatch(getFlashcards(paginateOptions));
    return () => {};
  }, [dispatch, paginateOptions, isRerender]);

  const handleNextPage = () => {
    return setPaginateOption((prevState) => {
      return { ...prevState, page: prevState.page + 1 };
    });
  };

  const handlePrevPage = () => {
    return setPaginateOption((prevState) => {
      return { ...prevState, page: prevState.page - 1 };
    });
  };

  return (
    <FlashcardsGallery
      loading={loading}
      pagination={pagination}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    >
      {flashcards?.map((flashcard, index) => (
        <FlashcardDetail key={index} {...flashcard} />
      ))}
    </FlashcardsGallery>
  );
};

export default Flashcards;
