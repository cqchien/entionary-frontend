import { AddCircleOutlineOutlined } from "@material-ui/icons";
import React from "react";
import IconWrap from "../components/IconWrap";
import FlashcardDetail from "../containers/FlashcardDetail";

const toolTips = [
  {
    title: "Create FlashCard",
    icon: <AddCircleOutlineOutlined />,
  },
];

const FlashcardDetailPage = () => {
  return (
    <div className="container my-10">
      <div className="flex-center-between">
        <h1 className="entionary-title">Flashcard</h1>
        <IconWrap toolTips={toolTips} />
      </div>
      <div className="entionary-break" />

      <FlashcardDetail />
    </div>
  );
};

export default FlashcardDetailPage;
