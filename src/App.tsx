import DarkModeToggle from "./utils/DarkModeToggle";
import "./global.css";
import styles1 from "./styles1.module.css";
import styles2 from "./styles2.module.css";
function App() {
  return (
    <main style={{ position: "relative" }}>
      <DarkModeToggle />
      <h1>Pure CSS</h1>

      <article style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div className="card">
          <i className="header">global</i>
        </div>
        <div className={`card ${styles1.card}`}>
          <i className="header">style1</i>
        </div>
        <div className={`card ${styles2.card}`}>
          <i className="header">style2</i>
        </div>
      </article>
    </main>
  );
}

export default App;
