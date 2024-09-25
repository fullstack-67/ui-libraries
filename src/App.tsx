// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import {
  MantineColorsTuple,
  MantineProvider,
  createTheme,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";

import Home from "./Home";

const myColor: MantineColorsTuple = [
  "#f6eeff",
  "#e7daf7",
  "#cab1ea",
  "#ad86dd",
  "#9562d2",
  "#854bcb",
  "#7d3ec9",
  "#6b31b2",
  "#5f2aa0",
  "#52228d",
];

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
    // or replace default theme color
    // blue: myColor,
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
