import { makeStyles } from "@material-ui/core";
import React from "react";
import ResultGame from "./ResultGame";
import gameStyle from "./style";
import TimeBar from "./TimeBar";
import TitleGame from "./TitleGame";
import Loading from "../Custom/Loading";

const useStyle = makeStyles(gameStyle);

const GameContent = ({
  question,
  loading,
  onBack,
  statusPlayer,
  handleAnswer,
  isFinish,
}) => {
  const classes = useStyle();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className={classes.root}>
            <div className="d-flex flex-dir-col h-100">
              {/* Title */}
              <TitleGame
                wordQuestion={question.wordQuestion}
                numberQuestions={question.numberQuestions}
                statusPlayer={statusPlayer}
              />

              {/* Time bar */}
              <TimeBar />

              {/* Answer List */}
              <div className={`flex-grow-1 ${classes.answerList}`}>
                {question.answerList.map((answerWord, index) => {
                  return (
                    <div
                      key={answerWord._id}
                      className={classes.answerItem}
                      onClick={() => handleAnswer(answerWord)}
                    >
                      <img src={answerWord?.picture} alt={"answer "} />
                    </div>
                  );
                })}
              </div>

              {/* Result */}
              {isFinish && (
                <ResultGame
                  statusPlayer={statusPlayer}
                  onBack={onBack}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameContent;
