import { Fish } from "./FunctionalApp";
import "./styles/game-board.css";

type GameBoardProps = {
  nextFishToName: Fish;
  setUserInput: (value: string) => void;
  userInput: string;
  handleAnswer: () => void;
  removeFish: () => void;
};

export function FunctionalGameBoard({
  handleAnswer,
  nextFishToName,
  setUserInput,
  userInput,
  removeFish,
}: GameBoardProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer();
    removeFish();
    setUserInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form onSubmit={handleSubmit} id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          name="fish-guess"
          id="fish-guess"
          placeholder="Enter your guess here"
          aria-label="Fish guess input"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
