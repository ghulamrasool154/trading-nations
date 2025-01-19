import NavLink from "@/components/nav-link/nav-link";
import React from "react";

const NavItem = ({ nav, classes }) => {
  return (
    <li className="group/children relative">
      {/* {nav.name === "Services" ? (
        <NavLink className={classes}>{nav.name}</NavLink>
      ) : ( */}
      <NavLink href={nav.link} className={classes}>
        {nav.name}
      </NavLink>
      {/* )} */}

      {nav.children && (
        <ul className="group-hover/children:block block lg:hidden relative lg:absolute backdrop-blur-sm  w-max left-4 lg:left-0 lg:top-7 z-10  lg:shadow-xl lg:border border-white/20 bg-darkBlue dark:bg-primary lg:text-white/70 lg:p-2.5 lg:my-0 my-2.5 mx-0">
          {/* <li>
            <NavLink href={nav.link} className={classes}>
              {nav.name}
            </NavLink>
          </li> */}
          {nav.children.map((child, index) => {
            return (
              <li key={index}>
                <NavLink href={child.link} className={classes + "block"}>
                  {child.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
