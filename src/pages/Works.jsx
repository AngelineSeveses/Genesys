import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

// Reusable Step Card Component
const StepCard = ({ title, description }) => {
  return (
    <Card className="bg-customGray w-96 shadow-lg border border-customBorder">
      <CardBody className="flex flex-col h-full">
        {/* Modify the title to have the number part bigger */}
        <Typography variant="h5" color="white" className="mb-6 font-normal">
          <span className="text-3xl">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </Typography>
        <Typography className="text-gray-500 mt-6">{description}</Typography>
      </CardBody>
    </Card>
  );
};

const Works = () => {
  const steps = [
    {
      title: "01 Create Agent",
      description:
        "Personality, Appearance, Voice, Content, Instructions. Set the Objection/Mission of the agent",
    },
    {
      title: "02 Deploy the Agent",
      description:
        "Dedicated sales team to secure demos and build relationships with potential clients.",
    },
    {
      title: "03 Monitor & Optimize",
      description: "From companionship to advanced marketing applications.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-6 space-y-12 py-[100px]">
      {/* Section Title */}
      <Typography
        variant="h3"
        className="text-center font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        How it works
      </Typography>

      {/* Section Subtitle */}
      <Typography
        variant="paragraph"
        className="text-center text-base sm:text-base md:text-sm lg:text-lg xl:text-lg mt-2"
      >
        A Step-by-Step Guide to Our Process for Seamless Collaboration and
        Exceptional Results.
      </Typography>

      {/* Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-6">
        {steps.map((step, index) => (
          <div key={index} className="flex justify-center">
            <StepCard title={step.title} description={step.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
