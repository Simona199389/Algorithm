import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { page: "home", label: "Начало" },
  { page: "about", label: "За нас" },
  { page: "products", label: "Продукти" },
  { page: "portfolio", label: "Портфолио" },
  { page: "contacts", label: "Контакти" },
];

export default function Navbar() {
  const [activePage, setActivePage] = useState("contacts");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "none";
    };
  }, [isOpen]);

  return (
    <nav
      className="h-20 xl:h-32 2xl:h-44 w-full pl-[8%] pr-[8%] pt-[0.8%] flex z-10 sticky top-0 items-center justify-between font-sans bg-customGrey"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="2xl:w-[13.3%] lg:w-[11%] text-white w-[25%]">
        <img src="/algorithm.jpg" alt="Algorithm Logo" />
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
        <div className="flex w-[57.4%] pt-[0.4%] justify-between text-xl">
          {navItems.map((item) => (
            <NavItem
              key={item.page}
              page={item.page}
              activePage={activePage}
              onClick={setActivePage}
            >
              {item.label}
            </NavItem>
          ))}
        </div>
      </div>

      <div className="flex lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <FaBars size={30} style={{ color: "#000000" }} />
        </button>
      </div>

      <div
        className={`absolute h-[100vh] w-[100%] top-[10%] right-0 bg-customGrey gap-y-5 flex flex-col justify-center items-center text-white z-10 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button className="absolute top-[3%] right-[5%]" onClick={toggleMenu}>
          <FaTimes size={30} style={{ color: "#000000" }} />
        </button>
        {navItems.map((item) => (
          <NavItem
            key={item.page}
            page={item.page}
            activePage={activePage}
            onClick={() => {
              setActivePage(item.page);
              toggleMenu();
            }}
            className="my-5 text-2xl"
          >
            {item.label}
          </NavItem>
        ))}
      </div>
    </nav>
  );
}
