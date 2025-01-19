import React from "react";
import NavItem from "../nav-item/nav-item";
import CloseIconSVG from "@/svg-icons/close-icons";

const MobileMenuLayout = ({ handleCloseMenu, navigation, isActive }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 h-screen w-screen dark:bg-primary bg-darkBlue  backdrop-blur-lg z-[9999] p-4"
      // onClick={handleCloseMenu}
    >
      <CloseIconSVG
        className="ml-4 mt-2 w-6 h-6 z-[200]"
        onClick={handleCloseMenu}
      />
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ul>
          {navigation.map((nav, index) => {
            return (
              <NavItem
                key={index}
                nav={nav}
                classes={`w-full block text-lg capitalize ${
                  isActive && index === 0 && "!opacity-100"
                }`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuLayout;
