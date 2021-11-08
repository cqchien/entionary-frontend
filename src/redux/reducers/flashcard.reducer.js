import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllFlashcards } from "../../apis/flashcard";

export const getFlashcards = createAsyncThunk(
  "flashcard/getFlashcards",
  async (params) => {
    const apiResponse = await getAllFlashcards(params);
    return apiResponse;
  }
);

const flashcardReducer = createSlice({
  name: "flashcard",

  initialState: {
    loading: false,
    flashcards: [],
    pagination: {
      docsCount: 0,
      hasNextPage: false,
      hasPreviousPage: false,
      page: 1,
      pageCount: 1,
      take: 7,
    },
  },

  extraReducers: {
    [getFlashcards.pending]: (state) => {
      return { ...state, loading: true };
    },

    [getFlashcards.fulfilled]: (state, action) => {
      const { payload } = action;
      return {
        loading: false,
        flashcards: payload.data.flashcards,
        pagination: payload.pagination,
      };
    },
  },
});

const { reducer } = flashcardReducer;
export default reducer;
