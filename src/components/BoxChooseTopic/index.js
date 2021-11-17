import { makeStyles } from "@material-ui/core";
import React from "react";
import boxChooseTopicStyle from "./style";
import logoUrl from "../../assets/images/logo-entionary.png";

const useStyle = makeStyles(boxChooseTopicStyle);

const BoxChooseTopic = ({ loading }) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.title}>
        <h1>Choose topic </h1>
      </div>
      <div className={classes.topics}>
        <div className={classes.topicItem} onClick={() => console.log("topic")}>
          <img src={logoUrl} className={classes.topicImg} alt={"topic"} />
          <h3 className={classes.topicTitle}>topic Title</h3>
        </div>
        <div className={classes.topicItem} onClick={() => console.log("topic")}>
          <img src={logoUrl} className={classes.topicImg} alt={"topic"} />
          <h3 className={classes.topicTitle}>topic Title</h3>
        </div>
        <div className={classes.topicItem} onClick={() => console.log("topic")}>
          <img src={logoUrl} className={classes.topicImg} alt={"topic"} />
          <h3 className={classes.topicTitle}>topic Title</h3>
        </div>
      </div>
    </div>
  );
};

export default BoxChooseTopic;
