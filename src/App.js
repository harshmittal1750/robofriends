import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";
import { robots } from "./components/robots";

function App() {
  return (
    <div className="flex">
      <CardList robots={robots} />
    </div>
  );
}

export default App;
