import React, { useState } from "react";
import * as yup from "yup";
import FileUpload from "./FileUpload";
import { useDispatch } from "react-redux";
import DialogAddWordFlashCard from "../components/DialogAddWordToFlashcard";
import { searchWord } from "../apis/wordsApi";
import { setMessage } from "../redux/reducers/message.reducer";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Input Flashcard Name"),
  topic: yup.string().required("Input Topic"),
  mode: yup.string().required("Input Mode"),
});

const WordDialog = ({ onCancel, isRerender }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCreateFlashCard = async ({ name, mode, topic }) => {
    const apiResponse = await searchWord("house");
    if(apiResponse === 200){
      const wordsResult = apiResponse.data;
      const pronunciation = wordsResult.pronunciation;
    }
    else{
      const failPayload = {
        message: "Server has problem. Try again.",
        type: "error"
      }
      dispatch(setMessage(failPayload))
    }
  };

  return (
    <DialogAddWordFlashCard
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
    </DialogAddWordFlashCard>
  );
};

export default WordDialog;
