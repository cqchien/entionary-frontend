import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import iconWrapStyle from "./style";

const useStyle = makeStyles(iconWrapStyle);

const IconWrap = ({ toolTips, className }) => {
  const classes = useStyle();

  return (
    <div className={`${classes.iconWrap} ${className}`}>
      {toolTips.map((toolTip, index) => (
        <Tooltip title={toolTip.title} key={index}>
          <IconButton className={classes.icon}>{toolTip.icon} </IconButton>
        </Tooltip>
      ))}
    </div>
  );
};

export default IconWrap;
