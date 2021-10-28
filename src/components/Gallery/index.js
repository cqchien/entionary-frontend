import { makeStyles } from "@material-ui/core";
import React from "react";
import GalleryItem from "../GalleryItem";
import galleryStyle from "./style";

const useStyle = makeStyles(galleryStyle);

const listWord = [
  {
    mean: "Mean1",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean2",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean3",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean4",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean5",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean6",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean8",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean9",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
  {
    mean: "Mean10",
    phonetic: "phonetic",
    word: "word",
    type: "n",
    picture: "",
  },
];

const groupWord = (listWord, numberWordInGroup) => {
  let groups = [];
  const numberOfGroupWord =
    listWord.length % numberWordInGroup === 0
      ? listWord.length / numberWordInGroup
      : listWord.length / numberWordInGroup + 1;

  for (let i = 0; i < numberOfGroupWord; i++) {
    groups.push(
      listWord.slice(numberWordInGroup * i, numberWordInGroup * (i + 1))
    );
  }
  return groups;
};

const GalleryList = () => {
  const classes = useStyle();
  const groups = groupWord(listWord, 7);
  return (
    <>
      {groups.map((groupWord, indexGroup) => (
        <div className={`${classes.root} entionary-container`} key={indexGroup}>
          {groupWord.map((word, index) => (
            <GalleryItem key={index} {...word} />
          ))}
        </div>
      ))}
    </>
  );
};

export default GalleryList;
