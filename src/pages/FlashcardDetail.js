import { AddCircleOutlineOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import IconWrap from "../components/IconWrap";
import FlashcardDetail from "../containers/FlashcardDetail";
import WordDialog from "../containers/WordDialog";

const FlashcardDetailPage = () => {
  const [isOpenWordPack, setOpenWordPack] = useState(false);
  const [isRerender, setRerender] = useState(false);
  const toolTips = [
    {
      title: "Add New Word",
      icon: <AddCircleOutlineOutlined onClick={() => setOpenWordPack(true)} />,
    },
  ];

  return (
    <div className="container my-10">
      <div className="flex-center-between">
        <h1 className="entionary-title">Flashcard</h1>
        <IconWrap toolTips={toolTips} />
      </div>
      <div className="entionary-break" />

      <FlashcardDetail />

      {isOpenWordPack && (
        <WordDialog
          onCancel={() => setOpenWordPack(false)}
          isRerender={() => setRerender(true)}
        />
      )}
    </div>
  );
};

export default FlashcardDetailPage;
