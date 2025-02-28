import React from "react";
import { Button, Typography } from "@material-tailwind/react";

// Reusable Client Logo Component
const ClientLogo = ({ src, alt }) => {
  return (
    <img
      className="max-h-24 w-auto object-contain"
      src={src}
      alt={alt}
      width="150"
      height="150"
    />
  );
};

const Clients = () => {
  const clientLogos = [
    "/images/client1.svg",
    "/images/client2.svg",
    "/images/client3.svg",
    "/images/client4.svg",
    "/images/client5.svg",
    "/images/client6.svg",
  ];

  return (
    <div className="bg-customGray flex flex-col items-center justify-center pt-[100px] pb-[100px]">
      {/* Title */}
      <Typography
        variant="h3"
        className="text-center font-normal text-lg sm:text-xl md:text-xl lg:text-2xl"
      >
        Among our Clients
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="paragraph"
        className="text-center text-base sm:text-base md:text-sm lg:text-lg xl:text-lg mt-2"
      >
        A categorized display of clients by industry or services
      </Typography>

      {/* Button */}
      <Button className="mt-6 bg-white text-black rounded-full shadow-none normal-case font-light text-base flex items-center justify-center px-6 py-2">
        See our clients
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 7.13403C8.58579 7.13403 8.25 6.79825 8.25 6.38403C8.25 5.96982 8.58579 5.63403 9 5.63403H18C18.4142 5.63403 18.75 5.96982 18.75 6.38403V15.384C18.75 15.7982 18.4142 16.134 18 16.134C17.5858 16.134 17.25 15.7982 17.25 15.384V8.19469L6.53033 18.9144C6.23744 19.2073 5.76256 19.2073 5.46967 18.9144C5.17678 18.6215 5.17678 18.1466 5.46967 17.8537L16.1893 7.13403H9Z"
            fill="#1C274C"
          />
        </svg>
      </Button>

      {/* Client Logos */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-x-8 gap-y-10 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 overflow-x-auto whitespace-nowrap">
          {clientLogos.map((logo, index) => (
            <ClientLogo
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
