import { AddCircleOutlineOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import IconWrap from "../components/IconWrap";
import FlashCardDialog from "../containers/FlashCardDialog";
import Flashcards from "../containers/Flashcards";

const FlashcardPage = () => {
  const [isOpenWordPack, setOpenWordPack] = useState(false);
  const [isRerender, setRerender] = useState(false);
  const toolTips = [
    {
      title: "Create FlashCard",
      icon: <AddCircleOutlineOutlined onClick={() => setOpenWordPack(true)} />,
    },
  ];

  return (
    <div className="container my-5">
      <div className="flex-center-between">
        <h1 className="entionary-title">Flashcards</h1>
        <IconWrap toolTips={toolTips} />
      </div>
      <div className="entionary-break" />

      <Flashcards isRerender={isRerender} />

      {/* Dialog to create new flashcard */}
      {isOpenWordPack && (
        <FlashCardDialog
          onCancel={() => setOpenWordPack(false)}
          isRerender={() => setRerender(true)}
        />
      )}
    </div>
  );
};

export default FlashcardPage;
