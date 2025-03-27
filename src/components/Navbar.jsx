import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

// Define an array of nav items
const NavItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

// Reusable NavItems component
const NavItemsList = ({ toggleMenu }) => {
  return (
    <ul className="flex md:flex-row flex-col md:space-x-8 gap-8">
      {NavItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-pink-800 font-bold" : "hover:text-purple-800"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="container mx-auto py-8 px-8">
      <nav className="max-w-screen-2xl container mx-auto space-y-8 flex justify-between items-center w-full">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          Panto
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <NavItemsList />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {!isOpen && <FaBars />}
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-transparent opacity-80 flex flex-col items-center justify-center ">
            <NavLink
              to="/"
              className="text-xl font-bold absolute top-0 left-0  cursor-pointer"
            >
              Panto
            </NavLink>
            <div
              className="absolute top-0 right-0 text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              <RxCross2 />
            </div>
            <NavItemsList toggleMenu={toggleMenu} />
          </div>
        )}

        {/* Shopping Cart Icon */}
        <div className=" hidden md:block relative">
          <AiOutlineShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-3 bg-amber-400 rounded-full text-white h-4 w-4 flex items-center justify-center">
            9
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
