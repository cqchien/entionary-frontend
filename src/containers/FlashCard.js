import React, { useState } from "react";
import DialogCreateFlashCard from "../components/DialogCreateFlashCard";
import * as yup from "yup";
import FileUpload from "./FileUpload";
import { uploadImageToFirebase } from "../helper/uploadImageToFirebase";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/reducers/message.reducer";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Input Flashcard Name"),
  topic: yup.string().required("Input Topic"),
  mode: yup.string().required("Input Mode"),
});

const FlashCard = ({ onCancel }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleCreateFlashCard = async ({ name, mode, topic }) => {
    // upload to firebase
    const { error, data } = await uploadImageToFirebase(image);

    if (error) {
      const errorUploadPayload = {
        message: "Upload image was fail",
        type: "error",
      };
      return dispatch(setMessage(errorUploadPayload));
    }

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
        onChangeFile={(image) => setImage(image)}
      />
    </DialogCreateFlashCard>
  );
};

export default FlashCard;
