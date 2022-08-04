import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
import Reroll from "./components/Reroll";

function App() {
  const [diceValues, setDiceValues] = useState(allNewDice());
  const diceElements = diceValues.map(value => <Dice className="dice" value={value} />);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDiceValues(allNewDice());
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <Reroll handleClick={rollDice} />
    </main>
  );
}

export default App;
