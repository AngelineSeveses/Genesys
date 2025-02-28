import React from "react";
import { Link as ScrollLink } from "react-scroll";

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
      </div>,
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-Black text-white">
      <div className="max-w-screen-lg mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left Section: Logo & Description */}
          <div className="space-y-6 text-left">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80} // Ensures home section appears correctly
              className="block cursor-pointer"
            >
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-[35px] w-auto"
              />
            </ScrollLink>
            <p className="text-white font-normal leading-relaxed">
              Empower your business with our <br /> innovative AI solutions.
            </p>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-3">
                {/* ✅ Titles (Quick Links & Company) are BOLD */}
                <p className="text-gray-400 uppercase font-bold">{title}</p>
                {items.map((link, index) => (
                  <li key={index}>
                    {typeof link === "string" ? (
                      <ScrollLink
                        to={link.toLowerCase().replace(/\s+/g, "")} // Converts text to ID format
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 font-normal" // ✅ Items are NORMAL weight
                      >
                        {link}
                      </ScrollLink>
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
          <p className="text-gray-400 text-sm text-left font-normal">
            © {currentYear}{" "}
            <a
              href="https://material-tailwind.com/"
              className="hover:text-white"
            >
              PopAI Agency
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-left font-normal">
              Terms & Conditions
            </p>
            <p className="text-gray-400 text-sm text-left font-normal">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
