import React, { useState, useEffect } from "react";
import { Navbar, IconButton, Button } from "@material-tailwind/react";
import { Link as ScrollLink } from "react-scroll";

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
    { name: "Home", to: "home" },
    { name: "Use Cases", to: "usecases" },
    { name: "Workflow", to: "workflow" },
    { name: "Revenue Streams", to: "streams" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full" style={{ backgroundColor: "#000000" }}>
      <Navbar className="max-w-full rounded-none px-4 py-3 text-gray-100 border-none lg:px-8 lg:py-6" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          {/* Logo */}
          <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="mr-4 cursor-pointer">
            <img src="/images/logo.svg" alt="Logo" className="h-[30px] w-auto" />
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            {navItems.map(({ name, to }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-500 hover:text-white transition-colors font-medium"
              >
                {name}
              </ScrollLink>
            ))}
            <Button className="bg-customDark text-white rounded-full shadow-none normal-case font-normal text-base">
              Create a Character
            </Button>
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

      {/* Mobile Menu - No Animation */}
      {openNav && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          {/* Close Button (Fixed Top-Right) */}
          <div className="absolute top-5 right-5">
            <IconButton variant="text" className="text-white" onClick={() => setOpenNav(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </IconButton>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6">
            {navItems.map(({ name, to }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors font-medium text-lg"
                onClick={() => setOpenNav(false)}
              >
                {name}
              </ScrollLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
