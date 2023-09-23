import { Fish } from "./FunctionalApp";
import "./styles/score-board.css";
//  Where the score is presented

type ScoreBoardProps = {
  availableFish: Fish[];
  incorrectCount: number;
  correctCount: number;
};

export function FunctionalScoreBoard({
  availableFish,
  incorrectCount,
  correctCount,
}: ScoreBoardProps) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {availableFish.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
