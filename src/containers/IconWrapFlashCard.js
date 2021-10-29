import React, { useState } from "react";
import IconWrap from "../components/IconWrap";

const IconWrapFlashCard = () => {
  const [openWordPack, setOpenWordPack] = useState(false);
  const toolTips = [
    {
      title: "Create FlashCard",
      openToolTip: () => setOpenWordPack(true),
    },
  ];

  return <IconWrap toolTips={toolTips} />;
};

export default IconWrapFlashCard;
