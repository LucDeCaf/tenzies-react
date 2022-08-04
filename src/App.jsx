import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

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

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  );
}

export default App;
