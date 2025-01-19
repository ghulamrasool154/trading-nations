"use client";
import { useTheme } from "next-themes";

const useSwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handelLightDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { theme: resolvedTheme, handelLightDarkMode };
};

export default useSwitchTheme;
