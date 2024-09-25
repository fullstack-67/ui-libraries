import { useLocalStorage, useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useMemo } from "react";

export function useColorScheme() {
  const isSystemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [colorScheme, setColorScheme] = useLocalStorage<
    "light" | "dark" | null
  >("colorScheme", null);

  const isDark = useMemo(() => {
    if (colorScheme === null) {
      return isSystemPrefersDark;
    } else {
      return colorScheme === "dark";
    }
  }, [colorScheme, isSystemPrefersDark]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const setIsDark = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");
  };

  return { isDark, setIsDark };
}
