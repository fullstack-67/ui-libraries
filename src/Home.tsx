import Showcase1 from "./components/Showcase1";
import ShowCase2 from "./components/Showcase2";
import DarkModeToggle from "./utils/DarkModeToggle";

function Home() {
  return (
    <main style={{ position: "relative" }}>
      <DarkModeToggle />
      <Showcase1 />
      <ShowCase2 />
    </main>
  );
}

export default Home;
