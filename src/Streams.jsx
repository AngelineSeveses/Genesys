import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Reusable Step Card Component
const StepCard = ({ title, description }) => {
  return (
    <Card className="bg-customGray w-full shadow-lg border border-customBorder">
      <CardBody className="flex flex-col h-full">
        <Typography variant="h5" color="white" className="mb-6 font-normal">
          <span className="text-3xl">{title.split(" ")[0]}</span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </Typography>
        <Typography className="text-gray-500 mt-6">{description}</Typography>
      </CardBody>
    </Card>
  );
};

const Streams = () => {
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
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mb-8">
              {steps.map((step, index) => (
                <StepCard key={index} title={step.title} description={step.description} />
              ))}
            </div>
          </SwiperSlide>

          {/* Slide 2 (Duplicated Cards) */}
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mb-8">
              {steps.map((step, index) => (
                <StepCard key={`dup-${index}`} title={step.title} description={step.description} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Streams;
