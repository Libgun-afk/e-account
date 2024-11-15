import React from "react";

import { NavigationMenuDemo } from "./Navbar";
import { ModeToggle } from "../Theme";

const Header = () => {
  return (
    <div className="bg-background shadow-sm sticky top-0 z-50">
      <div className="flex justify-between px-96 h-[100px] shadow-md">
        <div className="flex justify-center items-center gap-4">
          <img
            className="w-10 h-10 border-solid"
            src="/462651423_958440929663428_2773437083292674326_n.png"
            alt="CompanyLogo"
          />
          <h1 className="font-bold text-4xl text-[#06838a]">E-Account</h1>
        </div>

        <NavigationMenuDemo />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
