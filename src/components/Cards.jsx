import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// Reusable Card Component
const InfoCard = ({ title, description, imageSrc }) => {
  return (
    <Card className="w-full max-w-[56rem] flex-col-reverse md:flex-row-reverse mt-16 rounded-none border-none bg-customGray text-white">
      {/* GIF Section with Slight Zoom */}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-1/2 shrink-0 rounded-none overflow-hidden"
      >
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover rounded-none transform scale-105 transition-none"
          />
        </div>
      </CardHeader>

      {/* Text Section */}
      <CardBody className="flex flex-col justify-center space-y-8 md:space-y-2">
        <Typography variant="h4" color="white" className="font-normal">
          {title}
        </Typography>
        <Typography color="white" className="font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

const Cards = () => {
  const cardData = [
    {
      title: "Engagement & Promotion",
      description:
        "AI-powered avatars for personalized engagement and activity generation.",
      imageSrc: "/images/v2.gif",
    },
    {
      title: "Entertainment / Lifestyle",
      description:
        "Digital companions for users seeking emotional connection or lifestyle improvement.",
      imageSrc: "/images/v1.gif",
    },
    {
      title: "Hybrid",
      description:
        "AI agents that perform tasks with greater speed, efficiency, and cost-effectiveness compared to traditional human resources.",
      imageSrc: "/images/v3.gif",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center max-w-screen-lg mx-auto px-2 space-y-6 m-[100px]"
      style={{ maxWidth: "1200px" }}
    >
      {cardData.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
};

export default Cards;
