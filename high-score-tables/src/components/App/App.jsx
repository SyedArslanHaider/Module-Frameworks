import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import "./App.scss";
import { useState } from "react";

const App = () => {
  const [isAscending, setIsAscending] = useState(false);

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };
   return(
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">High Scores</h1>
        <button className="toggle-button" onClick={toggleSortOrder}>
        Sort {isAscending ? "Descending" : "Ascending"}
        </button>
    </header>
    {scores.sort((a,b)=> a.name.localeCompare(b.name))
    .map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores.sort((a, b) => isAscending ? a.s - b.s : b.s - a.s)}  key={index} />
    ))}
  </div>
);
}
export default App;
