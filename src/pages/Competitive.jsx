import React, { useEffect, useState, useRef } from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

// Reusable Step Card Component
const StepCard = ({ title, description, setHeight }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setHeight((prev) => Math.max(prev, cardRef.current.clientHeight));
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      className="bg-customGray w-96 shadow-lg border border-customBorder h-full flex flex-col"
    >
      <CardBody className="flex flex-col flex-grow">
        <Typography variant="h5" color="white" className="font-normal">
          {title}
        </Typography>
        <div className="flex-grow"></div>{" "}
        {/* Pushes description to the bottom */}
        <Typography className="text-gray-500">{description}</Typography>
      </CardBody>
    </Card>
  );
};

const Competitive = () => {
  const [maxHeight, setMaxHeight] = useState(0);

  const steps = [
    {
      title: "Multi-Modality",
      description:
        "Seamlessly integrates text, voice, image, and video capabilities",
    },
    {
      title: "Customization Depth",
      description:
        "Unique blend of personality, appearance, and voice options.",
    },
    {
      title: "Use Case Diversity",
      description: "From companionship to advanced marketing applications.",
    },
    {
      title: "AI/Real/Hybrid Models",
      description:
        "Blend of fully AI, semi-AI, and real-person clones for broader appeal.",
    },
    {
      title: "Seamless Cross-Platform",
      description:
        "The AI characters can be easily embedded into a wide range of platforms using API, providing unified experience across multiple channels",
    },
    {
      title: "Ethical and Transparent",
      description:
        "From companionship to advanced marketing a The system integrates built-in safeguards for ethical use, ensures compliance with regulations and builds trust with users and businesses",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-6 space-y-12 py-[100px]">
      <Typography
        variant="h3"
        className="text-center font-normal text-lg sm:text-xl md:text-xl lg:text-2xl"
      >
        Multi-Agent Types
      </Typography>

      {/* Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex justify-center"
            style={{ height: maxHeight ? `${maxHeight}px` : "auto" }} // Set uniform height
          >
            <StepCard
              title={step.title}
              description={step.description}
              setHeight={setMaxHeight}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitive;
