import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Import hamburger icon
import { NavDrawer } from "./NavDrawer";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center justify-center p-2 fixed top-0 left-0 right-0 shadow-md bg-white z-50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dvdrkucjh/image/upload/ujhd6oa8n0sgtbqlaggz"
            alt="logo"
            className="w-20 object-cover"
          />
        </Link>
        <div className="md:hidden">
          <NavDrawer />
        </div>
        {/* Navigation items for larger screens */}
        <ul className="hidden md:flex gap-16 text-lg font-semibold font-poppins">
          <li className="hover:text-purple-700 ">
            <Link onClick={() => scrollToSection("home")}>Home</Link>{" "}
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("about")}>About</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("inauguration")}>
              Inaugration
            </Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("vision")}>Vision</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("projects")}>Projects</Link>
          </li>

          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("contact")}>Contact</Link>
          </li>
          <li className="hover:text-purple-700">
            <Link onClick={() => scrollToSection("service")}>Service</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
