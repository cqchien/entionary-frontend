import React, { useEffect, useState } from "react";
import FlashcardsGallery from "../components/FlashcardsGallery";
import { useDispatch } from "react-redux";
import FlashcardItem from "./FlashcardItem";
import { getAllFlashcards } from "../apis/flashcard";
import { setMessage } from "../redux/reducers/message.reducer";

const Flashcards = ({ isRerender }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, updateData] = useState({
    flashcards: [],
    pagination: {},
  });

  const [paginateOptions, setPaginateOption] = useState({
    page: 1,
    take: 7,
    sortBy: "",
  });

  useEffect(() => {
    setLoading(true);

    const getFlashcards = async (paginateOptions) => {
      const apiResponse = await getAllFlashcards(paginateOptions);
      const success = apiResponse?.success;
      if (success) {
        updateData({
          flashcards: apiResponse.data.flashcards,
          pagination: apiResponse.pagination,
        });
        setLoading(false);
      } else {
        dispatch(setMessage(apiResponse));
      }
    };

    getFlashcards(paginateOptions);

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
      pagination={data.pagination}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    >
      {data.flashcards?.map((flashcard, index) => (
        <FlashcardItem key={index} {...flashcard} />
      ))}
    </FlashcardsGallery>
  );
};

export default Flashcards;
