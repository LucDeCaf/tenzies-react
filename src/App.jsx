import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
import Reroll from "./components/Reroll";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const diceElements = dice.map((dice) => (
    <Dice key={nanoid()} value={dice.value} isHeld={dice.isHeld} />
  ));

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <Reroll handleClick={rollDice} />
    </main>
  );
}

export default App;
