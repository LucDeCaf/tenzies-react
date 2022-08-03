import "./App.css";
import Dice from "./components/Dice.js";

function App() {
  return (
    <main>
      <div className="dice-container">
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
        <Dice className="dice" value={Math.ceil(Math.random() * 6)} />
      </div>
    </main>
  );
}

export default App;
