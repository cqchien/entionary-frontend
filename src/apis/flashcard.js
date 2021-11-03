import request from "./request";

const createFlashcard = (params) => {
  return request("/flashcard", {
    method: "POST",
    data: params,
  });
};

export { createFlashcard };
