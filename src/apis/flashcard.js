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

const getOneFlashcards = (params) => {
  return request(`/flashcard/${params}`, {
    method: "GET",
  });
};

const addWordToFlashcard = (params) => {
  return request(`/flashcard/${params.id}/word`, {
    method: "PATCH",
    data: params.word,
  });
};

export {
  createFlashcard,
  getAllFlashcards,
  getOneFlashcards,
  addWordToFlashcard,
};
