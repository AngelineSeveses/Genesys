import React from "react";
import { Typography } from "@material-tailwind/react";

const Title = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-2 space-y-6 m-[100px]"
      style={{ maxWidth: "1200px" }}
    >
      <Typography
        variant="h3"
        className="text-center font-normal text-lg sm:text-xl md:text-xl lg:text-2xl"
      >
        AI <span className="italic text-pink-500">Generation System</span> that
        creates and manages fully customizable and multi-modal AI characters.
      </Typography>

      <Typography
        variant="paragraph"
        className="text-center font-normal text-base sm:text-base md:text-lg lg:text-xl xl:text-xl"
      >
        Capable of generating engaging content across text, image, voice, and
        video formats.
      </Typography>
    </div>
  );
};

export default Title;
