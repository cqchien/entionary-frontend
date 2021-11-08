import request from "./request";

const createFlashcard = (params) => {
  return request("/flashcard", {
    method: "POST",
    data: params,
  });
};

const getAllFlashcards = (params) => {
  return request(
    `/flashcard?page=${params.page}&take=${params.take}&sortBy=${params.sortBy}`,
    {
      method: "GET",
    }
  );
};

export { createFlashcard, getAllFlashcards };
