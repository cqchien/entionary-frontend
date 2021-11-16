import { makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import iconWrapStyle from "./style";

const useStyle = makeStyles(iconWrapStyle);

const IconWrap = ({ toolTips, className }) => {
  const classes = useStyle();

  return (
    <div className={`${classes.iconWrap} ${className}`}>
      {toolTips.map((toolTip, index) => (
        <Tooltip title={toolTip.title} placement="bottom" key={index}>
          <div className={classes.icon}>{toolTip.icon}</div>
        </Tooltip>
      ))}
    </div>
  );
};

export default IconWrap;
