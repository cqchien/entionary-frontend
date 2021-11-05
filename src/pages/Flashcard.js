import { AddCircleOutlineOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import IconWrap from "../components/IconWrap";
import FlashCardDialog from "../containers/FlashCardDialog";
import Flashcards from "../containers/Flashcards";

const FlashcardPage = () => {
  const [isOpenWordPack, setOpenWordPack] = useState(false);

  const toolTips = [
    {
      title: "Create FlashCard",
      icon: <AddCircleOutlineOutlined onClick={() => setOpenWordPack(true)} />,
    },
  ];

  return (
    <div className="container my-10">
      <div className="flex-center-between">
        <h1 className="entionary-title">Flashcards</h1>
        <IconWrap toolTips={toolTips} />
      </div>
      <div className="entionary-break" />

      <Flashcards />

      {/* Dialog to create new flashcard */}
      {isOpenWordPack && (
        <FlashCardDialog onCancel={() => setOpenWordPack(false)} />
      )}
    </div>
  );
};

export default FlashcardPage;
