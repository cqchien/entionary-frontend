import React, { useState } from "react";
import * as yup from "yup";
import FileUpload from "./FileUpload";
import { useDispatch } from "react-redux";
import DialogAddWordFlashCard from "../components/DialogAddWordToFlashcard";
import { searchWord } from "../apis/wordsApi";
import { setMessage } from "../redux/reducers/message.reducer";
import searchOnChange from "../helper/searchOnChange";
import { uploadImageToFirebase } from "../helper/uploadImageToFirebase";

const validationSchema = yup.object().shape({
  // name: yup.string().trim().required("Input Flashcard Name"),
  // topic: yup.string().required("Input Topic"),
  // mode: yup.string().required("Input Mode"),
});

const WordDialog = ({ onCancel, isRerender }) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [wordQueryResults, updateWordQueryResults] = useState([]);
  const [types, updateTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [definition, updateDefinition] = useState([]);
  const [wordChoice, updateWord] = useState({
    word: "",
    pronunciation: "",
    antonyms: [],
    synonyms: [],
    definition: "",
    partOfSpeech: "",
    examples: [],
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
        pronunciation: pronunciation.all,
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
    });
    const { antonyms, definition, partOfSpeech, examples, synonyms } =
      wordWithSpecificCategory[0];

    updateWord((state) => ({
      ...state,
      antonyms,
      definition,
      partOfSpeech,
      examples,
      synonyms,
    }));
    updateDefinition(wordWithSpecificCategory[0].definition);
  };

  const handleAddWord = async () => {
    // upload to firebase
    const { error, data } = await uploadImageToFirebase(image);
    if (error) {
      const errorUploadPayload = {
        message: "Upload image was fail",
        type: "error",
      };
      return dispatch(setMessage(errorUploadPayload));
    }
    console.log(wordChoice);
    // setLoading(true);
    // const apiResponse = await searchWord("house");
    // console.log(apiResponse);
    // setLoading(false);

    // if (apiResponse === 200) {
    //   const wordsResult = apiResponse.data;
    //   const pronunciation = wordsResult.pronunciation;
    // } else {
    //   const failPayload = {
    //     message: "Server has problem. Try again.",
    //     type: "error",
    //   };
    //   dispatch(setMessage(failPayload));
    // }
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
      definition={definition}
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
