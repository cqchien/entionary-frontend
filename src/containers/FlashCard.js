import React from "react";
import DialogCreateFlashCard from "../components/DialogCreateFlashCard";
import * as yup from "yup";
import FileUpload from "./FileUpload";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Input Flashcard Name"),
  topic: yup.string().required("Input Topic"),
  mode: yup.string().required("Input Mode"),
});

const FlashCard = ({ onCancel }) => {
  const handleCreateFlashCard = ({ name, mode, topic, picture = "" }) => {
    console.log({ name, mode, topic, picture });
  };

  return (
    <DialogCreateFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
    >
      <FileUpload title="Flashcard Picture" name="picture" />
    </DialogCreateFlashCard>
  );
};

export default FlashCard;
