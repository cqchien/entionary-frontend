import React from "react";
import FlashcardsGallery from "../components/FlashcardsGallery";
import houseImg from "../assets/images/house-flashcard.jpg";

const Flashcards = () => {
  const flashcardArr = [
    {
      name: "House",
      picture: houseImg,
      topic: "TOEIC",
      mode: "PUBLIC",
    },
    {
      name: "House",
      picture: houseImg,
      topic: "TOEIC",
      mode: "PUBLIC",
    },
    {
      name: "House",
      picture: houseImg,
      topic: "TOEIC",
      mode: "PUBLIC",
    },
  ];

  return <FlashcardsGallery flashcardArr={flashcardArr} />;
};

export default Flashcards;
