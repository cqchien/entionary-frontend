import React from "react";
import DialogCreateFlashCard from "../components/DialogCreateFlashCard";

const FlashCard = ({ onCancel }) => {
  const handleCreateFlashCard = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.mode?.value);
  };

  return (
    <DialogCreateFlashCard
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
    />
  );
};

export default FlashCard;
