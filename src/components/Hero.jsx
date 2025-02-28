import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-2 space-y-6 pt-[120px] pb-[100px]"
      style={{ maxWidth: "1200px" }}
    >
      <a href="#" className="mr-4 cursor-pointer">
        <img src="/images/image.svg" alt="Logo" className="h-[50px] w-auto" />
      </a>
      <Typography variant="h1" className="text-center font-medium">
        AI Agents Come to Life.
      </Typography>
      <Typography variant="paragraph" className="text-center font-normal">
        With Genesys, the future isn’t just imagined—it’s built.
      </Typography>
      <Button className="mt-4 bg-white text-black rounded-full shadow-none normal-case font-light text-base flex items-center justify-center">
        Create an Agent
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 7.13403C8.58579 7.13403 8.25 6.79825 8.25 6.38403C8.25 5.96982 8.58579 5.63403 9 5.63403H18C18.4142 5.63403 18.75 5.96982 18.75 6.38403V15.384C18.75 15.7982 18.4142 16.134 18 16.134C17.5858 16.134 17.25 15.7982 17.25 15.384V8.19469L6.53033 18.9144C6.23744 19.2073 5.76256 19.2073 5.46967 18.9144C5.17678 18.6215 5.17678 18.1466 5.46967 17.8537L16.1893 7.13403H9Z"
            fill="#1C274C"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Hero;
