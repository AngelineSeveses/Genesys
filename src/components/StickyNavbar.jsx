import React, { useState, useEffect } from "react";
import { Navbar, IconButton, Button, Typography } from "@material-tailwind/react";
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
    { name: "Revenue Streams", to: "revenue" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-black">
      <Navbar className="max-w-full rounded-none bg-black px-4 py-3 text-gray-100 border-none lg:px-8 lg:py-6">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="mr-4 cursor-pointer">
            <img src="/images/logo.svg" alt="Logo" className="h-[30px] w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(({ name, to }) => (
              <Typography key={to} as="li" variant="small" className="text-gray-500">
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80} // Adjust offset for sticky navbar
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {name}
                </ScrollLink>
              </Typography>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-customDark text-white rounded-full shadow-none normal-case font-normal text-base hidden lg:block">
            Create a Character
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </Navbar>

      {/* Mobile Menu */}
      {openNav && (
        <div className="lg:hidden bg-black px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map(({ name, to }) => (
              <Typography key={to} as="li" variant="small" className="text-gray-500">
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-white transition-colors"
                  onClick={() => setOpenNav(false)} // Close menu on click
                >
                  {name}
                </ScrollLink>
              </Typography>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
