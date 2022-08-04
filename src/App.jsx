import { useEffect, useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const diceElements = dice.map((dice) => {
    return (
      <Dice
        key={dice.id}
        value={dice.value}
        isHeld={dice.isHeld}
        handleClick={() => hold(dice.id)}
      />
    );
  });

  useEffect(() => {
    const firstDice = dice[0].value;
    if (
      dice.every(
        (currentDice) => currentDice.value === firstDice && currentDice.isHeld
      )
    ) {
      setTenzies(true);
    } else {
      setTenzies(false);
    }
  }, [dice]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((dice) => (dice.isHeld ? dice : generateNewDice()))
    );
  }

  function playAgain() {
    setDice(allNewDice())
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((dice) => {
        if (dice.id === id) {
          return {
            ...dice,
            isHeld: !dice.isHeld,
          };
        }
        return dice;
      })
    );
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="reroll-button" onClick={tenzies ? playAgain : rollDice}>
        {tenzies ? "Play Again" : "Roll"}
      </button>
    </main>
  );
}

export default App;
