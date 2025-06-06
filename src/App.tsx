import Filter from "./components/Filter.tsx";
import Background from "./components/Background.tsx";
import "./App.css";

function App() {
  return (
    <div className="filtration-system">
      <Background />
      <div>
        <Filter />
      </div>
    </div>
  );
}

export default App;
