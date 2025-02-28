import React from 'react';

const Imageslider = () => {
  return (
    <div className="bg-black pt-8 overflow-hidden">
      <div className="w-full px-6 lg:px-8">
        <div className="relative flex overflow-hidden">
          {/* Continuous scrolling container */}
          <div className="flex min-w-full animate-scroll whitespace-nowrap">
            {/* Logos repeated twice for smooth transition */}
            <div className="flex shrink-0">
              <img src="/images/slider1.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider2.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider3.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider4.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider5.svg" alt="Logo" className="h-[70px] w-auto px-3" />
            </div>
            <div className="flex shrink-0">
              <img src="/images/slider1.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider2.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider3.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider4.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider5.svg" alt="Logo" className="h-[70px] w-auto px-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Imageslider;
