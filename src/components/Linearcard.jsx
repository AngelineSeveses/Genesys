import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

// Reusable Step Card Component
const StepCard = ({ title, description }) => {
  return (
    <Card className="bg-customGray w-full max-w-[400px] mx-auto shadow-lg border border-customBorder">
      <CardBody className="flex flex-row items-center justify-center h-full p-6 space-y-4">
        {/* Modify the title to have the number part bigger */}
        <Typography variant="h5" color="white" className="font-normal text-center">
          <span className="text-3xl">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </Typography>
        <Typography className="text-gray-500 text-center">{description}</Typography>
      </CardBody>
    </Card>
  );
};

const Linearcard = () => {
  const steps = [
    {
      title: "01 Create Character",
      description:
        "Personality, Appearance, Voice, Content, Instructions. Set the Objection/Mission of the character",
    },
    {
      title: "02 Deploy the Character",
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
    
      {/* Step Cards */}
      <div className="flex flex-col items-center space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex justify-center w-full">
            <StepCard title={step.title} description={step.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linearcard;
