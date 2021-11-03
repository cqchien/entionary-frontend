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
  mode: yup.string().required("Input Mode"),
});

const FlashCard = ({ onCancel }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCreateFlashCard = async ({ name, mode, topic }) => {
    setLoading(true);

    // upload to firebase
    const { error, data } = await uploadImageToFirebase(image);

    if (error) {
      const errorUploadPayload = {
        message: "Upload image was fail",
        type: "error",
      };
      return dispatch(setMessage(errorUploadPayload));
    }
    const paramsApi = {
      name,
      picture: data,
      topicTitle: topic,
      isPublic: mode === "PUBLIC" ? true : false,
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
    } else {
      dispatch(setMessage(apiResponse));
    }
  };

  return (
    <DialogCreateFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleCreateFlashCard={handleCreateFlashCard}
      loading={loading}
    >
      <FileUpload
        title="Flashcard Picture"
        name="picture"
        loadingOfForm={loading}
        onChangeFile={(image) => setImage(image)}
      />
    </DialogCreateFlashCard>
  );
};

export default FlashCard;
