import request from "./request";

const createFlashcard = (params) => {
  return request("/flashcard", {
    method: "POST",
    data: params,
  });
};

const getAllFlashcards = (params) => {
  const url = params
    ? `/flashcard?page=${params?.page}&take=${params?.take}&sortBy=${params?.sortBy}`
    : "/flashcard";
  return request(`${url}`, {
    method: "GET",
  });
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
