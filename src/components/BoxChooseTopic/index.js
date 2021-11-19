import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import boxChooseTopicStyle from "./style";
import Loading from "../Custom/Loading";

const useStyle = makeStyles(boxChooseTopicStyle);

const BoxChooseTopic = ({
  loading,
  topics,
  playGameWithTopic,
  bestResultTopics,
}) => {
  const classes = useStyle();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-10 container my-10">
          <div className={classes.title}>
            <h1>Choose topic </h1>
          </div>
          <Grid container spacing={4}>
            {topics?.map((topic, index) => {
              let result = bestResultTopics.find(
                (result) => result.topic === topic.title
              );
              result = result ? result : { score: 0 };

              return (
                <Grid item xs={12} md={3} key={index}>
                  <div
                    key={index}
                    className={classes.topicItem}
                    onClick={() => playGameWithTopic(topic.title)}
                  >
                    <img
                      src={topic.icon}
                      className={classes.topicImg}
                      alt={"topic icon"}
                    />
                    <h3 className={classes.topicTitle}>{topic.title}</h3>
                    <p className={classes.score}>Best Score: {result.score}</p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </>
  );
};

export default BoxChooseTopic;
