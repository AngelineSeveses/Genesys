import React from 'react';
import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Quick Links",
    items: ["Home", "Use Cases", "Workflow", "Revenue Streams"],
  },
  {
    title: "Company",
    items: [
      "support@popai.agency",
      <div key="icons" className="flex space-x-3 mt-3">
        <img src="/images/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
        <img src="/images/ig.svg" alt="Instagram" className="h-6 w-6" />
        <img src="/images/fb.svg" alt="Facebook" className="h-6 w-6" />
      </div>
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-Black text-white">
      <div className="max-w-screen-lg mx-auto px-6 py-12 md:py-16">
        {/* Updated Grid Structure for Left Alignment on All Screens */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Section: Logo & Description */}
          <div className="space-y-6 text-left">
            <a href="#" className="block">
              <img src="/images/logo.svg" alt="Logo" className="h-[35px] w-auto" />
            </a>
            <Typography color="white" className="font-normal leading-relaxed">
              Empower your business with our <br /> innovative AI solutions.
            </Typography>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-3">
                <Typography variant="small" color="blue-gray" className="text-gray-400 font-medium uppercase">
                  {title}
                </Typography>
                {items.map((link, index) => (
                  <li key={index}>
                    {typeof link === "string" ? (
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </Typography>
                    ) : (
                      link
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Footer Bottom - Left Align on Mobile & Tablet */}
        <div className="mt-12 flex flex-col items-start justify-start border-t border-gray-700 pt-6 md:flex-row md:justify-between">
          <Typography variant="small" className="text-gray-400 text-sm text-left">
            © {currentYear} <a href="https://material-tailwind.com/" className="hover:text-white">PopAI Agency</a>. All Rights Reserved.
          </Typography>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <Typography variant="small" className="text-gray-400 text-sm text-left">
              Terms & Conditions
            </Typography>
            <Typography variant="small" className="text-gray-400 text-sm text-left">
              Privacy Policy
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
