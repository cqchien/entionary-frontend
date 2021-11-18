import React, { useState } from "react";
import * as yup from "yup";
import FileUpload from "./FileUpload";
import { useDispatch } from "react-redux";
import DialogAddWordFlashCard from "../components/DialogAddWordToFlashcard";
import { searchWord } from "../apis/wordsApi";
import { setMessage } from "../redux/reducers/message.reducer";
import searchOnChange from "../helper/searchOnChange";
import { uploadImageToFirebase } from "../helper/uploadImageToFirebase";
import { useParams } from "react-router";
import { addWordToFlashcard } from "../apis/flashcard";

const validationSchema = yup.object().shape({
  word: yup.string().trim().required("Input Word"),
  type: yup.string().required("Input Word Type"),
  category: yup.string().required("Input Word Category"),
});

const WordDialog = ({ onCancel, isRerender }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [wordQueryResults, updateWordQueryResults] = useState([]);
  const [types, updateTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wordChoice, updateWord] = useState({
    word: "",
    antonyms: [],
    synonyms: [],
    definition: "",
    type: "",
    example: "",
    pronunciation: "",
  });
  let timer = null;

  const querySearchWord = async (word) => {
    if (!word) {
      return;
    }
    setLoading(true);
    try {
      const apiResponse = await searchWord(word);
      const { results, pronunciation } = apiResponse.data;
      updateWord((state) => ({
        ...state,
        word,
        pronunciation,
      }));
      updateWordQueryResults(results);
      let wordType = [];
      results.forEach((word) => {
        const isTypeExist = wordType.some(
          (type) => type.name === `${word.partOfSpeech}`
        );
        if (!isTypeExist) {
          const object = {};
          object.name = word.partOfSpeech;
          wordType.push(object);
        }
      });
      updateTypes(wordType);
    } catch (error) {
      const failPayload = {
        message: "Word not found. Try again.",
        type: "error",
      };
      dispatch(setMessage(failPayload));
    }
    setLoading(false);
  };

  const handleQueryWord = (event) => {
    timer = searchOnChange(
      timer,
      () => querySearchWord(event.target?.value),
      1000
    );
  };

  const handleQueryType = (event) => {
    const type = event.target?.value;
    const categoryOfWords = [];
    wordQueryResults.forEach((word) => {
      if (word.partOfSpeech === type) {
        const object = {};
        object.name = word.typeOf.join(",");
        categoryOfWords.push(object);
      }
    });

    setCategories(categoryOfWords);
  };

  const handleQueryCategory = (event) => {
    const category = event.target?.value;
    const wordWithSpecificCategory = wordQueryResults.filter((word) => {
      const categoryArr = category.split(",");
      return (
        categoryArr.length &&
        word.typeOf.every((value, index) => value === categoryArr[index])
      );
    })[0];

    let { antonyms, definition, partOfSpeech, examples, synonyms } =
      wordWithSpecificCategory;
    const example = examples ? examples[0] : "";
    antonyms = antonyms ? antonyms : [];
    synonyms = synonyms ? synonyms : [];

    updateWord((state) => ({
      ...state,
      antonyms,
      definition,
      type: partOfSpeech,
      example,
      synonyms,
    }));
  };

  const handleAddWord = async () => {
    setLoading(true);
    let picture = "";
    if (image) {
      // upload to firebase
      const { error, data } = await uploadImageToFirebase(image);
      if (error) {
        const errorUploadPayload = {
          message: "Upload image was fail",
          type: "error",
        };
        return dispatch(setMessage(errorUploadPayload));
      }
      picture = data;
    }

    const word = {
      ...wordChoice,
      pronunciation: wordChoice.pronunciation[wordChoice.type],
      picture,
    };

    const apiResponse = await addWordToFlashcard({ id, word });
    const success = apiResponse?.success;

    setLoading(false);

    if (success) {
      const payloadSuccess = {
        message: "Add word to flashcard successfully",
        type: "success",
      };
      dispatch(setMessage(payloadSuccess));

      onCancel();
      isRerender();
    } else {
      dispatch(setMessage(apiResponse));
    }
  };

  return (
    <DialogAddWordFlashCard
      validationSchema={validationSchema}
      onCancel={onCancel}
      handleAddWord={handleAddWord}
      handleQueryWord={handleQueryWord}
      handleQueryType={handleQueryType}
      handleQueryCategory={handleQueryCategory}
      loading={loading}
      types={types}
      categories={categories}
      definition={wordChoice.definition}
    >
      <FileUpload
        title="Word Picture"
        name="picture"
        loadingOfForm={loading}
        onChangeFile={(image) => setImage(image)}
      />
    </DialogAddWordFlashCard>
  );
};

export default WordDialog;
