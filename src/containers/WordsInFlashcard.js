import { useParams } from "react-router";
import WordsSlide from "../components/WordsSlide";

const WordsInFlashcard = () => {
  const { id } = useParams();
  console.log(id);
  const words = [
    {
      _id: "213",
      word: "House",
      mean: "Nha",
      type: "Noun",
      phonetic: "asd",
      example: "das",
      picture: " ",
    },
  ];
  return <WordsSlide words={words} />;
};

export default WordsInFlashcard;
