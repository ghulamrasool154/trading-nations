"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className, ...rest }) => {
  const pathname = usePathname();
  let convertArray = pathname.split("/");
  let lang = convertArray[1];
  let link = convertArray[2];

  let active = `/${link}` === href ? "opacity-100 " : " opacity-60";

  let arrays = ["services", "quantum-resilient", "gics-sectors"];

  // let servicesActive = arrays.includes(link);

  // if (!href) {
  //   return (
  //     <a
  //       className={`${className} ${
  //         servicesActive ? "opacity-100 " : " opacity-60"
  //       }`}
  //       {...rest}
  //     >
  //       {children}
  //     </a>
  //   );
  // }
  return (
    <Link
      href={`/${lang}${href}`}
      className={`${className} ${active} `}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
