import HighScoreTable from "@/components/HighScoreTable/HighScoreTable.jsx";
import scores from "@/data/scores.json";
import "./App.scss";

const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">High Scores</h1>
    </header>
    {scores.sort((a,b)=> a.name.localeCompare(b.name))
    .map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores.sort((a,b)=> b.s - a.s)} key={index} />
    ))}
  </div>
);

export default App;
