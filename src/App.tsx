import DropdownComponent from "./components/Dropdown";
import PopoverComponent from "./components/Popover";
import "./global.css";
import DarkModeToggle from "./utils/DarkModeToggle";

function App() {
  return (
    <main style={{ position: "relative" }}>
      <DarkModeToggle />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <PopoverComponent trigger={"Click Me"}>Some content</PopoverComponent>
        <DropdownComponent />
      </div>
    </main>
  );
}

export default App;
