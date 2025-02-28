import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

// Reusable Step Card Component
const StepCard = ({ icon, title, description }) => {
  return (
    <Card className="bg-customGray w-full shadow-lg border border-customBorder h-full">
      <CardBody className="flex flex-col h-full">
        {/* Title with Icon */}
        <div className="flex items-center">
          <img src={icon} alt={title} className="w-8 h-8 mr-2" />
          <Typography variant="h5" color="white" className="font-normal">
            {title}
          </Typography>
        </div>

        {/* Add Space Between Title and Description */}
        <div className="mt-24"></div>

        {/* Description */}
        <Typography className="text-gray-500">{description}</Typography>
      </CardBody>
    </Card>
  );
};

const Streams = () => {
  const stepsSlide1 = [
    {
      icon: "/images/card1.svg",
      title: "Subscription Plans",
      description: "Tiered pricing for different levels of access (e.g., basic, premium).",
    },
    {
      icon: "/images/card2.svg",
      title: "Pay-per-Character",
      description: "Charge per AI character created and deployed.",
    },
    {
      icon: "/images/card3.svg",
      title: "Content Payment",
      description: "Charge per image/video, phone calls.",
    },
  ];

  const stepsSlide2 = [
    {
      icon: "/images/money.svg",
      title: "Token As A Service",
      description: "AI agent that expertise in special domain",
    },
    {
      icon: "/images/man.svg",
      title: "Customization Services",
      description: "Add-ons for advanced features like voice cloning or hyper-detailed avatars",
    },
    {
      icon: "/images/check.svg",
      title: "Enterprise Solutions",
      description: "Licensing for large-scale use (e.g., e-commerce businesses, social platforms).",
    },
  ];

  return (
    <div id="streams" className="flex flex-col items-center justify-center pt-[120px] pb-[100px]">
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
        className="text-center text-base sm:text-base md:text-sm lg:text-lg xl:text-lg mt-2"
      >
        Step Into the World of Your Agent’s Creation, From Concept to Completion
      </Typography>

      {/* Image */}
      <div className="mt-8 w-full max-w-4xl px-6 md:px-0">
        <img src="/images/revenue.png" alt="Genesys" className="w-full rounded-lg" />
      </div>

      {/* Step Cards Carousel */}
      <div className="w-full max-w-4xl px-6 md:px-0 mt-12">
        <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }}>
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mb-8">
              {stepsSlide1.map((step, index) => (
                <StepCard key={index} icon={step.icon} title={step.title} description={step.description} />
              ))}
            </div>
          </SwiperSlide>

          {/* Slide 2 (Different Content) */}
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mb-8">
              {stepsSlide2.map((step, index) => (
                <StepCard key={`slide2-${index}`} icon={step.icon} title={step.title} description={step.description} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

     
    </div>
  );
};

export default Streams;
