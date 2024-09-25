import { useEffect, useMemo } from "react";
import { useMediaQuery, useLocalStorage } from "@uidotdev/usehooks";

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
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  const setIsDark = (value: boolean) => {
    setColorScheme(value ? "dark" : "light");
  };

  return { isDark, setIsDark };
}
