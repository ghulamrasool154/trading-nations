import useSwitchTheme from "@/hooks/use-switch-theme";
import SunSVG from "@/svg-icons/light-icons";
import MoonSVG from "@/svg-icons/moon";
import { useTheme } from "next-themes";
import React from "react";

const ThemeMode = () => {
  const { theme, handelLightDarkMode } = useSwitchTheme();
  return (
    <button
      className=" bg-primary w-10 h-10 mx-2.5 stroke-transparent fill-white "
      onClick={handelLightDarkMode}
    >
      {theme === "dark" ? (
        <MoonSVG className="w-6 mx-auto" />
      ) : (
        <SunSVG className="w-6 mx-auto" />
      )}
    </button>
  );
};

export default ThemeMode;
