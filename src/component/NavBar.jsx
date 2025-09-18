import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";
// import Button from "./reusable/Button";
import AuthModal from "./AuthModal";
import { Button } from "@mui/material";


export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile nav
  const [showAuth, setShowAuth] = useState(false); // auth modal

  // Close menu on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);
console.log(showAuth);
  return (
    <>
      <nav className="w-full bg-[#c5e2e2] shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img className="h-10 w-10" src={logo} alt="logo" />
            <span className="font-dancing-script font-extrabold text-xl">
              Fitness Tycoon
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <a href="/">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
            </a>
            <a href="#about">
              <li className="hover:text-blue-500 cursor-pointer">About</li>
            </a>
            <a href="#service">
              <li className="hover:text-blue-500 cursor-pointer">Services</li>
            </a>
            <a href="#contact">
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </a>
            <li>
              {/* <Button label="Login" onClick={() => setShowAuth(true)} /> */}
              <Button variant="contained" onClick={() => setShowAuth(true)}>
                Login
              </Button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#eefeff] shadow-lg">
            <ul className="flex flex-col space-y-4 px-4 py-6">
              <a href="#home">
                <li className="hover:text-blue-500 cursor-pointer">Home</li>
              </a>
              <a href="#about">
                <li className="hover:text-blue-500 cursor-pointer">About</li>
              </a>
              <a href="#service">
                <li className="hover:text-blue-500 cursor-pointer">Services</li>
              </a>
              <a href="#contact">
                <li className="hover:text-blue-500 cursor-pointer">Contact</li>
              </a>
              <li>
                <Button variant="contained" onClick={() => setShowAuth(true)}>
                  Login
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
};
