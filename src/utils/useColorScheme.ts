import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";

export function useColorScheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const isDark = computedColorScheme === "dark";
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  return { isDark, toggleColorScheme };
}
