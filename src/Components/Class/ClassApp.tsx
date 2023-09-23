import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    return (
      <>
        <h2 style={{ color: "red" }}>
          can we make exception for me not doing classes as im not too
          interested in learning these for a job. i only want to learn
          functional components + TS
        </h2>
        {/* <>
          <ClassScoreBoard />
          <ClassGameBoard />
        </>
        {false && <ClassFinalScore />} */}
      </>
    );
  }
}
