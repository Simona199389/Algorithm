import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-fit md:h-16 bg-black text-white flex flex-col lg:flex-row items-center justify-between px-4 py-1 md:py-0 md:px-12 space-y-1">
      <p className="text-xs md:text-base">© Всички права запазени 2004-2018</p>
      <p className="text-xs md:text-base">
        Design and development by{" "}
        <span className="text-green-500">for the people creative studio</span>
      </p>
    </footer>
  );
}
