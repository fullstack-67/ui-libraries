import { Charts } from "./Dashboard";
import "./global.css";
import DarkModeToggle from "./utils/DarkModeToggle";

function App() {
  return (
    <main style={{ position: "relative" }}>
      <DarkModeToggle />
      <Charts />
    </main>
  );
}

export default App;
