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
    <header className="fixed top-0 left-0 right-0 z-50  ">
      <nav className="section-container text-white  mx-auto flex justify-between items-center">
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
          <div className="absolute top-0 left-0 w-full h-screen  flex flex-col items-center justify-center ">
            <div
              className="absolute  top-8 right-14 text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              <RxCross2 className="text-white text-3xl" />
            </div>
            <NavItemsList toggleMenu={toggleMenu} />
          </div>
        )}

        {/* Shopping Cart Icon */}
        <div className=" hidden md:block relative cursor-pointer">
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
