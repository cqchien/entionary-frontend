import React from "react";
import WordPackDialog from "../components/WordPack";

const WordPack = ({ onCancel }) => {
  const handleCreateFlashCard = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.type);
  };

  return (
    <WordPackDialog
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
    />
  );
};

export default WordPack;
