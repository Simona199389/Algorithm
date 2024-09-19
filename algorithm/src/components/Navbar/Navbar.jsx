import React, { useState } from "react";
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

  return (
    <nav className="h-[10%] w-full pl-[8%] pr-[8%] pt-[0.8%] flex items-center justify-between font-sans bg-customGrey" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="w-[13.3%] text-white">
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
          {isOpen ? (
            <FaTimes size={30} style={{ color: "#000000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000000" }} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center text-white md:hidden">
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
      )}
    </nav>
  );
}
