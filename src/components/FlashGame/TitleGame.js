import { makeStyles } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import React from "react";
import IconWrap from "../IconWrap";
import SpeakerIcon from "../Speaker";
import gameStyle from "./style";

const useStyle = makeStyles(gameStyle);

const TitleGame = () => {
  const classes = useStyle();

  return (
    <div className={classes.title}>
      <p className={`${classes.nTotal} flex-center`}>
        Question&nbsp;<span>1</span>&nbsp;/&nbsp;
        <span>6</span>
        <span>{` - Score: 15`}</span>
        <IconWrap
          className="ml-5 cur-pointer"
          title={`Chọn hình ảnh đúng với nghĩa của từ. Chọn sai -5đ, đúng +6đ. Điểm sẽ được cộng thêm với thời gian còn lại của bạn.`}
        >
          <Info />
        </IconWrap>
      </p>
      <h1 className="flex-center">
        <span className="mr-8">text</span> <SpeakerIcon text="text" />
      </h1>
    </div>
  );
};

export default TitleGame;
