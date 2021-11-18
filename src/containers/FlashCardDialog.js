import React, { useState } from "react";
import DialogCreateFlashCard from "../components/DialogCreateFlashCard";
import * as yup from "yup";
import FileUpload from "./FileUpload";
import { uploadImageToFirebase } from "../helper/uploadImageToFirebase";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/reducers/message.reducer";
import { createFlashcard } from "../apis/flashcard";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Input Flashcard Name"),
  topic: yup.string().required("Input Topic"),
});

const FlashCardDialog = ({ onCancel, isRerender }) => {
  const [picture, setPicture] = useState("");
  const [topicIcon, setIcon] = useState("");
  const [isPublic, updateMode] = useState(true);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCreateFlashCard = async ({ name, topic }) => {
    setLoading(true);
    let flashcardPicture = "";
    let icon = "";
    if (picture) {
      // upload to firebase
      const { error, data } = await uploadImageToFirebase(picture);
      if (error) {
        const errorUploadPayload = {
          message: "Upload image was fail",
          type: "error",
        };
        return dispatch(setMessage(errorUploadPayload));
      }
      flashcardPicture = data;
    }

    if (topicIcon) {
      // upload to firebase
      const { error, data } = await uploadImageToFirebase(topicIcon);
      if (error) {
        const errorUploadPayload = {
          message: "Upload image was fail",
          type: "error",
        };
        return dispatch(setMessage(errorUploadPayload));
      }
      icon = data;
    }

    const paramsApi = {
      name,
      picture: flashcardPicture,
      topicTitle: topic.toLowerCase(),
      topicIcon: icon,
      isPublic,
    };

    const apiResponse = await createFlashcard(paramsApi);

    const success = apiResponse?.success;

    setLoading(false);

    if (success) {
      const payloadSuccess = {
        message: "Create flashcard successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));

      onCancel();
      isRerender();
    } else {
      dispatch(setMessage(apiResponse));
    }
  };

  const handleChangeMode = (event) => {
    updateMode(event.target?.checked);
  };

  return (
    <DialogCreateFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
      loading={loading}
      isPublic={isPublic}
      handleChangeMode={handleChangeMode}
    >
      <FileUpload
        title="Flashcard Picture*"
        id="flashcard-picture"
        loadingOfForm={loading}
        onChangeFile={(picture) => setPicture(picture)}
      />
      <FileUpload
        title="Topic Icon*"
        id="topic-icon"
        loadingOfForm={loading}
        onChangeFile={(icon) => setIcon(icon)}
      />
    </DialogCreateFlashCard>
  );
};

export default FlashCardDialog;
