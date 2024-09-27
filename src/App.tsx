import styled from "styled-components";

import "./global.css";
import DarkModeToggle from "./utils/DarkModeToggle";

function App() {
  const Title = styled.h1`
    color: var(--text);
  `;

  const Card = styled.div`
    height: 20vh;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: var(--primary);
    color: var(--text);
  `;

  return (
    <main style={{ position: "relative" }}>
      <DarkModeToggle />
      <Title>Styled Component</Title>
      <Card>
        <i>Hello World!</i>
      </Card>
    </main>
  );
}

export default App;
