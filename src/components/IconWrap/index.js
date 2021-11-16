import { makeStyles, Tooltip } from "@material-ui/core";
import React from "react";
import iconWrapStyle from "./style";

const useStyle = makeStyles(iconWrapStyle);

const IconWrap = ({ toolTips, ...otherProps }) => {
  const classes = useStyle();
  return (
    <div className={classes.iconWrap}>
      {toolTips.map((toolTip, index) => (
        <Tooltip
          title={toolTip.title}
          placement="bottom"
          key={index}
          {...otherProps}
        >
          <div className={classes.icon}>{toolTip.icon}</div>
        </Tooltip>
      ))}
    </div>
  );
};

export default IconWrap;
