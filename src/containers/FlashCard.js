import React from "react";
import DialogCreateFlashCard from "../components/DialogCreateFlashCard";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Input Flashcard Name"),
  topic: yup.string().required("Input Topic"),
  mode: yup.string().required("Input Mode"),
});

const FlashCard = ({ onCancel }) => {
  const handleCreateFlashCard = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.mode?.value);
  };

  return (
    <DialogCreateFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
    />
  );
};

export default FlashCard;
