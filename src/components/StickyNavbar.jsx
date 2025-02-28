import React, { useState, useEffect } from "react";
import { Navbar, IconButton, Button } from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Use Cases", href: "#usecases" },
    { name: "Workflow", href: "#workflow" },
    { name: "Revenue Streams", href: "#streams" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-black">
      <Navbar className="max-w-full rounded-none px-4 py-3 text-gray-100 border-none lg:px-4 lg:py-4">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home">
            <img src="/images/logo.svg" alt="Logo" className="h-[30px] w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            {navItems.map(({ name, href }) => (
              <a key={href} href={href} className="text-gray-500 hover:text-white transition-colors font-medium">
                {name}
              </a>
            ))}
            <a href="/create-character" className="bg-customDark text-white rounded-full px-4 py-2">
              Create a Character
            </a>
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent lg:hidden"
            onClick={() => setOpenNav(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </IconButton>
        </div>
      </Navbar>

      {/* Mobile Menu */}
      {openNav && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          {/* Close Button */}
          <div className="absolute top-5 right-5">
            <IconButton variant="text" className="text-white" onClick={() => setOpenNav(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </IconButton>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6">
            {navItems.map(({ name, href }) => (
              <a key={href} href={href} className="text-gray-300 hover:text-white transition-colors font-medium text-lg" onClick={() => setOpenNav(false)}>
                {name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
