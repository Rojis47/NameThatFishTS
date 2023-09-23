import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export type Fish = { name: string; url: string };

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [userInput, setUserInput] = useState("");
  const [availableFishes, setAvailableFish] = useState(initialFishes);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const nextFishToName = availableFishes[0];

  const removeFish = () => {
    setAvailableFish((prevFish) =>
      prevFish.filter((fish) => fish.name !== nextFishToName.name)
    );
  };

  const handleAnswer = () => {
    userInput === nextFishToName.name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);
  };

  return (
    <>
      {availableFishes.length ? (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            availableFish={availableFishes}
          />
          <FunctionalGameBoard
            handleAnswer={handleAnswer}
            nextFishToName={nextFishToName}
            setUserInput={setUserInput}
            userInput={userInput}
            removeFish={removeFish}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
