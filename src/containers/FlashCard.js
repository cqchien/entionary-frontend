import React, { useState } from "react";
import DialogCreateFlashCard from "../components/DialogCreateFlashCard";
import * as yup from "yup";
import FileUpload from "./FileUpload";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Input Flashcard Name"),
  topic: yup.string().required("Input Topic"),
  mode: yup.string().required("Input Mode"),
});

const FlashCard = ({ onCancel }) => {
  const [picture, setPicture] = useState("");

  const handleCreateFlashCard = ({ name, mode, topic }) => {
    console.log(picture);
  };

  return (
    <DialogCreateFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
    >
      <FileUpload
        title="Flashcard Picture"
        name="picture"
        onChangeFile={(file) => setPicture(file)}
      />
    </DialogCreateFlashCard>
  );
};

export default FlashCard;
