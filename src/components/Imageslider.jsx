import React from 'react';

const Imageslider = () => {
  return (
    <div className="bg-black pt-8">
      <div className="w-full px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* Repeat the logos to create a continuous effect */}
            <div className="flex">
              <img src="/images/slider1.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider2.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider3.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider4.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider5.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              {/* Repeat the logos again to ensure seamless looping */}
              <img src="/images/slider1.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider2.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider3.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider4.svg" alt="Logo" className="h-[70px] w-auto px-3" />
              <img src="/images/slider5.svg" alt="Logo" className="h-[70px] w-auto px-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
