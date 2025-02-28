import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import Linearcard from "../components/Linearcard";

const Workflow = () => {
  return (
    <div
      id="workflow"
      className="flex flex-col items-center justify-center pt-[100px] pb-[100px]"
    >
      {/* Title */}
      <Typography
        variant="h3"
        className="text-center font-normal text-lg sm:text-xl md:text-xl lg:text-2xl"
      >
        Workflow – Generate Character
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="paragraph"
        className="text-center text-base sm:text-base md:text-sm lga:text-lg xl:text-lg mt-2"
      >
        Step Into the World of Your Character’s Creation, From Concept to
        Completion
      </Typography>

      <div className="mt-8 w-full max-w-4xl px-6 md:px-0">
        <video className="w-full rounded-lg" controls autoPlay muted loop>
          <source src="/images/Genesys.webm" type="video/webm" />
          <source src="/images/Genesysvid.mp4" type="video/mp4" />
        </video>
      </div>

      <Linearcard />
    </div>
  );
};

export default Workflow;
