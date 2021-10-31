import { AddCircleOutlineOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import IconWrap from "../components/IconWrap";
import FlashCard from "../containers/FlashCard";

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

      {isOpenWordPack && <FlashCard onCancel={() => setOpenWordPack(false)} />}
    </div>
  );
};

export default FlashcardPage;
