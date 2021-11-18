import { makeStyles } from "@material-ui/core";
import React from "react";
import boxChooseTopicStyle from "./style";
import Loading from "../Custom/Loading";

const useStyle = makeStyles(boxChooseTopicStyle);

const BoxChooseTopic = ({ loading, topics, playGameWithTopic }) => {
  const classes = useStyle();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-10">
          <div className={classes.title}>
            <h1>Choose topic </h1>
          </div>
          <div className={classes.topics}>
            {topics?.map((topic, index) => {
              return (
                <div
                  key={index}
                  className={classes.topicItem}
                  onClick={() => playGameWithTopic(topic._id)}
                >
                  <img
                    src={topic.icon}
                    className={classes.topicImg}
                    alt={"topic icon"}
                  />
                  <h3 className={classes.topicTitle}>{topic.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default BoxChooseTopic;
