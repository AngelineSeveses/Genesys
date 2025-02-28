import React, { useEffect, useRef, memo } from "react";

const ImageSlider = () => {
  const sliderTrackRef1 = useRef(null);
  const sliderTrackRef2 = useRef(null);
  const sliderTrackRef3 = useRef(null);

  useEffect(() => {
    const SPEED_FACTOR = 12;
    const imageCount = 5;

    [sliderTrackRef1, sliderTrackRef2, sliderTrackRef3].forEach((ref) => {
      if (ref.current) {
        ref.current.style.animationDuration = `${imageCount * SPEED_FACTOR}s`;
      }
    });
  }, []);

  return (
    <div className="bg-black pt-8 overflow-hidden space-y-4">
      <div className="w-full px-6 lg:px-8">
        {/* First Slider - Left to Right */}
        <div className="slider-container relative overflow-hidden">
          <div
            ref={sliderTrackRef1}
            className="slider-track flex animate-leftToRight"
          >
            {[...Array(3)].map((_, index) => (
              <MemoizedImageGroup key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-8">
        {/* Second Slider - Right to Left */}
        <div className="slider-container relative overflow-hidden">
          <div
            ref={sliderTrackRef2}
            className="slider-track flex animate-rightToLeft"
          >
            {[...Array(3)].map((_, index) => (
              <MemoizedImageGroup key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-8">
        {/* Third Slider - Left to Right Again */}
        <div className="slider-container relative overflow-hidden">
          <div
            ref={sliderTrackRef3}
            className="slider-track flex animate-leftToRight"
          >
            {[...Array(3)].map((_, index) => (
              <MemoizedImageGroup key={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .slider-container {
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        @keyframes leftToRight {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes rightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-leftToRight {
          animation: leftToRight 15s linear infinite;
          width: max-content;
          will-change: transform;
        }

        .animate-rightToLeft {
          animation: rightToLeft 15s linear infinite;
          width: max-content;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

// Lazy-loaded Image Component
const ImageGroup = () => (
  <div className="image-group flex">
    {[1, 2, 3, 4, 5].map((num) => (
      <div key={num} className="image-wrapper flex-shrink-0 mx-2">
        <img
          src={`/images/slider${num}.svg`}
          alt={`Logo ${num}`}
          className="h-[70px] w-auto block"
          loading="lazy" // Lazy loading applied here ✅
        />
      </div>
    ))}
  </div>
);

// Memoize the component to avoid unnecessary re-renders
const MemoizedImageGroup = memo(ImageGroup);

export default ImageSlider;
