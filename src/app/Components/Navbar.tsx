"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { github } from "../Utils/Icons";
import { ThemeDropdown } from "../ThemeDropdown/ThemeDropdown";
import { SearchDialog } from "./SearchDialog/SearchDialog";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full py-4 flex items-center justify-between ">
      Navbar
      <div className="left">left</div>
      <div className="search-cotainer flex gap-2 w-full sm:w-fit shrink-0 items-center">
        <SearchDialog />
        <ThemeDropdown />
        <Button
          className="gap-2"
          onClick={() => router.push("https://app.com")}
        >
          {github} Souce Code
        </Button>
      </div>
    </div>
  );
};
