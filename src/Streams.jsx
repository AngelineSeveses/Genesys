import React from "react";
import { Button, Typography } from "@material-tailwind/react";


const Streams = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[100px] pb-[100px]">
      {/* Title */}
      <Typography
        variant="h3"
        className="text-center font-normal text-lg sm:text-xl md:text-xl lg:text-2xl"
      >
        Revenue Streams
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="paragraph"
        className="text-center text-base sm:text-base md:text-sm lga:text-lg xl:text-lg mt-2"
      >
        Step Into the World of Your Agent’s Creation, From Concept to Completion
      </Typography>

      <div className="mt-8 w-full max-w-4xl px-6 md:px-0">
          <img src="/images/revenue.png" alt="Genesys" className="w-full rounded-lg" />
        </div>

   
    </div>
  );
};

export default Streams;
