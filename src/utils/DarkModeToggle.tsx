import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useColorScheme } from "./useColorScheme";

function DarkModeToggle() {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <>
      <DarkModeSwitch
        style={{ position: "absolute", top: 0, right: 0 }}
        checked={isDark}
        onChange={setIsDark}
        size={30}
      />
    </>
  );
}

export default DarkModeToggle;
