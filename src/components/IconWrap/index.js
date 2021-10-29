import { makeStyles, Tooltip } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import React from "react";
import iconWrapStyle from "./style";

const useStyle = makeStyles(iconWrapStyle);

const IconWrap = ({ toolTips }) => {
  const classes = useStyle();
  return (
    <div className={classes.iconWrap}>
      {toolTips.map((toolTip, index) => (
        <Tooltip title={toolTip.title} placement="bottom" key={index}>
          <AddBox className={classes.icon} onClick={toolTip.openToolTip} />
        </Tooltip>
      ))}
    </div>
  );
};

export default IconWrap;
