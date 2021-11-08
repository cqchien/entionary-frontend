import React, { useEffect, useState } from "react";
import FlashcardsGallery from "../components/FlashcardsGallery";
import { useDispatch, useSelector } from "react-redux";
import { getFlashcards } from "../redux/reducers/flashcard.reducer";

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

  return (
    <FlashcardsGallery
      loading={loading}
      pagination={pagination}
      flashcardArr={flashcards}
    />
  );
};

export default Flashcards;
