import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

// Reusable Step Card Component
const StepCard = ({ title, description }) => {
  return (
    <Card className="bg-customGray w-full max-w-7xl mx-auto shadow-lg border border-customBorder">
      <CardBody className="flex flex-col md:flex-row items-start justify-between h-full p-4 md:p-6 gap-4 md:gap-6">
        <Typography
          variant="h5"
          color="white"
          className="font-normal flex items-center text-left"
        >
          <span className="text-3xl font-bold">{title.split(" ")[0]}</span>
          <span className="ml-2">{title.split(" ").slice(1).join(" ")}</span>
        </Typography>
        <Typography className="text-gray-500 text-left">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

const Linearcard = () => {
  const steps = [
    {
      title: "01 Create Agent",
      description:
        "Basic identity details (name, gender, birthday, location, etc.).",
    },
    {
      title: "02 Personality Profile",
      description:
        "Define traits like hobbies, interests, tone of communication, and persona.",
    },
    {
      title: "03 Appearance",
      description:
        "Detailed customization of ethnicity, body type, skin tone, hair, eye color, and more.",
    },
    {
      title: "04 Generate Voice",
      description:
        "AI-generated voice (customizable tone and pitch) or Voice cloning.",
    },
    {
      title: "05 Upload/Generated Content",
      description:
        "Real content, AI-generated and Face Swap. Images and videos.",
    },
    {
      title: "06 Mission Definition",
      description:
        "Customizable objectives and operational guidelines for agent behavior.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-6 py-[100px]">
      {/* Step Cards - Always 1 Card Per Row */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Linearcard;
