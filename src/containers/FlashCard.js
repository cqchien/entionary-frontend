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

  const handleFile = (file) => {
    setPicture(file.name);
    console.log("file", file);
  };

  const handleCreateFlashCard = ({ name, mode, topic }) => {
    console.log(picture);
  };

  return (
    <DialogCreateFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
    >
      <FileUpload title="Flashcard Picture" handleFile={handleFile} />
    </DialogCreateFlashCard>
  );
};

export default FlashCard;
