import NavLink from "@/components/nav-link/nav-link";
import useSwitchTheme from "@/hooks/use-switch-theme";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const HeaderImgs = () => {
  const { theme } = useSwitchTheme();
  return (
    <NavLink className="logo cursor-pointer  !opacity-100" href={"/"}>
      {theme === "light" ? (
        <Image
          src="/assets/logos/trading_nations_green.png"
          width={100}
          height={100}
          alt="quantomo"
          className="h-12 w-auto mw-7:h-8 mw-5:h-6 "
        />
      ) : (
        <Image
          src="/assets/logos/trading_nations_white.png"
          width={100}
          height={100}
          alt="quantomo"
          className="h-12 w-auto mw-7:h-8 mw-5:h-6 "
        />
      )}
    </NavLink>
  );
};

export default HeaderImgs;
